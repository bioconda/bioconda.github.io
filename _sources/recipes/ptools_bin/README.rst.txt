:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptools_bin'
.. highlight: bash

ptools_bin
==========

.. conda:recipe:: ptools_bin
   :replaces_section_title:
   :noindex:

   Installation for ptools scripts.

   :homepage: https://github.com/ENCODE-DCC/ptools_bin
   :license: MIT / MIT
   :recipe: /`ptools_bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin/meta.yaml>`_

   


.. conda:package:: ptools_bin

   |downloads_ptools_bin| |docker_ptools_bin|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.3``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ptools_bin

   and update with::

      conda update ptools_bin

   or use the docker container::

      docker pull quay.io/biocontainers/ptools_bin:<tag>

   (see `ptools_bin/tags`_ for valid values for ``<tag>``)


.. |downloads_ptools_bin| image:: https://img.shields.io/conda/dn/bioconda/ptools_bin.svg?style=flat
   :target: https://anaconda.org/bioconda/ptools_bin
   :alt:   (downloads)
.. |docker_ptools_bin| image:: https://quay.io/repository/biocontainers/ptools_bin/status
   :target: https://quay.io/repository/biocontainers/ptools_bin
.. _`ptools_bin/tags`: https://quay.io/repository/biocontainers/ptools_bin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptools_bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptools_bin/README.html