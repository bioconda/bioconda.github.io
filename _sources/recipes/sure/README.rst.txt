:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sure'
.. highlight: bash

sure
====

.. conda:recipe:: sure
   :replaces_section_title:
   :noindex:

   utility belt for automated testing in python for python

   :homepage: http://github.com/gabrielfalcao/sure
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`sure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure/meta.yaml>`_

   


.. conda:package:: sure

   |downloads_sure| |docker_sure|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.11-0``,  ``1.2.24-0``

      

   
   :depends mock: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sure

   and update with::

      mamba update sure

  To create a new environment, run::

      mamba create --name myenvname sure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sure:<tag>

   (see `sure/tags`_ for valid values for ``<tag>``)


.. |downloads_sure| image:: https://img.shields.io/conda/dn/bioconda/sure.svg?style=flat
   :target: https://anaconda.org/bioconda/sure
   :alt:   (downloads)
.. |docker_sure| image:: https://quay.io/repository/biocontainers/sure/status
   :target: https://quay.io/repository/biocontainers/sure
.. _`sure/tags`: https://quay.io/repository/biocontainers/sure?tab=tags


.. raw:: html

    <script>
        var package = "sure";
        var versions = ["2.0.1","2.0.0","1.4.11","1.2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sure/README.html