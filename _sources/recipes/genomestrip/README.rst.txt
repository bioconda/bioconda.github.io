:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomestrip'
.. highlight: bash

genomestrip
===========

.. conda:recipe:: genomestrip
   :replaces_section_title:
   :noindex:

   Genome STRiP \(Genome STRucture In Populations\) is a suite of tools for discovery and genotyping of structural variation using whole\-genome sequencing data

   :homepage: http://software.broadinstitute.org/software/genomestrip/
   :license: custom
   :recipe: /`genomestrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomestrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomestrip/meta.yaml>`_

   


.. conda:package:: genomestrip

   |downloads_genomestrip| |docker_genomestrip|

   :versions:
      
      

      ``2.00.1833-3``,  ``2.00.1833-2``,  ``2.00.1833-1``,  ``2.00.1833-0``

      

   
   :depends openjdk: ``>=8``
   :depends r-base: ``>=3.4``
   :depends samtools: 
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomestrip

   and update with::

      conda update genomestrip

   or use the docker container::

      docker pull quay.io/biocontainers/genomestrip:<tag>

   (see `genomestrip/tags`_ for valid values for ``<tag>``)


.. |downloads_genomestrip| image:: https://img.shields.io/conda/dn/bioconda/genomestrip.svg?style=flat
   :target: https://anaconda.org/bioconda/genomestrip
   :alt:   (downloads)
.. |docker_genomestrip| image:: https://quay.io/repository/biocontainers/genomestrip/status
   :target: https://quay.io/repository/biocontainers/genomestrip
.. _`genomestrip/tags`: https://quay.io/repository/biocontainers/genomestrip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomestrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomestrip/README.html