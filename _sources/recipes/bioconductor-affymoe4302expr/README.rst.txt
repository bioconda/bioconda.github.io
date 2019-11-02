:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affymoe4302expr'
.. highlight: bash

bioconductor-affymoe4302expr
============================

.. conda:recipe:: bioconductor-affymoe4302expr
   :replaces_section_title:

   Contains pre\-built mouse \(GPL1261\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO\, preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/Affymoe4302Expr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affymoe4302expr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr/meta.yaml>`_

   


.. conda:package:: bioconductor-affymoe4302expr

   |downloads_bioconductor-affymoe4302expr| |docker_bioconductor-affymoe4302expr|

   :versions: 1.23.0-0, 1.22.0-1, 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affymoe4302expr

   and update with::

      conda update bioconductor-affymoe4302expr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affymoe4302expr:<tag>

   (see `bioconductor-affymoe4302expr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affymoe4302expr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affymoe4302expr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affymoe4302expr
   :alt:   (downloads)
.. |docker_bioconductor-affymoe4302expr| image:: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr
.. _`bioconductor-affymoe4302expr/tags`: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html