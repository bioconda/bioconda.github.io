.. title:: Package Recipe 'r-hemdag'
.. highlight: bash


r-hemdag
========

.. conda:recipe:: r-hemdag
   :replaces_section_title:

   An implementation of Hierarchical Ensemble Methods for Directed Acyclic Graphs \(DAGs\). The \'HEMDAG\' package can be used to enhance the predictions of virtually any flat learning methods\, by taking into account the hierarchical nature of the classes of a bio\-ontology. \'HEMDAG\' is specifically designed for exploiting the hierarchical relationships of DAG\-structured taxonomies\, such as the Human Phenotype Ontology \(HPO\) or the Gene Ontology \(GO\)\, but it can be also safely applied to tree\-structured taxonomies \(as FunCat\)\, since trees are DAGs. \'HEMDAG\' scale nicely both in terms of the complexity of the taxonomy and in the cardinality of the examples. \(Marco Notaro\, Max Schubach\, Peter N. Robinson and Giorgio Valentini \(2017\) \<doi\:10.1186\/s12859\-017\-1854\-y\>\).

   :homepage: https://hemdag-tutorials.readthedocs.io, https://github.com/marconotaro/HEMDAG
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-hemdag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag/meta.yaml>`_

   


.. conda:package:: r-hemdag

   |downloads_r-hemdag| |docker_r-hemdag|

   :versions: 2.2.5, 2.1.3, 2.1.2, 2.0.1

   :depends: :conda:package:`bioconductor-graph`  :conda:package:`bioconductor-preprocesscore` >=1.42.0,<1.44.0 :conda:package:`bioconductor-rbgl`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-plyr`  :conda:package:`r-precrec`  

   :required~by: |required_by_r-hemdag|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-hemdag

   and update with::

      conda update r-hemdag

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-hemdag


.. |required_by_r-hemdag| conda:required_by:: r-hemdag
.. |downloads_r-hemdag| image:: https://img.shields.io/conda/dn/bioconda/r-hemdag.svg?style=flat
   :alt:   (downloads)
.. |docker_r-hemdag| image:: https://quay.io/repository/biocontainers/r-hemdag/status
   :target: https://quay.io/repository/biocontainers/r-hemdag







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hemdag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hemdag/README.html

