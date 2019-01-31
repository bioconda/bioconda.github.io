.. _`bioconductor-gofuncr`:

bioconductor-gofuncr
====================

|downloads|

GOfuncR performs a gene ontology enrichment analysis based on the ontology enrichment software FUNC. GO\-annotations are obtained from OrganismDb or OrgDb packages \(\'Homo.sapiens\' by default\)\; the GO\-graph is included in the package and updated regularly \(11\-Oct\-2018\). GOfuncR provides the standard candidate vs. background enrichment analysis using the hypergeometric test\, as well as three additional tests\: \(i\) the Wilcoxon rank\-sum test that is used when genes are ranked\, \(ii\) a binomial test that is used when genes are associated with two counts and \(iii\) a Chi\-square or Fisher\'s exact test that is used in cases when genes are associated with four counts. To correct for multiple testing and interdependency of the tests\, family\-wise error rates are computed based on random permutations of the gene\-associated variables. GOfuncR also provides tools for exploring the ontology graph and the annotations\, and options to take gene\-length or spatial clustering of genes into account. It is also possible to provide custom gene coordinates\, annotations and ontologies.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GOfuncR.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-gofuncr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gofuncr

and update with::

   conda update bioconductor-gofuncr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gofuncr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gofuncr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gofuncr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gofuncr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gofuncr

