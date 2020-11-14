:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-isofox'
.. highlight: bash

hmftools-isofox
===============

.. conda:recipe:: hmftools-isofox
   :replaces_section_title:
   :noindex:

   Isofox is a tool for counting fragment support for identifying and counting gene and transcript features using genome aligned RNASeq data in tumor samples.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/isofox
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-isofox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-isofox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-isofox/meta.yaml>`_

   


.. conda:package:: hmftools-isofox

   |downloads_hmftools-isofox| |docker_hmftools-isofox|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-isofox

   and update with::

      conda update hmftools-isofox

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-isofox:<tag>

   (see `hmftools-isofox/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-isofox| image:: https://img.shields.io/conda/dn/bioconda/hmftools-isofox.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-isofox
   :alt:   (downloads)
.. |docker_hmftools-isofox| image:: https://quay.io/repository/biocontainers/hmftools-isofox/status
   :target: https://quay.io/repository/biocontainers/hmftools-isofox
.. _`hmftools-isofox/tags`: https://quay.io/repository/biocontainers/hmftools-isofox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-isofox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-isofox/README.html