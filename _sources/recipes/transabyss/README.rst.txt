:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transabyss'
.. highlight: bash

transabyss
==========

.. conda:recipe:: transabyss
   :replaces_section_title:

   de novo assembly of RNA\-Seq data using ABySS

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/trans-abyss
   :license: GPL
   :recipe: /`transabyss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transabyss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transabyss/meta.yaml>`_

   


.. conda:package:: transabyss

   |downloads_transabyss| |docker_transabyss|

   :versions: 2.0.1-4, 2.0.1-3, 1.5.5-3, 1.5.5-2, 1.5.5-1, 1.5.4-1, 1.5.4-0
   
   :depends abyss: 2.0.*
   
   :depends blat: 
   
   :depends bowtie2: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-igraph: 0.7.*
   
   :depends samtools: 1.3.1.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transabyss

   and update with::

      conda update transabyss

   or use the docker container::

      docker pull quay.io/repository/biocontainers/transabyss:<tag>

   (see `transabyss/tags`_ for valid values for ``<tag>``)


.. |downloads_transabyss| image:: https://img.shields.io/conda/dn/bioconda/transabyss.svg?style=flat
   :alt:   (downloads)
.. |docker_transabyss| image:: https://quay.io/repository/biocontainers/transabyss/status
   :target: https://quay.io/repository/biocontainers/transabyss
.. _`transabyss/tags`: https://quay.io/repository/biocontainers/transabyss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transabyss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transabyss/README.html