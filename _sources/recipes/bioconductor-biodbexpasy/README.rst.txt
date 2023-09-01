:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbexpasy'
.. highlight: bash

bioconductor-biodbexpasy
========================

.. conda:recipe:: bioconductor-biodbexpasy
   :replaces_section_title:
   :noindex:

   biodbExpasy\, a library for connecting to Expasy ENZYME database.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biodbExpasy.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbexpasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbexpasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbexpasy/meta.yaml>`_

   The biodbExpasy library provides access to Expasy ENZYME database\, using biodb package framework.  It allows to retrieve entries by their accession number. Web services can be accessed for searching the database by name or comments.


.. conda:package:: bioconductor-biodbexpasy

   |downloads_bioconductor-biodbexpasy| |docker_bioconductor-biodbexpasy|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chk: 
   :depends r-r6: 
   :depends r-stringr: 
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

      mamba install bioconductor-biodbexpasy

   and update with::

      mamba update bioconductor-biodbexpasy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodbexpasy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbexpasy:<tag>

   (see `bioconductor-biodbexpasy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbexpasy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbexpasy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbexpasy
   :alt:   (downloads)
.. |docker_bioconductor-biodbexpasy| image:: https://quay.io/repository/biocontainers/bioconductor-biodbexpasy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbexpasy
.. _`bioconductor-biodbexpasy/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbexpasy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbexpasy";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbexpasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbexpasy/README.html