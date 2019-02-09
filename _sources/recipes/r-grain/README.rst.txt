.. title:: Package Recipe 'r-grain'
.. highlight: bash


r-grain
=======

.. conda:recipe:: r-grain
   :replaces_section_title:

   Probability propagation in graphical independence networks\, also known as Bayesian networks or probabilistic expert systems.

   :homepage: http://people.math.aau.dk/~sorenh/software/gR/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-grain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grain/meta.yaml>`_

   


.. conda:package:: r-grain

   |downloads_r-grain| |docker_r-grain|

   :versions: 1.3_0

   :depends: :conda:package:`bioconductor-graph`  :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-functional`  :conda:package:`r-grbase` >=1.7_2 :conda:package:`r-igraph`  :conda:package:`r-magrittr`  :conda:package:`r-rcpp` >=0.11.1 :conda:package:`r-rcpparmadillo`  :conda:package:`r-rcppeigen`  

   :required~by: |required_by_r-grain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-grain

   and update with::

      conda update r-grain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-grain


.. |required_by_r-grain| conda:required_by:: r-grain
.. |downloads_r-grain| image:: https://img.shields.io/conda/dn/bioconda/r-grain.svg?style=flat
   :alt:   (downloads)
.. |docker_r-grain| image:: https://quay.io/repository/biocontainers/r-grain/status
   :target: https://quay.io/repository/biocontainers/r-grain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grain/README.html

