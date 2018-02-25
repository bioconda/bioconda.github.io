.. _`bioconductor-pbcmc`:

bioconductor-pbcmc
==================

|downloads|

The pbcmc package characterizes uncertainty assessment on gene expression classifiers\, a\. k\. a\. molecular signatures\, based on a permutation test\. In order to achieve this goal\, synthetic simulated subjects are obtained by permutations of gene labels\. Then\, each synthetic subject is tested against the corresponding subtype classifier to build the null distribution\. Thus\, classification confidence measurement can be provided for each subject\, to assist physician therapy choice\. At present\, it is only available for PAM50 implementation in genefu package but it can easily be extend to other molecular signatures\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/pbcmc.html
Versions      1.6.0
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pbcmc



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pbcmc

and update with::

   conda update bioconductor-pbcmc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pbcmc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pbcmc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pbcmc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pbcmc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pbcmc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pbcmc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pbcmc

