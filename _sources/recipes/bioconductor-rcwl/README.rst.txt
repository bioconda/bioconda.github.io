:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcwl'
.. highlight: bash

bioconductor-rcwl
=================

.. conda:recipe:: bioconductor-rcwl
   :replaces_section_title:

   Wrap Command Tools and Pipelines Using CWL

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Rcwl.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-rcwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl/meta.yaml>`_

   The package can be a simple and user\-friendly way to manage command line tools and build data analysis pipelines in R using Common Workflow Language \(CWL\).


.. conda:package:: bioconductor-rcwl

   |downloads_bioconductor-rcwl| |docker_bioconductor-rcwl|

   :versions: 1.4.2-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends cwltool: >=1.0.2018
   :depends python: >=2.7
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-batchtools: 
   :depends r-codetools: 
   :depends r-diagrammer: 
   :depends r-r.utils: 
   :depends r-shiny: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcwl

   and update with::

      conda update bioconductor-rcwl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcwl:<tag>

   (see `bioconductor-rcwl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcwl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcwl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcwl
   :alt:   (downloads)
.. |docker_bioconductor-rcwl| image:: https://quay.io/repository/biocontainers/bioconductor-rcwl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcwl
.. _`bioconductor-rcwl/tags`: https://quay.io/repository/biocontainers/bioconductor-rcwl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcwl/README.html