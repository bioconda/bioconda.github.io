:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimutacions'
.. highlight: bash

bioconductor-epimutacions
=========================

.. conda:recipe:: bioconductor-epimutacions
   :replaces_section_title:
   :noindex:

   Robust outlier identification for DNA methylation data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/epimutacions.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epimutacions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacions/meta.yaml>`_

   The package includes some statistical outlier detection methods for epimutations detection in DNA methylation data. The methods included in the package are MANOVA\, Multivariate linear models\, isolation forest\, robust mahalanobis distance\, quantile and beta. The methods compare a case sample with a suspected disease against a reference panel \(composed of healthy individuals\) to identify epimutations in the given case sample. It also contains functions to annotate and visualize the identified epimutations.


.. conda:package:: bioconductor-epimutacions

   |downloads_bioconductor-epimutacions| |docker_bioconductor-epimutacions|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bumphunter: ``>=1.42.0,<1.43.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-epimutacionsdata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-isotree: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-robustbase: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epimutacions

   and update with::

      conda update bioconductor-epimutacions

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epimutacions:<tag>

   (see `bioconductor-epimutacions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epimutacions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimutacions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimutacions
   :alt:   (downloads)
.. |docker_bioconductor-epimutacions| image:: https://quay.io/repository/biocontainers/bioconductor-epimutacions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimutacions
.. _`bioconductor-epimutacions/tags`: https://quay.io/repository/biocontainers/bioconductor-epimutacions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimutacions";
        var versions = ["1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimutacions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimutacions/README.html