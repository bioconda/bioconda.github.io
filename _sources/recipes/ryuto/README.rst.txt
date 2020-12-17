:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ryuto'
.. highlight: bash

ryuto
=====

.. conda:recipe:: ryuto
   :replaces_section_title:
   :noindex:

   Network\-Flow based Transcriptome Reconstruction

   :homepage: https://github.com/studla/RYUTO/
   :license: BSD
   :recipe: /`ryuto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto/meta.yaml>`_

   


.. conda:package:: ryuto

   |downloads_ryuto| |docker_ryuto|

   :versions:
      
      

      ``1.6-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ryuto

   and update with::

      conda update ryuto

   or use the docker container::

      docker pull quay.io/biocontainers/ryuto:<tag>

   (see `ryuto/tags`_ for valid values for ``<tag>``)


.. |downloads_ryuto| image:: https://img.shields.io/conda/dn/bioconda/ryuto.svg?style=flat
   :target: https://anaconda.org/bioconda/ryuto
   :alt:   (downloads)
.. |docker_ryuto| image:: https://quay.io/repository/biocontainers/ryuto/status
   :target: https://quay.io/repository/biocontainers/ryuto
.. _`ryuto/tags`: https://quay.io/repository/biocontainers/ryuto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ryuto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ryuto/README.html