:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phastcons100way.ucsc.hg38'
.. highlight: bash

bioconductor-phastcons100way.ucsc.hg38
======================================

.. conda:recipe:: bioconductor-phastcons100way.ucsc.hg38
   :replaces_section_title:
   :noindex:

   UCSC phastCons conservation scores for hg38

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/phastCons100way.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons100way.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg38/meta.yaml>`_

   Store UCSC phastCons conservation scores for the human genome \(hg38\) calculated from multiple alignments with other 99 vertebrate species.


.. conda:package:: bioconductor-phastcons100way.ucsc.hg38

   |downloads_bioconductor-phastcons100way.ucsc.hg38| |docker_bioconductor-phastcons100way.ucsc.hg38|

   :versions:
      
      

      ``3.7.1-5``,  ``3.7.1-4``,  ``3.7.1-3``,  ``3.7.1-2``,  ``3.7.1-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicscores: ``>=2.2.0,<2.3.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phastcons100way.ucsc.hg38

   and update with::

      conda update bioconductor-phastcons100way.ucsc.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phastcons100way.ucsc.hg38:<tag>

   (see `bioconductor-phastcons100way.ucsc.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phastcons100way.ucsc.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phastcons100way.ucsc.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phastcons100way.ucsc.hg38
   :alt:   (downloads)
.. |docker_bioconductor-phastcons100way.ucsc.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg38
.. _`bioconductor-phastcons100way.ucsc.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg38/README.html