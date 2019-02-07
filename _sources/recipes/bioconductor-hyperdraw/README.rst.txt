.. title:: Package Recipe 'bioconductor-hyperdraw'
.. highlight: bash


bioconductor-hyperdraw
======================

.. conda:recipe:: bioconductor-hyperdraw
   :replaces_section_title:

   Functions for visualizing hypergraphs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hyperdraw.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hyperdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyperdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyperdraw/meta.yaml>`_
   :links: biotools: :biotools:`hyperdraw`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-hyperdraw

   |downloads_bioconductor-hyperdraw| |docker_bioconductor-hyperdraw|

   :versions: 1.34.0, 1.32.0, 1.30.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-hypergraph` >=1.54.0,<1.55.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-hyperdraw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hyperdraw

   and update with::

      conda update bioconductor-hyperdraw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hyperdraw


.. |required_by_bioconductor-hyperdraw| conda:required_by:: bioconductor-hyperdraw
.. |downloads_bioconductor-hyperdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hyperdraw.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hyperdraw| image:: https://quay.io/repository/biocontainers/bioconductor-hyperdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hyperdraw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hyperdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hyperdraw/README.html

