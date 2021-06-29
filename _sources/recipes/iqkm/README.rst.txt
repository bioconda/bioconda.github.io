:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqkm'
.. highlight: bash

iqkm
====

.. conda:recipe:: iqkm
   :replaces_section_title:
   :noindex:

   Identification and quantification of KEGG Modules in metagenomes\/genomes

   :homepage: https://github.com/lijingdi/iqKM
   :license: GPL3 / GPL-3.0-only
   :recipe: /`iqkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm/meta.yaml>`_

   


.. conda:package:: iqkm

   |downloads_iqkm| |docker_iqkm|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends hmmer: ``>=3.1``
   :depends markdown: 
   :depends networkx: 
   :depends prodigal: ``>=2.6.3``
   :depends pylint: 
   :depends pysam: 
   :depends pytest: 
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iqkm

   and update with::

      conda update iqkm

   or use the docker container::

      docker pull quay.io/biocontainers/iqkm:<tag>

   (see `iqkm/tags`_ for valid values for ``<tag>``)


.. |downloads_iqkm| image:: https://img.shields.io/conda/dn/bioconda/iqkm.svg?style=flat
   :target: https://anaconda.org/bioconda/iqkm
   :alt:   (downloads)
.. |docker_iqkm| image:: https://quay.io/repository/biocontainers/iqkm/status
   :target: https://quay.io/repository/biocontainers/iqkm
.. _`iqkm/tags`: https://quay.io/repository/biocontainers/iqkm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqkm/README.html