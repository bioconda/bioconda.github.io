:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.blood.450k'
.. highlight: bash

bioconductor-flowsorted.blood.450k
==================================

.. conda:recipe:: bioconductor-flowsorted.blood.450k
   :replaces_section_title:

   Raw data objects for the Illumina 450k DNA methylation microarrays\, and an object depicting which CpGs on the array are associated with cell type.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/FlowSorted.Blood.450k.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowsorted.blood.450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.450k/meta.yaml>`_

   


.. conda:package:: bioconductor-flowsorted.blood.450k

   |downloads_bioconductor-flowsorted.blood.450k| |docker_bioconductor-flowsorted.blood.450k|

   :versions: 1.23.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-minfi: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsorted.blood.450k

   and update with::

      conda update bioconductor-flowsorted.blood.450k

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.blood.450k:<tag>

   (see `bioconductor-flowsorted.blood.450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.blood.450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.blood.450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.blood.450k
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.blood.450k| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k
.. _`bioconductor-flowsorted.blood.450k/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.450k/README.html