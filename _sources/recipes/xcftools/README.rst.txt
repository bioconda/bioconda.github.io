:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xcftools'
.. highlight: bash

xcftools
========

.. conda:recipe:: xcftools
   :replaces_section_title:
   :noindex:

   Provides xcf2pnm\, xcf2png\, and xcfinfo binaries

   :homepage: https://github.com/j-jorge/xcftools
   :license: GPL v2
   :recipe: /`xcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xcftools/meta.yaml>`_

   


.. conda:package:: xcftools

   |downloads_xcftools| |docker_xcftools|

   :versions:
      
      

      ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends gettext: 
   :depends libgcc: 
   :depends libpng: ``>=1.2.13,<1.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xcftools

   and update with::

      conda update xcftools

   or use the docker container::

      docker pull quay.io/biocontainers/xcftools:<tag>

   (see `xcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_xcftools| image:: https://img.shields.io/conda/dn/bioconda/xcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/xcftools
   :alt:   (downloads)
.. |docker_xcftools| image:: https://quay.io/repository/biocontainers/xcftools/status
   :target: https://quay.io/repository/biocontainers/xcftools
.. _`xcftools/tags`: https://quay.io/repository/biocontainers/xcftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xcftools/README.html