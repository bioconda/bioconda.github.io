:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shannon_cpp'
.. highlight: bash

shannon_cpp
===========

.. conda:recipe:: shannon_cpp
   :replaces_section_title:

   shannon\_cpp is command line tool for denovo rna assembly

   :homepage: https://github.com/bx3/shannon_cpp.git
   :license: GPL v3.0
   :recipe: /`shannon_cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon_cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon_cpp/meta.yaml>`_

   


.. conda:package:: shannon_cpp

   |downloads_shannon_cpp| |docker_shannon_cpp|

   :versions: 0.4.0-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends coreutils: 
   :depends glpk: >=4.65,<4.66.0a0
   :depends kmer-jellyfish: 2.*
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends metis: >=5.1.0,<5.2.0a0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends python: >=2.7,<2.8.0a0
   :depends rcorrector: 1.*
   :depends sparsehash: 
   :depends wget: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shannon_cpp

   and update with::

      conda update shannon_cpp

   or use the docker container::

      docker pull quay.io/biocontainers/shannon_cpp:<tag>

   (see `shannon_cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_shannon_cpp| image:: https://img.shields.io/conda/dn/bioconda/shannon_cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/shannon_cpp
   :alt:   (downloads)
.. |docker_shannon_cpp| image:: https://quay.io/repository/biocontainers/shannon_cpp/status
   :target: https://quay.io/repository/biocontainers/shannon_cpp
.. _`shannon_cpp/tags`: https://quay.io/repository/biocontainers/shannon_cpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shannon_cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shannon_cpp/README.html