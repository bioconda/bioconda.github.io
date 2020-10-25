:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arriba'
.. highlight: bash

arriba
======

.. conda:recipe:: arriba
   :replaces_section_title:
   :noindex:

   Fast and accurate gene fusion detection from RNA\-Seq data

   :homepage: https://github.com/suhrig/arriba
   :license: MIT
   :recipe: /`arriba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba/meta.yaml>`_

   


.. conda:package:: arriba

   |downloads_arriba| |docker_arriba|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libdeflate: ``>=1.6,<1.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=3.3.0``
   :depends r-circlize: 
   :depends samtools: ``>=1.9``
   :depends star: ``>=2.7.6a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arriba

   and update with::

      conda update arriba

   or use the docker container::

      docker pull quay.io/biocontainers/arriba:<tag>

   (see `arriba/tags`_ for valid values for ``<tag>``)


.. |downloads_arriba| image:: https://img.shields.io/conda/dn/bioconda/arriba.svg?style=flat
   :target: https://anaconda.org/bioconda/arriba
   :alt:   (downloads)
.. |docker_arriba| image:: https://quay.io/repository/biocontainers/arriba/status
   :target: https://quay.io/repository/biocontainers/arriba
.. _`arriba/tags`: https://quay.io/repository/biocontainers/arriba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arriba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arriba/README.html