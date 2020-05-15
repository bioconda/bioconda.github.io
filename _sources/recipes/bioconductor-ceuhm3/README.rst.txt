:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ceuhm3'
.. highlight: bash

bioconductor-ceuhm3
===================

.. conda:recipe:: bioconductor-ceuhm3
   :replaces_section_title:

   ceuhm3\: genotype \(HapMap phase III\) and expression data for CEPH CEU cohort

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/ceuhm3.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ceuhm3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ceuhm3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ceuhm3/meta.yaml>`_

   ceuhm3\: genotype \(HapMap phase III\) and expression data for CEPH CEU cohort


.. conda:package:: bioconductor-ceuhm3

   |downloads_bioconductor-ceuhm3| |docker_bioconductor-ceuhm3|

   :versions: 0.26.0-0, 0.24.0-0, 0.22.0-1, 0.20.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-ggbase: >=3.50.0,<3.51.0
   :depends bioconductor-ggtools: >=5.24.0,<5.25.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ceuhm3

   and update with::

      conda update bioconductor-ceuhm3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ceuhm3:<tag>

   (see `bioconductor-ceuhm3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ceuhm3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ceuhm3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ceuhm3
   :alt:   (downloads)
.. |docker_bioconductor-ceuhm3| image:: https://quay.io/repository/biocontainers/bioconductor-ceuhm3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ceuhm3
.. _`bioconductor-ceuhm3/tags`: https://quay.io/repository/biocontainers/bioconductor-ceuhm3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ceuhm3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ceuhm3/README.html