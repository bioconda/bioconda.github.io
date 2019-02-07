.. title:: Package Recipe 'phantompeakqualtools'
.. highlight: bash


phantompeakqualtools
====================

.. conda:recipe:: phantompeakqualtools
   :replaces_section_title:

   This package computes informative enrichment and quality measures for ChIP\-seq\/DNase\-seq\/FAIRE\-seq\/MNase\-seq data. It can also be used to obtain robust estimates of the predominant fragment length or characteristic tag shift values in these assays.

   :homepage: https://github.com/kundajelab/phantompeakqualtools
   :license: BSD-3-Clause
   :recipe: /`phantompeakqualtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.136184.111`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: phantompeakqualtools

   |downloads_phantompeakqualtools| |docker_phantompeakqualtools|

   :versions: 1.2

   :depends: :conda:package:`bioconductor-rsamtools`  :conda:package:`boost`  :conda:package:`r-base` >=3.1 :conda:package:`r-bitops`  :conda:package:`r-catools`  :conda:package:`r-snow`  :conda:package:`r-snowfall`  :conda:package:`r-spp` >=1.13 :conda:package:`samtools`  

   :required~by: |required_by_phantompeakqualtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phantompeakqualtools

   and update with::

      conda update phantompeakqualtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phantompeakqualtools


.. |required_by_phantompeakqualtools| conda:required_by:: phantompeakqualtools
.. |downloads_phantompeakqualtools| image:: https://img.shields.io/conda/dn/bioconda/phantompeakqualtools.svg?style=flat
   :alt:   (downloads)
.. |docker_phantompeakqualtools| image:: https://quay.io/repository/biocontainers/phantompeakqualtools/status
   :target: https://quay.io/repository/biocontainers/phantompeakqualtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantompeakqualtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantompeakqualtools/README.html

