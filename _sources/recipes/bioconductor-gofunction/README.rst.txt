:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gofunction'
.. highlight: bash

bioconductor-gofunction
=======================

.. conda:recipe:: bioconductor-gofunction
   :replaces_section_title:

   The GO\-function package provides a tool to address the redundancy that result from the GO structure or multiple annotation genes and derive biologically relevant functions from the statistically significant functions based on some intuitive assumption and statistical testing.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GOFunction.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gofunction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofunction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofunction/meta.yaml>`_
   :links: biotools: :biotools:`gofunction`, doi: :doi:`10.1093/bib/bbr041`

   


.. conda:package:: bioconductor-gofunction

   |downloads_bioconductor-gofunction| |docker_bioconductor-gofunction|

   :versions: 1.32.0-1, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-go.db: >=3.8.0,<3.9.0
   :depends bioconductor-graph: >=1.62.0,<1.63.0
   :depends bioconductor-rgraphviz: >=2.28.0,<2.29.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-sparsem: >=0.85
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gofunction

   and update with::

      conda update bioconductor-gofunction

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gofunction:<tag>

   (see `bioconductor-gofunction/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gofunction| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gofunction.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gofunction
   :alt:   (downloads)
.. |docker_bioconductor-gofunction| image:: https://quay.io/repository/biocontainers/bioconductor-gofunction/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gofunction
.. _`bioconductor-gofunction/tags`: https://quay.io/repository/biocontainers/bioconductor-gofunction?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gofunction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gofunction/README.html