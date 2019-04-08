:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phangorn'
.. highlight: bash

r-phangorn
==========

.. conda:recipe:: r-phangorn
   :replaces_section_title:

   Package contains methods for estimation of phylogenetic trees and networks using Maximum Likelihood\, Maximum Parsimony\, distance methods and Hadamard conjugation. Allows to compare trees\, models selection and offers visualizations for trees and split networks. 

   :homepage: https://github.com/KlausVigo/phangorn
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-phangorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phangorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phangorn/meta.yaml>`_

   


.. conda:package:: r-phangorn

   |downloads_r-phangorn| |docker_r-phangorn|

   :versions: 2.4.0-0, 2.2.0-0
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :depends r-ape: >=5.0
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-fastmatch: 
   :depends r-igraph: >=1.0
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-quadprog: 
   :depends r-rcpp: >=0.12.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phangorn

   and update with::

      conda update r-phangorn

   or use the docker container::

      docker pull quay.io/biocontainers/r-phangorn:<tag>

   (see `r-phangorn/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phangorn| image:: https://img.shields.io/conda/dn/bioconda/r-phangorn.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phangorn| image:: https://quay.io/repository/biocontainers/r-phangorn/status
   :target: https://quay.io/repository/biocontainers/r-phangorn
.. _`r-phangorn/tags`: https://quay.io/repository/biocontainers/r-phangorn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phangorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phangorn/README.html