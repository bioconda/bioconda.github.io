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

   :versions: 2.0, 1.1

   :depends: :conda:package:`biopython`  :conda:package:`cvxopt`  :conda:package:`dill`  :conda:package:`esmre`  :conda:package:`joblib`  :conda:package:`matplotlib`  :conda:package:`muscle`  :conda:package:`networkx` <=1.10 :conda:package:`numpy`  :conda:package:`openbabel`  :conda:package:`pandas`  :conda:package:`py-graphviz`  :conda:package:`pybedtools`  :conda:package:`python` 2.7* :conda:package:`rdkit`  :conda:package:`reportlab`  :conda:package:`requests`  :conda:package:`rnashapes`  :conda:package:`scikit-learn` >=0.17.0 :conda:package:`scipy` >=0.14.0 :conda:package:`weblogo`  

   :required~by: |required_by_eden|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eden

   and update with::

      conda update eden

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eden


.. |required_by_eden| conda:required_by:: eden
.. |downloads_eden| image:: https://img.shields.io/conda/dn/bioconda/eden.svg?style=flat
   :alt:   (downloads)
.. |docker_eden| image:: https://quay.io/repository/biocontainers/eden/status
   :target: https://quay.io/repository/biocontainers/eden







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eden/README.html

