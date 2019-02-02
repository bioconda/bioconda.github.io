.. _`bioconductor-paa`:

bioconductor-paa
================

|downloads|

PAA imports single color \(protein\) microarray data that has been saved in gpr file format \- esp. ProtoArray data. After preprocessing \(background correction\, batch filtering\, normalization\) univariate feature preselection is performed \(e.g.\, using the \"minimum M statistic\" approach \- hereinafter referred to as \"mMs\"\). Subsequently\, a multivariate feature selection is conducted to discover biomarker candidates. Therefore\, either a frequency\-based backwards elimination aproach or ensemble feature selection can be used. PAA provides a complete toolbox of analysis tools including several different plots for results examination and evaluation.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/PAA.html
Versions      1.16.0
License       BSD_3_clause + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-paa/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-paa

and update with::

   conda update bioconductor-paa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-paa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-paa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-paa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-paa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-paa
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-paa/status
                :target: https://quay.io/repository/biocontainers/bioconductor-paa

