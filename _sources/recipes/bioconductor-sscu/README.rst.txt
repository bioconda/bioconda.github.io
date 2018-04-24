.. _`bioconductor-sscu`:

bioconductor-sscu
=================

|downloads|

The package calculates the indexes for selective stength in codon usage in bacteria species. \(1\) The package can calculate the strength of selected codon usage bias \(sscu\, also named as s\_index\) based on Paul Sharp\'s method. The method take into account of background mutation rate\, and focus only on four pairs of codons with universal translational advantages in all bacterial species. Thus the sscu index is comparable among different species. \(2\) The package can detect the strength of translational accuracy selection by Akashi\'s test. The test tabulating all codons into four categories with the feature as conserved\/variable amino acids and optimal\/non\-optimal codons. \(3\) Optimal codon lists \(selected codons\) can be calculated by either op\_highly function \(by using the highly expressed genes compared with all genes to identify optimal codons\)\, or op\_corre\_CodonW\/op\_corre\_NCprime function \(by correlative method developed by Hershberg \& Petrov\). Users will have a list of optimal codons for further analysis\, such as input to the Akashi\'s test. \(4\) The detailed codon usage information\, such as RSCU value\, number of optimal codons in the highly\/all gene set\, as well as the genomic gc3 value\, can be calculate by the optimal\_codon\_statistics and genomic\_gc3 function. \(5\) Furthermore\, we added one test function low\_frequency\_op in the package. The function try to find the low frequency optimal codons\, among all the optimal codons identified by the op\_highly function.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/sscu.html
Versions      2.6.0, 2.8.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sscu



Links         biotools: :biotools:`sscu`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sscu

and update with::

   conda update bioconductor-sscu



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sscu.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sscu/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sscu/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sscu/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sscu
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sscu/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sscu

