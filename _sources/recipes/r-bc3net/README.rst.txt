.. title:: Package Recipe 'r-bc3net'
.. highlight: bash


r-bc3net
========

.. conda:recipe:: r-bc3net
   :replaces_section_title:

   Implementation of the BC3NET algorithm for gene regulatory network inference \(de Matos Simoes and Frank Emmert\-Streib\, Bagging Statistical Network Inference from Large\-Scale Gene Expression Data\, PLoS ONE 7\(3\)\: e33624\, \<doi\:10.1371\/journal.pone.0033624\>\).

   :homepage: https://CRAN.R-project.org/package=bc3net
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-bc3net <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bc3net>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bc3net/meta.yaml>`_

   


.. conda:package:: r-bc3net

   |downloads_r-bc3net| |docker_r-bc3net|

   :versions: 1.0.4

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-c3net`  :conda:package:`r-igraph`  :conda:package:`r-infotheo`  :conda:package:`r-lattice`  :conda:package:`r-matrix`  

   :required~by: |required_by_r-bc3net|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bc3net

   and update with::

      conda update r-bc3net

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bc3net


.. |required_by_r-bc3net| conda:required_by:: r-bc3net
.. |downloads_r-bc3net| image:: https://img.shields.io/conda/dn/bioconda/r-bc3net.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bc3net| image:: https://quay.io/repository/biocontainers/r-bc3net/status
   :target: https://quay.io/repository/biocontainers/r-bc3net







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bc3net/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bc3net/README.html

