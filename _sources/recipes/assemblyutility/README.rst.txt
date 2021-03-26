:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblyutility'
.. highlight: bash

assemblyutility
===============

.. conda:recipe:: assemblyutility
   :replaces_section_title:
   :noindex:

   Tools for DBG2OLC genoome assembler

   :homepage: https://github.com/yechengxi/AssemblyUtility
   :license: MIT
   :recipe: /`assemblyutility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility/meta.yaml>`_

   


.. conda:package:: assemblyutility

   |downloads_assemblyutility| |docker_assemblyutility|

   :versions:
      
      

      ``20160209-4``,  ``20160209-3``,  ``20160209-2``,  ``20160209-1``,  ``20160209-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assemblyutility

   and update with::

      conda update assemblyutility

   or use the docker container::

      docker pull quay.io/biocontainers/assemblyutility:<tag>

   (see `assemblyutility/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblyutility| image:: https://img.shields.io/conda/dn/bioconda/assemblyutility.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblyutility
   :alt:   (downloads)
.. |docker_assemblyutility| image:: https://quay.io/repository/biocontainers/assemblyutility/status
   :target: https://quay.io/repository/biocontainers/assemblyutility
.. _`assemblyutility/tags`: https://quay.io/repository/biocontainers/assemblyutility?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblyutility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblyutility/README.html