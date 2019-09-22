:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcfgenotyper'
.. highlight: bash

gvcfgenotyper
=============

.. conda:recipe:: gvcfgenotyper
   :replaces_section_title:

   A utility for merging and genotyping Illumina\-style GVCFs.

   :homepage: https://github.com/Illumina/gvcfgenotyper
   :license: Apache 2.0
   :recipe: /`gvcfgenotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcfgenotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcfgenotyper/meta.yaml>`_

   


.. conda:package:: gvcfgenotyper

   |downloads_gvcfgenotyper| |docker_gvcfgenotyper|

   :versions: 2019.02.26-0, 2018.10.15-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gvcfgenotyper

   and update with::

      conda update gvcfgenotyper

   or use the docker container::

      docker pull quay.io/biocontainers/gvcfgenotyper:<tag>

   (see `gvcfgenotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcfgenotyper| image:: https://img.shields.io/conda/dn/bioconda/gvcfgenotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcfgenotyper
   :alt:   (downloads)
.. |docker_gvcfgenotyper| image:: https://quay.io/repository/biocontainers/gvcfgenotyper/status
   :target: https://quay.io/repository/biocontainers/gvcfgenotyper
.. _`gvcfgenotyper/tags`: https://quay.io/repository/biocontainers/gvcfgenotyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcfgenotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcfgenotyper/README.html