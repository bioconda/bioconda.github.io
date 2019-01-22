.. _`bioconductor-mdp`:

bioconductor-mdp
================

|downloads|

The Molecular Degree of Perturbation webtool quantifies the heterogeneity of samples. It takes a data.frame of omic data that contains at least two classes \(control and test\) and assigns a score to all samples based on how perturbed they are compared to the controls. It is based on the Molecular Distance to Health \(Pankla et al. 2009\)\, and expands on this algorithm by adding the options to calculate the z\-score using the modified z\-score \(using median absolute deviation\)\, change the z\-score zeroing threshold\, and look at genes that are most perturbed in the test versus control classes.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/mdp.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mdp

and update with::

   conda update bioconductor-mdp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mdp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mdp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mdp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mdp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mdp
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mdp/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mdp

