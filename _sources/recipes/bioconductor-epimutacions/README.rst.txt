:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimutacions'
.. highlight: bash

bioconductor-epimutacions
=========================

.. conda:recipe:: bioconductor-epimutacions
   :replaces_section_title:
   :noindex:

   Robust outlier identification for DNA methylation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epimutacions.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epimutacions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacions/meta.yaml>`_

   The package includes some statistical outlier detection methods for epimutations detection in DNA methylation data. The methods included in the package are MANOVA\, Multivariate linear models\, isolation forest\, robust mahalanobis distance\, quantile and beta. The methods compare a case sample with a suspected disease against a reference panel \(composed of healthy individuals\) to identify epimutations in the given case sample. It also contains functions to annotate and visualize the identified epimutations.


.. conda:package:: bioconductor-epimutacions

   |downloads_bioconductor-epimutacions| |docker_bioconductor-epimutacions|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-bumphunter: ``>=1.48.0,<1.49.0``
   :depends bioconductor-bumphunter: ``>=1.48.0,<1.49.0a0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-epimutacionsdata: ``>=1.10.0,<1.11.0``
   :depends bioconductor-epimutacionsdata: ``>=1.10.0,<1.11.0a0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0a0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.1,<1.4.0a0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.1,<0.7.0a0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0a0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0a0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.2,<3.3.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.2,<3.3.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.20.0,<3.21.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.20.0,<3.21.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-epimutacions

   and update with::

      mamba update bioconductor-epimutacions

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epimutacions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.10.0","1.6.1","1.4.0","1.2.0","1.2.0"];
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