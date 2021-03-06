:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunotation'
.. highlight: bash

bioconductor-immunotation
=========================

.. conda:recipe:: bioconductor-immunotation
   :replaces_section_title:
   :noindex:

   Tools for working with diverse immune genes

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/immunotation.html
   :license: GPL-3
   :recipe: /`bioconductor-immunotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation/meta.yaml>`_

   MHC \(major histocompatibility complex\) molecules are cell surface complexes that present antigens to T cells.  The repertoire of antigens presented in a given genetic background largely depends on the sequence of the encoded MHC molecules\, and thus\, in humans\, on the highly variable HLA \(human leukocyte antigen\) genes of the hyperpolymorphic HLA locus. More than 28\,000 different HLA alleles have been reported\, with significant differences in allele frequencies between human populations worldwide. Reproducible and consistent annotation of HLA alleles in large\-scale bioinformatics workflows remains challenging\, because the available reference databases and software tools often use different HLA naming schemes. The package immunotation provides tools for consistent annotation of HLA genes in typical immunoinformatics workflows such as for example the prediction of MHC\-presented peptides in different human donors. Converter functions that provide mappings between different HLA naming schemes are based on the MHC restriction ontology \(MRO\). The package also provides automated access to HLA alleles frequencies in worldwide human reference populations stored in the Allele Frequency Net Database.


.. conda:package:: bioconductor-immunotation

   |downloads_bioconductor-immunotation| |docker_bioconductor-immunotation|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-ggplot2: 
   :depends r-maps: 
   :depends r-ontologyindex: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-immunotation

   and update with::

      conda update bioconductor-immunotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunotation:<tag>

   (see `bioconductor-immunotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunotation
   :alt:   (downloads)
.. |docker_bioconductor-immunotation| image:: https://quay.io/repository/biocontainers/bioconductor-immunotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunotation
.. _`bioconductor-immunotation/tags`: https://quay.io/repository/biocontainers/bioconductor-immunotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunotation/README.html