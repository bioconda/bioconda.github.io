:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rchyoptimyx'
.. highlight: bash

bioconductor-rchyoptimyx
========================

.. conda:recipe:: bioconductor-rchyoptimyx
   :replaces_section_title:

   Optimyzed Cellular Hierarchies for Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RchyOptimyx.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rchyoptimyx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rchyoptimyx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rchyoptimyx/meta.yaml>`_

   Constructs a hierarchy of cells using flow cytometry for maximization of an external variable \(e.g.\, a clinical outcome or a cytokine response\).


.. conda:package:: bioconductor-rchyoptimyx

   |downloads_bioconductor-rchyoptimyx| |docker_bioconductor-rchyoptimyx|

   :versions: 2.26.0-0, 2.24.0-1, 2.22.0-0
   
   :depends bioconductor-flowtype: >=2.24.0,<2.25.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-rgraphviz: >=2.30.0,<2.31.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-sfsmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rchyoptimyx

   and update with::

      conda update bioconductor-rchyoptimyx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rchyoptimyx:<tag>

   (see `bioconductor-rchyoptimyx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rchyoptimyx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rchyoptimyx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rchyoptimyx
   :alt:   (downloads)
.. |docker_bioconductor-rchyoptimyx| image:: https://quay.io/repository/biocontainers/bioconductor-rchyoptimyx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rchyoptimyx
.. _`bioconductor-rchyoptimyx/tags`: https://quay.io/repository/biocontainers/bioconductor-rchyoptimyx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rchyoptimyx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rchyoptimyx/README.html