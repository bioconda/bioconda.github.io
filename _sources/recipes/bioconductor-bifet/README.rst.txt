.. title:: Package Recipe 'bioconductor-bifet'
.. highlight: bash


bioconductor-bifet
==================

.. conda:recipe:: bioconductor-bifet
   :replaces_section_title:

   BiFET identifies TFs whose footprints are over\-represented in target regions compared to background regions after correcting for the bias arising from the imbalance in read counts and GC contents between the target and background regions. For a given TF k\, BiFET tests the null hypothesis that the target regions have the same probability of having footprints for the TF k as the background regions while correcting for the read count and GC content bias. For this\, we use the number of target regions with footprints for TF k\, t\_k as a test statistic and calculate the p\-value as the probability of observing t\_k or more target regions with footprints under the null hypothesis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiFET.html
   :license: GPL-3
   :recipe: /`bioconductor-bifet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet/meta.yaml>`_

   


.. conda:package:: bioconductor-bifet

   |downloads_bioconductor-bifet| |docker_bioconductor-bifet|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-poibin`  

   :required~by: |required_by_bioconductor-bifet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bifet

   and update with::

      conda update bioconductor-bifet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bifet


.. |required_by_bioconductor-bifet| conda:required_by:: bioconductor-bifet
.. |downloads_bioconductor-bifet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bifet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bifet| image:: https://quay.io/repository/biocontainers/bioconductor-bifet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bifet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bifet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bifet/README.html

