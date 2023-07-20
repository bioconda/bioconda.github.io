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
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-apeglm: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-scbn: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rcpp: ``>=1.0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tekrabber

   and update with::

      conda update bioconductor-tekrabber

   or use the docker container::

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
        var versions = ["1.4.0","1.2.0","1.2.0"];
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