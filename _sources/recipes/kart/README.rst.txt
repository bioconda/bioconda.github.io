:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kart'
.. highlight: bash

kart
====

.. conda:recipe:: kart
   :replaces_section_title:

   Kart\: a divide\-and\-conquer algorithm for NGS read alignment

   :homepage: https://github.com/hsinnan75/Kart
   :license: MIT
   :recipe: /`kart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kart/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx189`

   An efficient short read mapper for DNA\-Seq data.


.. conda:package:: kart

   |downloads_kart| |docker_kart|

   :versions: 2.5.6-0, 2.5.5-0, 2.5.4-0, 2.5.3-0, 2.5.2-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kart

   and update with::

      conda update kart

   or use the docker container::

      docker pull quay.io/biocontainers/kart:<tag>

   (see `kart/tags`_ for valid values for ``<tag>``)


.. |downloads_kart| image:: https://img.shields.io/conda/dn/bioconda/kart.svg?style=flat
   :target: https://anaconda.org/bioconda/kart
   :alt:   (downloads)
.. |docker_kart| image:: https://quay.io/repository/biocontainers/kart/status
   :target: https://quay.io/repository/biocontainers/kart
.. _`kart/tags`: https://quay.io/repository/biocontainers/kart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kart/README.html