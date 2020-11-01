:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocgraph'
.. highlight: bash

bioconductor-biocgraph
======================

.. conda:recipe:: bioconductor-biocgraph
   :replaces_section_title:
   :noindex:

   Graph examples and use cases in Bioinformatics

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/biocGraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgraph/meta.yaml>`_
   :links: biotools: :biotools:`biocgraph`, doi: :doi:`10.1038/nmeth.3252`

   This package provides examples and code that make use of the different graph related packages produced by Bioconductor.


.. conda:package:: bioconductor-biocgraph

   |downloads_bioconductor-biocgraph| |docker_bioconductor-biocgraph|

   :versions:
      
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-geneplotter: ``>=1.68.0,<1.69.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rgraphviz: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocgraph

   and update with::

      conda update bioconductor-biocgraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocgraph:<tag>

   (see `bioconductor-biocgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocgraph
   :alt:   (downloads)
.. |docker_bioconductor-biocgraph| image:: https://quay.io/repository/biocontainers/bioconductor-biocgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocgraph
.. _`bioconductor-biocgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-biocgraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocgraph/README.html