:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tekrabber'
.. highlight: bash

bioconductor-tekrabber
======================

.. conda:recipe:: bioconductor-tekrabber
   :replaces_section_title:
   :noindex:

   An R package estimates the correlations of orthologs and transposable elements between two species

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TEKRABber.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tekrabber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tekrabber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tekrabber/meta.yaml>`_

   TEKRABber is made to provide a user\-friendly pipeline for comparing orthologs and transposable elements \(TEs\) between two species. It considers the orthology confidence between two species from BioMart to normalize expression counts and detect differentially expressed orthologs\/TEs. Then it provides one to one correlation analysis for desired orthologs and TEs. There is also an app function to have a first insight on the result. Users can prepare orthologs\/TEs RNA\-seq expression data by their own preference to run TEKRABber following the data structure mentioned in the vignettes.


.. conda:package:: bioconductor-tekrabber

   |downloads_bioconductor-tekrabber| |docker_bioconductor-tekrabber|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0``
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-scbn: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scbn: ``>=1.20.0,<1.21.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rcpp: ``>=1.0.7``
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

      mamba install bioconductor-tekrabber

   and update with::

      mamba update bioconductor-tekrabber

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tekrabber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tekrabber:<tag>

   (see `bioconductor-tekrabber/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tekrabber| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tekrabber.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tekrabber
   :alt:   (downloads)
.. |docker_bioconductor-tekrabber| image:: https://quay.io/repository/biocontainers/bioconductor-tekrabber/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tekrabber
.. _`bioconductor-tekrabber/tags`: https://quay.io/repository/biocontainers/bioconductor-tekrabber?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tekrabber";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tekrabber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tekrabber/README.html