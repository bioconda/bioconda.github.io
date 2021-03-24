:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genotyphi'
.. highlight: bash

genotyphi
=========

.. conda:recipe:: genotyphi
   :replaces_section_title:
   :noindex:

   Assign genotypes to Salmonella Typhi genomes based on VCF files \(mapped to Typhi CT18 reference genome\)

   :homepage: https://github.com/katholt/genotyphi
   :license: GPL3
   :recipe: /`genotyphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotyphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotyphi/meta.yaml>`_

   


.. conda:package:: genotyphi

   |downloads_genotyphi| |docker_genotyphi|

   :versions:
      
      

      ``1.8.0-0``,  ``1.7.1-0``

      

   
   :depends bcftools: ``>=1.1``
   :depends python: ``<3``
   :depends samtools: ``>=1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genotyphi

   and update with::

      conda update genotyphi

   or use the docker container::

      docker pull quay.io/biocontainers/genotyphi:<tag>

   (see `genotyphi/tags`_ for valid values for ``<tag>``)


.. |downloads_genotyphi| image:: https://img.shields.io/conda/dn/bioconda/genotyphi.svg?style=flat
   :target: https://anaconda.org/bioconda/genotyphi
   :alt:   (downloads)
.. |docker_genotyphi| image:: https://quay.io/repository/biocontainers/genotyphi/status
   :target: https://quay.io/repository/biocontainers/genotyphi
.. _`genotyphi/tags`: https://quay.io/repository/biocontainers/genotyphi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genotyphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genotyphi/README.html