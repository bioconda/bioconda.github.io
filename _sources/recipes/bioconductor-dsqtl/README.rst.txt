:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dsqtl'
.. highlight: bash

bioconductor-dsqtl
==================

.. conda:recipe:: bioconductor-dsqtl
   :replaces_section_title:

   dsQTL\, excerpt from Degner et al. 2012 Nature letter on DNA variants associated with DnaseI hypersensitivity

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/dsQTL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dsqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsqtl/meta.yaml>`_

   


.. conda:package:: bioconductor-dsqtl

   |downloads_bioconductor-dsqtl| |docker_bioconductor-dsqtl|

   :versions: 0.22.0-1, 0.20.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-ggbase: >=3.46.0,<3.47.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dsqtl

   and update with::

      conda update bioconductor-dsqtl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dsqtl:<tag>

   (see `bioconductor-dsqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dsqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dsqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dsqtl
   :alt:   (downloads)
.. |docker_bioconductor-dsqtl| image:: https://quay.io/repository/biocontainers/bioconductor-dsqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dsqtl
.. _`bioconductor-dsqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-dsqtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dsqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dsqtl/README.html