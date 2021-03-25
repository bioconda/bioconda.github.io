:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prinseq-plus-plus'
.. highlight: bash

prinseq-plus-plus
=================

.. conda:recipe:: prinseq-plus-plus
   :replaces_section_title:
   :noindex:

   PRINSEQ\+\+ \- Multi\-threaded C\+\+ sequence cleaning

   :homepage: https://github.com/Adrian-Cantu/PRINSEQ-plus-plus
   :license: GNU General Public License v2.0
   :recipe: /`prinseq-plus-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus/meta.yaml>`_

   


.. conda:package:: prinseq-plus-plus

   |downloads_prinseq-plus-plus| |docker_prinseq-plus-plus|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends boost-cpp: ``>=1.75.0,<1.75.1.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends pthread-stubs: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prinseq-plus-plus

   and update with::

      conda update prinseq-plus-plus

   or use the docker container::

      docker pull quay.io/biocontainers/prinseq-plus-plus:<tag>

   (see `prinseq-plus-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_prinseq-plus-plus| image:: https://img.shields.io/conda/dn/bioconda/prinseq-plus-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/prinseq-plus-plus
   :alt:   (downloads)
.. |docker_prinseq-plus-plus| image:: https://quay.io/repository/biocontainers/prinseq-plus-plus/status
   :target: https://quay.io/repository/biocontainers/prinseq-plus-plus
.. _`prinseq-plus-plus/tags`: https://quay.io/repository/biocontainers/prinseq-plus-plus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prinseq-plus-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prinseq-plus-plus/README.html