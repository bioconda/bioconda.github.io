.. _`bioconductor-osat`:

bioconductor-osat
=================

|downloads|

A sizable genomics study such as microarray often involves the use of multiple batches \(groups\) of experiment due to practical complication. To minimize batch effects\, a careful experiment design should ensure the even distribution of biological groups and confounding factors across batches. OSAT \(Optimal Sample Assignment Tool\) is developed to facilitate the allocation of collected samples to different batches. With minimum steps\, it produces setup that optimizes the even distribution of samples in groups of biological interest into different batches\, reducing the confounding or correlation between batches and the biological variables of interest. It can also optimize the even distribution of confounding factors across batches. Our tool can handle challenging instances where incomplete and unbalanced sample collections are involved as well as ideal balanced RCBD. OSAT provides a number of predefined layout for some of the most commonly used genomics platform. Related paper can be find at http\:\/\/www.biomedcentral.com\/1471\-2164\/13\/689 .

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/OSAT.html
Versions      1.24.0, 1.26.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-osat

and update with::

   conda update bioconductor-osat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-osat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-osat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-osat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-osat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-osat
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-osat/status
                :target: https://quay.io/repository/biocontainers/bioconductor-osat

