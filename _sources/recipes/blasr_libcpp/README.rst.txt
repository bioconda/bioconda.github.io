:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blasr_libcpp'
.. highlight: bash

blasr_libcpp
============

.. conda:recipe:: blasr_libcpp
   :replaces_section_title:

   blasr\_libcpp is a support library used by blasr and other PacBio tools

   :homepage: https://github.com/PacificBiosciences/blasr_libcpp
   :license: BSD-3-Clause-Clear
   :recipe: /`blasr_libcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr_libcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr_libcpp/meta.yaml>`_

   


.. conda:package:: blasr_libcpp

   |downloads_blasr_libcpp| |docker_blasr_libcpp|

   :versions: 5.3.4-0, 5.3.3-1, 5.3.3-0, 5.3.1-4, 5.3.1-3, 5.3.1-2, 5.3.1-1, 5.3.1-0, 1.1-1, 1.1-0
   
   :depends hdf5: >=1.10.5,<1.10.6.0a0
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blasr_libcpp

   and update with::

      conda update blasr_libcpp

   or use the docker container::

      docker pull quay.io/biocontainers/blasr_libcpp:<tag>

   (see `blasr_libcpp/tags`_ for valid values for ``<tag>``)


.. |downloads_blasr_libcpp| image:: https://img.shields.io/conda/dn/bioconda/blasr_libcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/blasr_libcpp
   :alt:   (downloads)
.. |docker_blasr_libcpp| image:: https://quay.io/repository/biocontainers/blasr_libcpp/status
   :target: https://quay.io/repository/biocontainers/blasr_libcpp
.. _`blasr_libcpp/tags`: https://quay.io/repository/biocontainers/blasr_libcpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blasr_libcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blasr_libcpp/README.html