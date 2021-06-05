:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget'
.. highlight: bash

bioconductor-rcistarget
=======================

.. conda:recipe:: bioconductor-rcistarget
   :replaces_section_title:
   :noindex:

   RcisTarget\: Identify transcription factor binding motifs enriched on a gene list

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RcisTarget.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget/meta.yaml>`_

   RcisTarget identifies transcription factor binding motifs \(TFBS\) over\-represented on a gene list. In a first step\, RcisTarget selects DNA motifs that are significantly over\-represented in the surroundings of the transcription start site \(TSS\) of the genes in the gene\-set. This is achieved by using a database that contains genome\-wide cross\-species rankings for each motif. The motifs that are then annotated to TFs and those that have a high Normalized Enrichment Score \(NES\) are retained. Finally\, for each motif and gene\-set\, RcisTarget predicts the candidate target genes \(i.e. genes in the gene\-set that are ranked above the leading edge\).


.. conda:package:: bioconductor-rcistarget

   |downloads_bioconductor-rcistarget| |docker_bioconductor-rcistarget|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-aucell: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-gseabase: ``>=1.54.0,<1.55.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-arrow: ``>=2.0.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-feather: 
   :depends r-r.utils: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcistarget

   and update with::

      conda update bioconductor-rcistarget

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcistarget:<tag>

   (see `bioconductor-rcistarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcistarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget
.. _`bioconductor-rcistarget/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html