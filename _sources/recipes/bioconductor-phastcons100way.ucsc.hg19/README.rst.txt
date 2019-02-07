.. title:: Package Recipe 'bioconductor-phastcons100way.ucsc.hg19'
.. highlight: bash


bioconductor-phastcons100way.ucsc.hg19
======================================

.. conda:recipe:: bioconductor-phastcons100way.ucsc.hg19
   :replaces_section_title:

   Store UCSC phastCons conservation scores for the human genome \(hg19\) calculated from multiple alignments with other 99 vertebrate species.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/phastCons100way.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons100way.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg19/meta.yaml>`_

   


.. conda:package:: bioconductor-phastcons100way.ucsc.hg19

   |downloads_bioconductor-phastcons100way.ucsc.hg19| |docker_bioconductor-phastcons100way.ucsc.hg19|

   :versions: 3.7.2, 3.6.0

   :depends: :conda:package:`bioconductor-bsgenome` >=1.48.0,<1.50.0 :conda:package:`bioconductor-genomeinfodb` >=1.16.0,<1.18.0 :conda:package:`bioconductor-genomicranges` >=1.32.7,<1.34.0 :conda:package:`bioconductor-genomicscores` >=1.4.1,<1.6.0 :conda:package:`bioconductor-iranges` >=2.14.12,<2.16.0 :conda:package:`bioconductor-s4vectors` >=0.18.3,<0.20.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-phastcons100way.ucsc.hg19|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phastcons100way.ucsc.hg19

   and update with::

      conda update bioconductor-phastcons100way.ucsc.hg19

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19


.. |required_by_bioconductor-phastcons100way.ucsc.hg19| conda:required_by:: bioconductor-phastcons100way.ucsc.hg19
.. |downloads_bioconductor-phastcons100way.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phastcons100way.ucsc.hg19.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phastcons100way.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg19/README.html

