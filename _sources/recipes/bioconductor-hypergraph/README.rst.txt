:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hypergraph'
.. highlight: bash

bioconductor-hypergraph
=======================

.. conda:recipe:: bioconductor-hypergraph
   :replaces_section_title:

   A package that implements some simple capabilities for representing and manipulating hypergraphs.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/hypergraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hypergraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph/meta.yaml>`_
   :links: biotools: :biotools:`hypergraph`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-hypergraph

   |downloads_bioconductor-hypergraph| |docker_bioconductor-hypergraph|

   :versions: 1.54.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hypergraph

   and update with::

      conda update bioconductor-hypergraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hypergraph:<tag>

   (see `bioconductor-hypergraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hypergraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hypergraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hypergraph
   :alt:   (downloads)
.. |docker_bioconductor-hypergraph| image:: https://quay.io/repository/biocontainers/bioconductor-hypergraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hypergraph
.. _`bioconductor-hypergraph/tags`: https://quay.io/repository/biocontainers/bioconductor-hypergraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hypergraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hypergraph/README.html