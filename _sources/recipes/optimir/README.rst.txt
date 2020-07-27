:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optimir'
.. highlight: bash

optimir
=======

.. conda:recipe:: optimir
   :replaces_section_title:
   :noindex:

   Integrating genetic variations in miRNA alignment

   :homepage: https://github.com/FlorianThibord/OptimiR
   :license: GPL-3
   :recipe: /`optimir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optimir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optimir/meta.yaml>`_
   :links: doi: :doi:`10.1261/rna.069708.118`

   


.. conda:package:: optimir

   |downloads_optimir| |docker_optimir|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends cutadapt: 
   :depends pysam: 
   :depends python: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install optimir

   and update with::

      conda update optimir

   or use the docker container::

      docker pull quay.io/biocontainers/optimir:<tag>

   (see `optimir/tags`_ for valid values for ``<tag>``)


.. |downloads_optimir| image:: https://img.shields.io/conda/dn/bioconda/optimir.svg?style=flat
   :target: https://anaconda.org/bioconda/optimir
   :alt:   (downloads)
.. |docker_optimir| image:: https://quay.io/repository/biocontainers/optimir/status
   :target: https://quay.io/repository/biocontainers/optimir
.. _`optimir/tags`: https://quay.io/repository/biocontainers/optimir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optimir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optimir/README.html