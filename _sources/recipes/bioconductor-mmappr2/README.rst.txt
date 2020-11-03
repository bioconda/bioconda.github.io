:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2'
.. highlight: bash

bioconductor-mmappr2
====================

.. conda:recipe:: bioconductor-mmappr2
   :replaces_section_title:
   :noindex:

   Mutation Mapping Analysis Pipeline for Pooled RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MMAPPR2.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2/meta.yaml>`_

   MMAPPR2 maps mutations resulting from pooled RNA\-seq data from the F2 cross of forward genetic screens. Its predecessor is described in a paper published in Genome Research \(Hill et al. 2013\). MMAPPR2 accepts aligned BAM files as well as a reference genome as input\, identifies loci of high sequence disparity between the control and mutant RNA sequences\, predicts variant effects using Ensembl\'s Variant Effect Predictor\, and outputs a ranked list of candidate mutations.


.. conda:package:: bioconductor-mmappr2

   |downloads_bioconductor-mmappr2| |docker_bioconductor-mmappr2|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-ensemblvep: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gmapr: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends bioconductor-varianttools: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmappr2

   and update with::

      conda update bioconductor-mmappr2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmappr2:<tag>

   (see `bioconductor-mmappr2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmappr2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2
.. _`bioconductor-mmappr2/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html