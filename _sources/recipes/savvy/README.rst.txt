:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savvy'
.. highlight: bash

savvy
=====

.. conda:recipe:: savvy
   :replaces_section_title:
   :noindex:

   Interface to various variant calling formats.

   :homepage: https://github.com/statgen/savvy
   :license: MOZILLA / MPL-2.0
   :recipe: /`savvy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy/meta.yaml>`_

   


.. conda:package:: savvy

   |downloads_savvy| |docker_savvy|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends shrinkwrap: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :depends zstd: ``>=1.4.9,<1.5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install savvy

   and update with::

      conda update savvy

   or use the docker container::

      docker pull quay.io/biocontainers/savvy:<tag>

   (see `savvy/tags`_ for valid values for ``<tag>``)


.. |downloads_savvy| image:: https://img.shields.io/conda/dn/bioconda/savvy.svg?style=flat
   :target: https://anaconda.org/bioconda/savvy
   :alt:   (downloads)
.. |docker_savvy| image:: https://quay.io/repository/biocontainers/savvy/status
   :target: https://quay.io/repository/biocontainers/savvy
.. _`savvy/tags`: https://quay.io/repository/biocontainers/savvy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savvy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savvy/README.html