:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bx-python'
.. highlight: bash

bx-python
=========

.. conda:recipe:: bx-python
   :replaces_section_title:

   Tools for manipulating biological data\, particularly multiple sequence alignments

   :homepage: https://github.com/bxlab/bx-python
   :license: MIT / MIT
   :recipe: /`bx-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python/meta.yaml>`_

   


.. conda:package:: bx-python

   |downloads_bx-python| |docker_bx-python|

   :versions: 0.8.2-0, 0.8.1-1, 0.8.1-0, 0.7.4-0, 0.7.3-1, 0.7.3-0, 0.7.2-1, 0.7.2-0, 0.7.1-1, 0.7.1-0
   
   :depends libgcc-ng: >=4.9
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-lzo: 
   
   :depends six: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bx-python

   and update with::

      conda update bx-python

   or use the docker container::

      docker pull quay.io/biocontainers/bx-python:<tag>

   (see `bx-python/tags`_ for valid values for ``<tag>``)


.. |downloads_bx-python| image:: https://img.shields.io/conda/dn/bioconda/bx-python.svg?style=flat
   :alt:   (downloads)
.. |docker_bx-python| image:: https://quay.io/repository/biocontainers/bx-python/status
   :target: https://quay.io/repository/biocontainers/bx-python
.. _`bx-python/tags`: https://quay.io/repository/biocontainers/bx-python?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bx-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bx-python/README.html