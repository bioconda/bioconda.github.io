:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'axiome'
.. highlight: bash

axiome
======

.. conda:recipe:: axiome
   :replaces_section_title:
   :noindex:

   AXIOME2\: Automation Extension and Integration of Microbial Ecology

   :homepage: https://github.com/neufeld/AXIOME2
   :license: MIT / MIT License
   :recipe: /`axiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome/meta.yaml>`_

   


.. conda:package:: axiome

   |downloads_axiome| |docker_axiome|

   :versions:
      
      

      ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-0``

      

   
   :depends npyscreen: 
   :depends python: ``<3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install axiome

   and update with::

      mamba update axiome

  To create a new environment, run::

      mamba create --name myenvname axiome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/axiome:<tag>

   (see `axiome/tags`_ for valid values for ``<tag>``)


.. |downloads_axiome| image:: https://img.shields.io/conda/dn/bioconda/axiome.svg?style=flat
   :target: https://anaconda.org/bioconda/axiome
   :alt:   (downloads)
.. |docker_axiome| image:: https://quay.io/repository/biocontainers/axiome/status
   :target: https://quay.io/repository/biocontainers/axiome
.. _`axiome/tags`: https://quay.io/repository/biocontainers/axiome?tab=tags


.. raw:: html

    <script>
        var package = "axiome";
        var versions = ["2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/axiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/axiome/README.html