:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phastcons100way.ucsc.hg38'
.. highlight: bash

bioconductor-phastcons100way.ucsc.hg38
======================================

.. conda:recipe:: bioconductor-phastcons100way.ucsc.hg38
   :replaces_section_title:

   Store UCSC phastCons conservation scores for the human genome \(hg38\) calculated from multiple alignments with other 99 vertebrate species.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/phastCons100way.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons100way.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg38/meta.yaml>`_

   


.. conda:package:: bioconductor-phastcons100way.ucsc.hg38

   |downloads_bioconductor-phastcons100way.ucsc.hg38| |docker_bioconductor-phastcons100way.ucsc.hg38|

   :versions: 3.7.1-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-genomicscores: >=1.6.0,<1.7.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
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