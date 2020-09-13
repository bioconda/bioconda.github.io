:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbg'
.. highlight: bash

mbg
===

.. conda:recipe:: mbg
   :replaces_section_title:
   :noindex:

   Minimizer based sparse de Bruijn graph constructor

   :homepage: https://github.com/maickrau/MBG
   :license: MIT
   :recipe: /`mbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbg/meta.yaml>`_

   


.. conda:package:: mbg

   |downloads_mbg| |docker_mbg|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mbg

   and update with::

      conda update mbg

   or use the docker container::

      docker pull quay.io/biocontainers/mbg:<tag>

   (see `mbg/tags`_ for valid values for ``<tag>``)


.. |downloads_mbg| image:: https://img.shields.io/conda/dn/bioconda/mbg.svg?style=flat
   :target: https://anaconda.org/bioconda/mbg
   :alt:   (downloads)
.. |docker_mbg| image:: https://quay.io/repository/biocontainers/mbg/status
   :target: https://quay.io/repository/biocontainers/mbg
.. _`mbg/tags`: https://quay.io/repository/biocontainers/mbg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbg/README.html