:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tvtb'
.. highlight: bash

bioconductor-tvtb
=================

.. conda:recipe:: bioconductor-tvtb
   :replaces_section_title:
   :noindex:

   TVTB\: The VCF Tool Box

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TVTB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tvtb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tvtb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tvtb/meta.yaml>`_
   :links: biotools: :biotools:`tvtb`, doi: :doi:`10.1038/nmeth.3252`

   The package provides S4 classes and methods to filter\, summarise and visualise genetic variation data stored in VCF files. In particular\, the package extends the FilterRules class \(S4Vectors package\) to define news classes of filter rules applicable to the various slots of VCF objects. Functionalities are integrated and demonstrated in a Shiny web\-application\, the Shiny Variant Explorer \(tSVE\).


.. conda:package:: bioconductor-tvtb

   |downloads_bioconductor-tvtb| |docker_bioconductor-tvtb|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-ensembldb: ``>=2.12.0,<2.13.0``
   :depends bioconductor-ensemblvep: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-gviz: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-variantannotation: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tvtb

   and update with::

      conda update bioconductor-tvtb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tvtb:<tag>

   (see `bioconductor-tvtb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tvtb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tvtb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tvtb
   :alt:   (downloads)
.. |docker_bioconductor-tvtb| image:: https://quay.io/repository/biocontainers/bioconductor-tvtb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tvtb
.. _`bioconductor-tvtb/tags`: https://quay.io/repository/biocontainers/bioconductor-tvtb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tvtb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tvtb/README.html