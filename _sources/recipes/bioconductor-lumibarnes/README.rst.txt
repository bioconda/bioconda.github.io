:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumibarnes'
.. highlight: bash

bioconductor-lumibarnes
=======================

.. conda:recipe:: bioconductor-lumibarnes
   :replaces_section_title:

   Barnes Benchmark Illumina Tissues Titration Data

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/lumiBarnes.html
   :license: LGPL
   :recipe: /`bioconductor-lumibarnes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes/meta.yaml>`_

   The Barnes benchmark dataset can be used to evaluate the algorithms for Illumina microarrays. It measured a titration series of two human tissues\, blood and placenta\, and includes six samples with the titration ratio of blood and placenta as 100\:0\, 95\:5\, 75\:25\, 50\:50\, 25\:75 and 0\:100. The samples were hybridized on HumanRef\-8 BeadChip \(Illumina\, Inc\) in duplicate. The data is loaded as an LumiBatch Object \(see documents in the lumi package\).


.. conda:package:: bioconductor-lumibarnes

   |downloads_bioconductor-lumibarnes| |docker_bioconductor-lumibarnes|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-lumi: >=2.38.0,<2.39.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumibarnes

   and update with::

      conda update bioconductor-lumibarnes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumibarnes:<tag>

   (see `bioconductor-lumibarnes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumibarnes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumibarnes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumibarnes
   :alt:   (downloads)
.. |docker_bioconductor-lumibarnes| image:: https://quay.io/repository/biocontainers/bioconductor-lumibarnes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumibarnes
.. _`bioconductor-lumibarnes/tags`: https://quay.io/repository/biocontainers/bioconductor-lumibarnes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html