:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'open-cravat'
.. highlight: bash

open-cravat
===========

.. conda:recipe:: open-cravat
   :replaces_section_title:
   :noindex:

   OpenCRAVAT \- variant analysis toolkit

   :homepage: http://www.opencravat.org
   :documentation: https://github.com/KarchinLab/open-cravat/wiki
   
   :developer docs: https://github.com/KarchinLab/open-cravat
   :license: GPL / GPL v3
   :recipe: /`open-cravat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat/meta.yaml>`_

   


.. conda:package:: open-cravat

   |downloads_open-cravat| |docker_open-cravat|

   :versions:
      
      

      ``2.2.0-0``,  ``2.1.2-0``

      

   
   :depends aiohttp: 
   :depends aiosqlite: 
   :depends chardet: ``>=3.0.4``
   :depends intervaltree: 
   :depends markdown: 
   :depends nest-asyncio: 
   :depends oyaml: 
   :depends psutil: 
   :depends pyliftover: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends requests-toolbelt: 
   :depends twobitreader: 
   :depends websockets: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install open-cravat

   and update with::

      conda update open-cravat

   or use the docker container::

      docker pull quay.io/biocontainers/open-cravat:<tag>

   (see `open-cravat/tags`_ for valid values for ``<tag>``)


.. |downloads_open-cravat| image:: https://img.shields.io/conda/dn/bioconda/open-cravat.svg?style=flat
   :target: https://anaconda.org/bioconda/open-cravat
   :alt:   (downloads)
.. |docker_open-cravat| image:: https://quay.io/repository/biocontainers/open-cravat/status
   :target: https://quay.io/repository/biocontainers/open-cravat
.. _`open-cravat/tags`: https://quay.io/repository/biocontainers/open-cravat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/open-cravat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/open-cravat/README.html