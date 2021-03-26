:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smhasher'
.. highlight: bash

smhasher
========

.. conda:recipe:: smhasher
   :replaces_section_title:
   :noindex:

   Python extension for smhasher hash functions

   :homepage: http://github.com/phensley/python-smhasher
   :license: MIT / MIT License
   :recipe: /`smhasher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher/meta.yaml>`_

   


.. conda:package:: smhasher

   |downloads_smhasher| |docker_smhasher|

   :versions:
      
      

      ``0.150.1-5``,  ``0.150.1-4``,  ``0.150.1-3``,  ``0.150.1-2``,  ``0.150.1-1``,  ``0.150.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smhasher

   and update with::

      conda update smhasher

   or use the docker container::

      docker pull quay.io/biocontainers/smhasher:<tag>

   (see `smhasher/tags`_ for valid values for ``<tag>``)


.. |downloads_smhasher| image:: https://img.shields.io/conda/dn/bioconda/smhasher.svg?style=flat
   :target: https://anaconda.org/bioconda/smhasher
   :alt:   (downloads)
.. |docker_smhasher| image:: https://quay.io/repository/biocontainers/smhasher/status
   :target: https://quay.io/repository/biocontainers/smhasher
.. _`smhasher/tags`: https://quay.io/repository/biocontainers/smhasher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smhasher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smhasher/README.html