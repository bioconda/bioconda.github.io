:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sarks'
.. highlight: bash

bioconductor-sarks
==================

.. conda:recipe:: bioconductor-sarks
   :replaces_section_title:
   :noindex:

   Suffix Array Kernel Smoothing for discovery of correlative sequence motifs and multi\-motif domains

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/sarks.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-sarks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarks/meta.yaml>`_

   Suffix Array Kernel Smoothing \(see https\:\/\/academic.oup.com\/bioinformatics\/article\-abstract\/35\/20\/3944\/5418797\)\, or SArKS\, identifies sequence motifs whose presence correlates with numeric scores \(such as differential expression statistics\) assigned to the sequences \(such as gene promoters\). SArKS smooths over sequence similarity\, quantified by location within a suffix array based on the full set of input sequences. A second round of smoothing over spatial proximity within sequences reveals multi\-motif domains. Discovered motifs can then be merged or extended based on adjacency within MMDs. False positive rates are estimated and controlled by permutation testing.


.. conda:package:: bioconductor-sarks

   |downloads_bioconductor-sarks| |docker_bioconductor-sarks|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends openjdk: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-binom: 
   :depends r-cluster: 
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sarks

   and update with::

      conda update bioconductor-sarks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sarks:<tag>

   (see `bioconductor-sarks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sarks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sarks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sarks
   :alt:   (downloads)
.. |docker_bioconductor-sarks| image:: https://quay.io/repository/biocontainers/bioconductor-sarks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sarks
.. _`bioconductor-sarks/tags`: https://quay.io/repository/biocontainers/bioconductor-sarks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sarks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sarks/README.html