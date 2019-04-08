:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pmm'
.. highlight: bash

bioconductor-pmm
================

.. conda:recipe:: bioconductor-pmm
   :replaces_section_title:

   The Parallel Mixed Model \(PMM\) approach is suitable for hit selection and cross\-comparison of RNAi screens generated in experiments that are performed in parallel under several conditions. For example\, we could think of the measurements or readouts from cells under RNAi knock\-down\, which are infected with several pathogens or which are grown from different cell lines.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pmm.html
   :license: GPL-3
   :recipe: /`bioconductor-pmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmm/meta.yaml>`_
   :links: biotools: :biotools:`pmm`, doi: :doi:`10.3929/ethz-a-010607487`

   


.. conda:package:: bioconductor-pmm

   |downloads_bioconductor-pmm| |docker_bioconductor-pmm|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lme4: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pmm

   and update with::

      conda update bioconductor-pmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pmm:<tag>

   (see `bioconductor-pmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pmm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pmm| image:: https://quay.io/repository/biocontainers/bioconductor-pmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pmm
.. _`bioconductor-pmm/tags`: https://quay.io/repository/biocontainers/bioconductor-pmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pmm/README.html