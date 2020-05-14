:orphan:  .. only available via index, not via toctree

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

   :versions: 1.3_0-3, 1.3_0-2, 1.3_0-1, 1.3_0-0
   
   :depends bioconductor-graph: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-functional: 
   :depends r-grbase: >=1.7_2
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-rcpp: >=0.11.1
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-grain

   and update with::

      conda update r-grain

   or use the docker container::

      docker pull quay.io/biocontainers/r-grain:<tag>

   (see `r-grain/tags`_ for valid values for ``<tag>``)


.. |downloads_r-grain| image:: https://img.shields.io/conda/dn/bioconda/r-grain.svg?style=flat
   :target: https://anaconda.org/bioconda/r-grain
   :alt:   (downloads)
.. |docker_r-grain| image:: https://quay.io/repository/biocontainers/r-grain/status
   :target: https://quay.io/repository/biocontainers/r-grain
.. _`r-grain/tags`: https://quay.io/repository/biocontainers/r-grain?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grain/README.html