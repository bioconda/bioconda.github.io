:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eden'
.. highlight: bash

eden
====

.. conda:recipe:: eden
   :replaces_section_title:

   The Explicit Decomposition with Neighborhoods \(EDeN\) is a decompositional kernel based on the Neighborhood Subgraph Pairwise Distance Kernel \(NSPDK\) that can be used to induce an explicit feature representation for graphs. This in turn allows the adoption of machine learning algorithm to perform supervised and unsupervised learning task in a scalable way \(e.g. using fast stochastic gradient descent methods in classification and approximate neighborhood queries in clustering\).

   :homepage: https://github.com/fabriziocosta/EDeN
   :license: MIT
   :recipe: /`eden <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eden>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eden/meta.yaml>`_

   


.. conda:package:: eden

   |downloads_eden| |docker_eden|

   :versions: 2.0-3, 2.0-2, 2.0-1, 2.0-0, 1.1-1, 1.1-0
   
   :depends biopython: 
   :depends cvxopt: 
   :depends dill: 
   :depends esmre: 
   :depends joblib: 
   :depends matplotlib: 
   :depends muscle: 
   :depends networkx: <=1.10
   :depends numpy: 
   :depends openbabel: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: <3
   :depends python-graphviz: 
   :depends rdkit: 
   :depends reportlab: 
   :depends requests: 
   :depends rnashapes: 
   :depends scikit-learn: >=0.17.0,<0.20.0
   :depends scipy: >=0.14.0
   :depends weblogo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eden

   and update with::

      conda update eden

   or use the docker container::

      docker pull quay.io/biocontainers/eden:<tag>

   (see `eden/tags`_ for valid values for ``<tag>``)


.. |downloads_eden| image:: https://img.shields.io/conda/dn/bioconda/eden.svg?style=flat
   :target: https://anaconda.org/bioconda/eden
   :alt:   (downloads)
.. |docker_eden| image:: https://quay.io/repository/biocontainers/eden/status
   :target: https://quay.io/repository/biocontainers/eden
.. _`eden/tags`: https://quay.io/repository/biocontainers/eden?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eden/README.html