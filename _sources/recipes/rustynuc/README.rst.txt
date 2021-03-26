:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustynuc'
.. highlight: bash

rustynuc
========

.. conda:recipe:: rustynuc
   :replaces_section_title:
   :noindex:

   Quick analysis of pileups for likely 8\-oxoG locations

   :homepage: https://github.com/bjohnnyd/rustynuc
   :license: MIT / MIT
   :recipe: /`rustynuc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustynuc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustynuc/meta.yaml>`_

   


.. conda:package:: rustynuc

   |downloads_rustynuc| |docker_rustynuc|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rustynuc

   and update with::

      conda update rustynuc

   or use the docker container::

      docker pull quay.io/biocontainers/rustynuc:<tag>

   (see `rustynuc/tags`_ for valid values for ``<tag>``)


.. |downloads_rustynuc| image:: https://img.shields.io/conda/dn/bioconda/rustynuc.svg?style=flat
   :target: https://anaconda.org/bioconda/rustynuc
   :alt:   (downloads)
.. |docker_rustynuc| image:: https://quay.io/repository/biocontainers/rustynuc/status
   :target: https://quay.io/repository/biocontainers/rustynuc
.. _`rustynuc/tags`: https://quay.io/repository/biocontainers/rustynuc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustynuc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustynuc/README.html