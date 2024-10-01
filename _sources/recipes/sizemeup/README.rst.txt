:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sizemeup'
.. highlight: bash

sizemeup
========

.. conda:recipe:: sizemeup
   :replaces_section_title:
   :noindex:

   A simple tool to determine the genome size of an organism

   :homepage: https://github.com/rpetit3/sizemeup
   :license: MIT
   :recipe: /`sizemeup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sizemeup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sizemeup/meta.yaml>`_

   


.. conda:package:: sizemeup

   |downloads_sizemeup| |docker_sizemeup|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends python: ``>=3.7``
   :depends requests: 
   :depends rich-click: ``>=1.6.0``
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

      mamba install sizemeup

   and update with::

      mamba update sizemeup

  To create a new environment, run::

      mamba create --name myenvname sizemeup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sizemeup:<tag>

   (see `sizemeup/tags`_ for valid values for ``<tag>``)


.. |downloads_sizemeup| image:: https://img.shields.io/conda/dn/bioconda/sizemeup.svg?style=flat
   :target: https://anaconda.org/bioconda/sizemeup
   :alt:   (downloads)
.. |docker_sizemeup| image:: https://quay.io/repository/biocontainers/sizemeup/status
   :target: https://quay.io/repository/biocontainers/sizemeup
.. _`sizemeup/tags`: https://quay.io/repository/biocontainers/sizemeup?tab=tags


.. raw:: html

    <script>
        var package = "sizemeup";
        var versions = ["1.1.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sizemeup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sizemeup/README.html