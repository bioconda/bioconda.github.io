:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmseqs2'
.. highlight: bash

mmseqs2
=======

.. conda:recipe:: mmseqs2
   :replaces_section_title:

   MMseqs2.0\: ultra fast and sensitive protein search and clustering suite

   :homepage: https://github.com/soedinglab/mmseqs2
   :license: GPLv3
   :recipe: /`mmseqs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2/meta.yaml>`_

   


.. conda:package:: mmseqs2

   |downloads_mmseqs2| |docker_mmseqs2|

   :versions: 9.d36de-0, 8.fac81-1, 7.4e23d-1, 6.f5a1c-1, 5.9375b-1, 4.bff50-1, 4.0b8cc-1, 3.be8f6-1, 3.be8f6-0, 2.23394-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends gawk: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmp: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmseqs2

   and update with::

      conda update mmseqs2

   or use the docker container::

      docker pull quay.io/biocontainers/mmseqs2:<tag>

   (see `mmseqs2/tags`_ for valid values for ``<tag>``)


.. |downloads_mmseqs2| image:: https://img.shields.io/conda/dn/bioconda/mmseqs2.svg?style=flat
   :alt:   (downloads)
.. |docker_mmseqs2| image:: https://quay.io/repository/biocontainers/mmseqs2/status
   :target: https://quay.io/repository/biocontainers/mmseqs2
.. _`mmseqs2/tags`: https://quay.io/repository/biocontainers/mmseqs2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmseqs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmseqs2/README.html