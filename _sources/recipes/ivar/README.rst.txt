:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ivar'
.. highlight: bash

ivar
====

.. conda:recipe:: ivar
   :replaces_section_title:

   iVar is a computational package that contains functions broadly useful for viral amplicon\-based sequencing.

   :homepage: https://andersen-lab.github.io/ivar/html/
   :developer docs: https://github.com/andersen-lab/ivar
   :license: GPL-3.0
   :recipe: /`ivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar/meta.yaml>`_
   :links: biotools: :biotools:`ivar`

   


.. conda:package:: ivar

   |downloads_ivar| |docker_ivar|

   :versions: 1.2.2-0, 1.2.1-0, 1.2-0, 1.1_beta-0, 1.0.1-0, 1.0-2, 1.0-1, 1.0-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends curl: >=7.64.1,<8.0a0
   :depends htslib: >=1.9,<1.10.0a0
   :depends libdeflate: >=1.5,<1.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.5,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ivar

   and update with::

      conda update ivar

   or use the docker container::

      docker pull quay.io/biocontainers/ivar:<tag>

   (see `ivar/tags`_ for valid values for ``<tag>``)


.. |downloads_ivar| image:: https://img.shields.io/conda/dn/bioconda/ivar.svg?style=flat
   :target: https://anaconda.org/bioconda/ivar
   :alt:   (downloads)
.. |docker_ivar| image:: https://quay.io/repository/biocontainers/ivar/status
   :target: https://quay.io/repository/biocontainers/ivar
.. _`ivar/tags`: https://quay.io/repository/biocontainers/ivar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ivar/README.html