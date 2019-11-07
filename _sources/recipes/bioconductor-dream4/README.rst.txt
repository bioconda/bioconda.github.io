:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dream4'
.. highlight: bash

bioconductor-dream4
===================

.. conda:recipe:: bioconductor-dream4
   :replaces_section_title:

   Synthetic Expression Data for Gene Regulatory Network Inference from the 2009 DREAM4 challenge

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/DREAM4.html
   :license: GPL
   :recipe: /`bioconductor-dream4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dream4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dream4/meta.yaml>`_

   Simulated expression data for five 10\-node\, and five 100\-node networks\, with associated data \(including solutions\) from the 2009 DREAM4 challenge.


.. conda:package:: bioconductor-dream4

   |downloads_bioconductor-dream4| |docker_bioconductor-dream4|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dream4

   and update with::

      conda update bioconductor-dream4

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dream4:<tag>

   (see `bioconductor-dream4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dream4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dream4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dream4
   :alt:   (downloads)
.. |docker_bioconductor-dream4| image:: https://quay.io/repository/biocontainers/bioconductor-dream4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dream4
.. _`bioconductor-dream4/tags`: https://quay.io/repository/biocontainers/bioconductor-dream4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dream4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dream4/README.html