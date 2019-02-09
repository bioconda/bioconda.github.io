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

   :versions: 2.4.0, 2.2.0

   :depends: :conda:package:`r-ape` >=5.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-fastmatch`  :conda:package:`r-igraph` >=1.0 :conda:package:`r-magrittr`  :conda:package:`r-matrix`  :conda:package:`r-quadprog`  :conda:package:`r-rcpp` >=0.12.0 

   :required~by: |required_by_r-phangorn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phangorn

   and update with::

      conda update r-phangorn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-phangorn


.. |required_by_r-phangorn| conda:required_by:: r-phangorn
.. |downloads_r-phangorn| image:: https://img.shields.io/conda/dn/bioconda/r-phangorn.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phangorn| image:: https://quay.io/repository/biocontainers/r-phangorn/status
   :target: https://quay.io/repository/biocontainers/r-phangorn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phangorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phangorn/README.html

