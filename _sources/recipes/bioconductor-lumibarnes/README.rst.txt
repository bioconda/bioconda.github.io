.. title:: Package Recipe 'bioconductor-lumibarnes'
.. highlight: bash


bioconductor-lumibarnes
=======================

.. conda:recipe:: bioconductor-lumibarnes
   :replaces_section_title:

   The Barnes benchmark dataset can be used to evaluate the algorithms for Illumina microarrays. It measured a titration series of two human tissues\, blood and placenta\, and includes six samples with the titration ratio of blood and placenta as 100\:0\, 95\:5\, 75\:25\, 50\:50\, 25\:75 and 0\:100. The samples were hybridized on HumanRef\-8 BeadChip \(Illumina\, Inc\) in duplicate. The data is loaded as an LumiBatch Object \(see documents in the lumi package\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/lumiBarnes.html
   :license: LGPL
   :recipe: /`bioconductor-lumibarnes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes/meta.yaml>`_

   


.. conda:package:: bioconductor-lumibarnes

   |downloads_bioconductor-lumibarnes| |docker_bioconductor-lumibarnes|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lumibarnes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumibarnes

   and update with::

      conda update bioconductor-lumibarnes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lumibarnes


.. |required_by_bioconductor-lumibarnes| conda:required_by:: bioconductor-lumibarnes
.. |downloads_bioconductor-lumibarnes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumibarnes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumibarnes| image:: https://quay.io/repository/biocontainers/bioconductor-lumibarnes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumibarnes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html

