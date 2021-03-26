:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtk'
.. highlight: bash

rtk
===

.. conda:recipe:: rtk
   :replaces_section_title:
   :noindex:

   rtk \- rarefaction toolkit for OTU tables

   :homepage: https://github.com/hildebra/Rarefaction/
   :license: GPLv2
   :recipe: /`rtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk/meta.yaml>`_

   


.. conda:package:: rtk

   |downloads_rtk| |docker_rtk|

   :versions:
      
      

      ``0.93.2-1``,  ``0.93.2-0``,  ``0.93.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rtk

   and update with::

      conda update rtk

   or use the docker container::

      docker pull quay.io/biocontainers/rtk:<tag>

   (see `rtk/tags`_ for valid values for ``<tag>``)


.. |downloads_rtk| image:: https://img.shields.io/conda/dn/bioconda/rtk.svg?style=flat
   :target: https://anaconda.org/bioconda/rtk
   :alt:   (downloads)
.. |docker_rtk| image:: https://quay.io/repository/biocontainers/rtk/status
   :target: https://quay.io/repository/biocontainers/rtk
.. _`rtk/tags`: https://quay.io/repository/biocontainers/rtk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtk/README.html