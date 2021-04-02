:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mccortex'
.. highlight: bash

mccortex
========

.. conda:recipe:: mccortex
   :replaces_section_title:
   :noindex:

   De novo genome assembly and multisample variant calling 

   :homepage: https://github.com/mcveanlab/mccortex
   :license: MIT
   :recipe: /`mccortex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mccortex/meta.yaml>`_
   :links: biotools: :biotools:`mccortex`

   


.. conda:package:: mccortex

   |downloads_mccortex| |docker_mccortex|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mccortex

   and update with::

      conda update mccortex

   or use the docker container::

      docker pull quay.io/biocontainers/mccortex:<tag>

   (see `mccortex/tags`_ for valid values for ``<tag>``)


.. |downloads_mccortex| image:: https://img.shields.io/conda/dn/bioconda/mccortex.svg?style=flat
   :target: https://anaconda.org/bioconda/mccortex
   :alt:   (downloads)
.. |docker_mccortex| image:: https://quay.io/repository/biocontainers/mccortex/status
   :target: https://quay.io/repository/biocontainers/mccortex
.. _`mccortex/tags`: https://quay.io/repository/biocontainers/mccortex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mccortex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mccortex/README.html