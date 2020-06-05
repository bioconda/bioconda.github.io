:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micro_razers'
.. highlight: bash

micro_razers
============

.. conda:recipe:: micro_razers
   :replaces_section_title:
   :noindex:

   MicroRazerS \- Rapid Alignment of Small RNA Reads

   :homepage: https://github.com/seqan/seqan/tree/seqan-v2.1.1/apps/micro_razers
   :license: GPLv3
   :recipe: /`micro_razers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micro_razers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micro_razers/meta.yaml>`_

   


.. conda:package:: micro_razers

   |downloads_micro_razers| |docker_micro_razers|

   :versions:
      
      

      ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install micro_razers

   and update with::

      conda update micro_razers

   or use the docker container::

      docker pull quay.io/biocontainers/micro_razers:<tag>

   (see `micro_razers/tags`_ for valid values for ``<tag>``)


.. |downloads_micro_razers| image:: https://img.shields.io/conda/dn/bioconda/micro_razers.svg?style=flat
   :target: https://anaconda.org/bioconda/micro_razers
   :alt:   (downloads)
.. |docker_micro_razers| image:: https://quay.io/repository/biocontainers/micro_razers/status
   :target: https://quay.io/repository/biocontainers/micro_razers
.. _`micro_razers/tags`: https://quay.io/repository/biocontainers/micro_razers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micro_razers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micro_razers/README.html