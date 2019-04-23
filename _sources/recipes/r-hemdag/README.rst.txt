:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hemdag'
.. highlight: bash

r-hemdag
========

.. conda:recipe:: r-hemdag
   :replaces_section_title:

   a collection of Hierarchical Ensemble Methods \(HEMs\) for Directed Acyclic Graphs \(DAGs\).

   :homepage: https://github.com/marconotaro/HEMDAG
   :documentation: https://hemdag-tutorials.readthedocs.io
   
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-hemdag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag/meta.yaml>`_

    \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/hemdag\-tutorials\/badge\/\?version\=latest\)\]\(https\:\/\/hemdag\-tutorials.readthedocs.io\/en\/latest\/\?badge\=latest\)

   HEMDAG library\:
   \* implements several Hierarchical Ensemble Methods \(HEMs\) for Directed Acyclic Graphs \(DAGs\)\;
   \* can be used to reconcile flat predictions by considering the topology of the ontology\;
   \* provides biologically consistent predictions according to the hierarchical nature of the ontology classes\;
   \* is specifically designed for exploiting the hierarchical relationships of DAG\-structured taxonomies\, such as the Human Phenotype Ontology \(HPO\) or the Gene Ontology \(GO\)\, but can be safely applied to tree\-structured taxonomies as well \(e.g. FunCat\)\, since trees are DAGs\;
   \* scales nicely both in terms of the complexity of the taxonomy and in the cardinality of the examples\;
   \* provides several utility functions to process and analyze graphs\;
   \* provides several performance metrics to evaluate HEMs algorithms.

    


.. conda:package:: r-hemdag

   |downloads_r-hemdag| |docker_r-hemdag|

   :versions: 2.4.7-1, 2.4.7-0, 2.2.5-1, 2.2.5-0, 2.1.3-0, 2.1.2-0, 2.0.1-0
   
   :depends bioconductor-graph: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-rbgl: 
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-plyr: 
   :depends r-precrec: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-hemdag

   and update with::

      conda update r-hemdag

   or use the docker container::

      docker pull quay.io/biocontainers/r-hemdag:<tag>

   (see `r-hemdag/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hemdag| image:: https://img.shields.io/conda/dn/bioconda/r-hemdag.svg?style=flat
   :alt:   (downloads)
.. |docker_r-hemdag| image:: https://quay.io/repository/biocontainers/r-hemdag/status
   :target: https://quay.io/repository/biocontainers/r-hemdag
.. _`r-hemdag/tags`: https://quay.io/repository/biocontainers/r-hemdag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hemdag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hemdag/README.html