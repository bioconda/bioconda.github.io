:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-midashla'
.. highlight: bash

bioconductor-midashla
=====================

.. conda:recipe:: bioconductor-midashla
   :replaces_section_title:
   :noindex:

   R package for immunogenomics data handling and association analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/midasHLA.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-midashla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla/meta.yaml>`_

   MiDAS is a R package for immunogenetics data transformation and statistical analysis. MiDAS accepts input data in the form of HLA alleles and KIR types\, and can transform it into biologically meaningful variables\, enabling HLA amino acid fine mapping\, analyses of HLA evolutionary divergence\, KIR gene presence\, as well as validated HLA\-KIR interactions. Further\, it allows comprehensive statistical association analysis workflows with phenotypes of diverse measurement scales. MiDAS closes a gap between the inference of immunogenetic variation and its efficient utilization to make relevant discoveries related to T cell\, Natural Killer cell\, and disease biology.


.. conda:package:: bioconductor-midashla

   |downloads_bioconductor-midashla| |docker_bioconductor-midashla|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-broom: ``>=0.5.1``
   :depends r-dplyr: ``>=0.8.0.1``
   :depends r-formattable: ``>=0.2.0.1``
   :depends r-hardyweinberg: ``>=1.6.3``
   :depends r-kableextra: ``>=1.1.0``
   :depends r-knitr: ``>=1.21``
   :depends r-magrittr: ``>=1.5``
   :depends r-qdaptools: ``>=1.3.3``
   :depends r-rlang: ``>=0.3.1``
   :depends r-stringi: ``>=1.2.4``
   :depends r-tibble: ``>=2.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-midashla

   and update with::

      conda update bioconductor-midashla

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-midashla:<tag>

   (see `bioconductor-midashla/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-midashla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-midashla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-midashla
   :alt:   (downloads)
.. |docker_bioconductor-midashla| image:: https://quay.io/repository/biocontainers/bioconductor-midashla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-midashla
.. _`bioconductor-midashla/tags`: https://quay.io/repository/biocontainers/bioconductor-midashla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-midashla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-midashla/README.html