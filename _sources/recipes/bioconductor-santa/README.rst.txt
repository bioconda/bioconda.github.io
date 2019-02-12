.. title:: Package Recipe 'bioconductor-santa'
.. highlight: bash


bioconductor-santa
==================

.. conda:recipe:: bioconductor-santa
   :replaces_section_title:

   This package provides methods for measuring the strength of association between a network and a phenotype. It does this by measuring clustering of the phenotype across the network \(Knet\). Vertices can also be individually ranked by their strength of association with high\-weight vertices \(Knode\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SANTA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-santa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa/meta.yaml>`_
   :links: biotools: :biotools:`santa`

   


.. conda:package:: bioconductor-santa

   |downloads_bioconductor-santa| |docker_bioconductor-santa|

   :versions: 2.20.0, 2.18.0, 2.16.0, 2.14.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-snow`  

   :required~by: |required_by_bioconductor-santa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-santa

   and update with::

      conda update bioconductor-santa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-santa


.. |required_by_bioconductor-santa| conda:required_by:: bioconductor-santa
.. |downloads_bioconductor-santa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-santa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-santa| image:: https://quay.io/repository/biocontainers/bioconductor-santa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-santa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-santa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-santa/README.html

