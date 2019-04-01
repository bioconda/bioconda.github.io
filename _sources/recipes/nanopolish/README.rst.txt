:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolish'
.. highlight: bash

nanopolish
==========

.. conda:recipe:: nanopolish
   :replaces_section_title:

   Signal\-level algorithms for MinION data.

   :homepage: https://github.com/jts/nanopolish
   :license: MIT
   :recipe: /`nanopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish/meta.yaml>`_

   


.. conda:package:: nanopolish

   |downloads_nanopolish| |docker_nanopolish|

   :versions: 0.11.1-0, 0.11.0-1, 0.11.0-0, 0.10.2-0, 0.10.1-0, 0.9.2-5, 0.9.2-4, 0.9.2-0, 0.9.0-2, 0.9.0-1, 0.9.0-0, 0.8.5-4, 0.8.5-3, 0.8.1-3, 0.7.1-3, 0.7.1-1, 0.7.1-0, 0.7.0-0, 0.6.0-0, 0.6.0.dev-0, 0.4.0-0
   
   :depends biopython: 
   
   :depends bwa: 
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends eigen: 
   
   :depends hdf5: >=1.10.4,<1.10.5.0a0
   
   :depends htslib: >=1.9,<1.10.0a0
   
   :depends libcurl: >=7.64.1,<8.0a0
   
   :depends libdeflate: >=1.0,<1.1.0a0
   
   :depends libgcc: 
   
   :depends ncurses: >=6.1,<6.2.0a0
   
   :depends openmp: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopolish

   and update with::

      conda update nanopolish

   or use the docker container::

      docker pull quay.io/biocontainers/nanopolish:<tag>

   (see `nanopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolish| image:: https://img.shields.io/conda/dn/bioconda/nanopolish.svg?style=flat
   :alt:   (downloads)
.. |docker_nanopolish| image:: https://quay.io/repository/biocontainers/nanopolish/status
   :target: https://quay.io/repository/biocontainers/nanopolish
.. _`nanopolish/tags`: https://quay.io/repository/biocontainers/nanopolish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolish/README.html