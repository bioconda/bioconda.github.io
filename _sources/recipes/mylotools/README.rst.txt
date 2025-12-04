:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mylotools'
.. highlight: bash

mylotools
=========

.. conda:recipe:: mylotools
   :replaces_section_title:
   :noindex:

   Utilities for manipulation and quality control of the myloasm long\-read assembler

   :homepage: https://github.com/bluenote-1577/mylotools
   :license: MIT
   :recipe: /`mylotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mylotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mylotools/meta.yaml>`_

   


.. conda:package:: mylotools

   |downloads_mylotools| |docker_mylotools|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends biopython: ``>=1``
   :depends matplotlib-base: 
   :depends plotly: ``>=6``
   :depends python: 
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

      mamba install mylotools

   and update with::

      mamba update mylotools

  To create a new environment, run::

      mamba create --name myenvname mylotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mylotools:<tag>

   (see `mylotools/tags`_ for valid values for ``<tag>``)


.. |downloads_mylotools| image:: https://img.shields.io/conda/dn/bioconda/mylotools.svg?style=flat
   :target: https://anaconda.org/bioconda/mylotools
   :alt:   (downloads)
.. |docker_mylotools| image:: https://quay.io/repository/biocontainers/mylotools/status
   :target: https://quay.io/repository/biocontainers/mylotools
.. _`mylotools/tags`: https://quay.io/repository/biocontainers/mylotools?tab=tags


.. raw:: html

    <script>
        var package = "mylotools";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mylotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mylotools/README.html