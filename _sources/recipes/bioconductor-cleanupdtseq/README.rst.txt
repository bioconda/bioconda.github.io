:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cleanupdtseq'
.. highlight: bash

bioconductor-cleanupdtseq
=========================

.. conda:recipe:: bioconductor-cleanupdtseq
   :replaces_section_title:

   This package uses the Naive Bayes classifier \(from e1071\) to assign probability values to putative polyadenylation sites \(pA sites\) based on training data from zebrafish. This will allow the user to separate true\, biologically relevant pA sites from false\, oligodT primed pA sites.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cleanUpdTSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-cleanupdtseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleanupdtseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleanupdtseq/meta.yaml>`_
   :links: biotools: :biotools:`cleanupdtseq`

   


.. conda:package:: bioconductor-cleanupdtseq

   |downloads_bioconductor-cleanupdtseq| |docker_bioconductor-cleanupdtseq|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-bsgenome.drerio.ucsc.danrer7: >=1.4.0,<1.5.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-e1071: 
   
   :depends r-seqinr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cleanupdtseq

   and update with::

      conda update bioconductor-cleanupdtseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cleanupdtseq:<tag>

   (see `bioconductor-cleanupdtseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cleanupdtseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cleanupdtseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cleanupdtseq| image:: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq
.. _`bioconductor-cleanupdtseq/tags`: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cleanupdtseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cleanupdtseq/README.html