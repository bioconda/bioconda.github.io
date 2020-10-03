:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairtools'
.. highlight: bash

pairtools
=========

.. conda:recipe:: pairtools
   :replaces_section_title:
   :noindex:

   CLI tools to process mapped Hi\-C data

   :homepage: https://github.com/open2c/pairtools
   :documentation: http://pairtools.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`pairtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools/meta.yaml>`_

   


.. conda:package:: pairtools

   |downloads_pairtools| |docker_pairtools|

   :versions:
      
      

      ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends click: 
   :depends coreutils: 
   :depends htslib: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends lz4-c: 
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pbgzip: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pairtools

   and update with::

      conda update pairtools

   or use the docker container::

      docker pull quay.io/biocontainers/pairtools:<tag>

   (see `pairtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pairtools| image:: https://img.shields.io/conda/dn/bioconda/pairtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pairtools
   :alt:   (downloads)
.. |docker_pairtools| image:: https://quay.io/repository/biocontainers/pairtools/status
   :target: https://quay.io/repository/biocontainers/pairtools
.. _`pairtools/tags`: https://quay.io/repository/biocontainers/pairtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairtools/README.html