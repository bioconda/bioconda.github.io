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
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biomart: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-bumphunter: ``>=1.52.0,<1.53.0``
   :depends bioconductor-bumphunter: ``>=1.52.0,<1.53.0a0``
   :depends bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends bioconductor-ensembldb: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-epimutacionsdata: ``>=1.14.0,<1.15.0``
   :depends bioconductor-epimutacionsdata: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends bioconductor-experimenthub: ``>=3.0.0,<3.1.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.54.0,<1.55.0a0``
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
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-minfi: ``>=1.56.0,<1.57.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.2,<3.3.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.1,<3.23.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libstdcxx: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
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
        var versions = ["1.14.0","1.10.0","1.6.1","1.4.0","1.2.0"];
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