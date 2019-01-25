.. _`r-hemdag`:

r-hemdag
========

|downloads|

An implementation of Hierarchical Ensemble Methods for Directed Acyclic Graphs \(DAGs\). The \'HEMDAG\' package can be used to enhance the predictions of virtually any flat learning methods\, by taking into account the hierarchical nature of the classes of a bio\-ontology. \'HEMDAG\' is specifically designed for exploiting the hierarchical relationships of DAG\-structured taxonomies\, such as the Human Phenotype Ontology \(HPO\) or the Gene Ontology \(GO\)\, but it can be also safely applied to tree\-structured taxonomies \(as FunCat\)\, since trees are DAGs. \'HEMDAG\' scale nicely both in terms of the complexity of the taxonomy and in the cardinality of the examples. \(Marco Notaro\, Max Schubach\, Peter N. Robinson and Giorgio Valentini \(2017\) \<doi\:10.1186\/s12859\-017\-1854\-y\>\).

============= ===========
Home          https://hemdag-tutorials.readthedocs.io, https://github.com/marconotaro/HEMDAG
Versions      2.2.5, 2.1.3, 2.1.2, 2.0.1
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/r-hemdag/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-hemdag

and update with::

   conda update r-hemdag



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-hemdag.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-hemdag/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-hemdag/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-hemdag/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-hemdag
.. |docker| image:: https://quay.io/repository/biocontainers/r-hemdag/status
                :target: https://quay.io/repository/biocontainers/r-hemdag

