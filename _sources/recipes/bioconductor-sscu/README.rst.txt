:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sscu'
.. highlight: bash

bioconductor-sscu
=================

.. conda:recipe:: bioconductor-sscu
   :replaces_section_title:
   :noindex:

   Strength of Selected Codon Usage

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sscu.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sscu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sscu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sscu/meta.yaml>`_
   :links: biotools: :biotools:`sscu`, doi: :doi:`10.1038/nmeth.3252`

   The package calculates the indexes for selective stength in codon usage in bacteria species. \(1\) The package can calculate the strength of selected codon usage bias \(sscu\, also named as s\_index\) based on Paul Sharp\'s method. The method take into account of background mutation rate\, and focus only on four pairs of codons with universal translational advantages in all bacterial species. Thus the sscu index is comparable among different species. \(2\) The package can detect the strength of translational accuracy selection by Akashi\'s test. The test tabulating all codons into four categories with the feature as conserved\/variable amino acids and optimal\/non\-optimal codons. \(3\) Optimal codon lists \(selected codons\) can be calculated by either op\_highly function \(by using the highly expressed genes compared with all genes to identify optimal codons\)\, or op\_corre\_CodonW\/op\_corre\_NCprime function \(by correlative method developed by Hershberg \& Petrov\). Users will have a list of optimal codons for further analysis\, such as input to the Akashi\'s test. \(4\) The detailed codon usage information\, such as RSCU value\, number of optimal codons in the highly\/all gene set\, as well as the genomic gc3 value\, can be calculate by the optimal\_codon\_statistics and genomic\_gc3 function. \(5\) Furthermore\, we added one test function low\_frequency\_op in the package. The function try to find the low frequency optimal codons\, among all the optimal codons identified by the op\_highly function.


.. conda:package:: bioconductor-sscu

   |downloads_bioconductor-sscu| |docker_bioconductor-sscu|

   :versions:
      
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-seqinr: ``>=3.1-3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sscu

   and update with::

      conda update bioconductor-sscu

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sscu:<tag>

   (see `bioconductor-sscu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sscu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sscu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sscu
   :alt:   (downloads)
.. |docker_bioconductor-sscu| image:: https://quay.io/repository/biocontainers/bioconductor-sscu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sscu
.. _`bioconductor-sscu/tags`: https://quay.io/repository/biocontainers/bioconductor-sscu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sscu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sscu/README.html