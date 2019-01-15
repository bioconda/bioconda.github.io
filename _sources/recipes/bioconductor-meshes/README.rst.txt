.. _`bioconductor-meshes`:

bioconductor-meshes
===================

|downloads|

MeSH \(Medical Subject Headings\) is the NLM controlled vocabulary used to manually index articles for MEDLINE\/PubMed. MeSH terms were associated by Entrez Gene ID by three methods\, gendoo\, gene2pubmed and RBBH. This association is fundamental for enrichment and semantic analyses. meshes supports enrichment analysis \(over\-representation and gene set enrichment analysis\) of gene list or whole expression profile. The semantic comparisons of MeSH terms provide quantitative ways to compute similarities between genes and gene groups. meshes implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively and supports more than 70 species.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/meshes.html
Versions      1.6.1, 1.4.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes



Links         biotools: :biotools:`meshes`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-meshes

and update with::

   conda update bioconductor-meshes



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-meshes.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-meshes/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-meshes/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-meshes/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-meshes
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-meshes/status
                :target: https://quay.io/repository/biocontainers/bioconductor-meshes

