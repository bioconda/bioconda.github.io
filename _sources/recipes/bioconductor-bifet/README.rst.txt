:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bifet'
.. highlight: bash

bioconductor-bifet
==================

.. conda:recipe:: bioconductor-bifet
   :replaces_section_title:

   Bias\-free Footprint Enrichment Test

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BiFET.html
   :license: GPL-3
   :recipe: /`bioconductor-bifet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet/meta.yaml>`_

   BiFET identifies TFs whose footprints are over\-represented in target regions compared to background regions after correcting for the bias arising from the imbalance in read counts and GC contents between the target and background regions. For a given TF k\, BiFET tests the null hypothesis that the target regions have the same probability of having footprints for the TF k as the background regions while correcting for the read count and GC content bias. For this\, we use the number of target regions with footprints for TF k\, t\_k as a test statistic and calculate the p\-value as the probability of observing t\_k or more target regions with footprints under the null hypothesis.


.. conda:package:: bioconductor-bifet

   |downloads_bioconductor-bifet| |docker_bioconductor-bifet|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-poibin: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bifet

   and update with::

      conda update bioconductor-bifet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bifet:<tag>

   (see `bioconductor-bifet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bifet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bifet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bifet
   :alt:   (downloads)
.. |docker_bioconductor-bifet| image:: https://quay.io/repository/biocontainers/bioconductor-bifet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bifet
.. _`bioconductor-bifet/tags`: https://quay.io/repository/biocontainers/bioconductor-bifet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bifet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bifet/README.html