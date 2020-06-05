:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mergenotcombined'
.. highlight: bash

mergenotcombined
================

.. conda:recipe:: mergenotcombined
   :replaces_section_title:
   :noindex:

   Merge Forward and reverse reads from fastq files

   :homepage: https://github.com/andvides/mergeNotCombined.git
   :license: GPL / GPL-3.0
   :recipe: /`mergenotcombined <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mergenotcombined>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mergenotcombined/meta.yaml>`_

   


.. conda:package:: mergenotcombined

   |downloads_mergenotcombined| |docker_mergenotcombined|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mergenotcombined

   and update with::

      conda update mergenotcombined

   or use the docker container::

      docker pull quay.io/biocontainers/mergenotcombined:<tag>

   (see `mergenotcombined/tags`_ for valid values for ``<tag>``)


.. |downloads_mergenotcombined| image:: https://img.shields.io/conda/dn/bioconda/mergenotcombined.svg?style=flat
   :target: https://anaconda.org/bioconda/mergenotcombined
   :alt:   (downloads)
.. |docker_mergenotcombined| image:: https://quay.io/repository/biocontainers/mergenotcombined/status
   :target: https://quay.io/repository/biocontainers/mergenotcombined
.. _`mergenotcombined/tags`: https://quay.io/repository/biocontainers/mergenotcombined?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mergenotcombined/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mergenotcombined/README.html