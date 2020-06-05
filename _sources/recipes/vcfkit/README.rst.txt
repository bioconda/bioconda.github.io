:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfkit'
.. highlight: bash

vcfkit
======

.. conda:recipe:: vcfkit
   :replaces_section_title:
   :noindex:

   VCF\-kit is a command\-line based collection of utilities for performing analysis on Variant Call Format \(VCF\) files.

   :homepage: https://github.com/AndersenLab/VCF-kit
   :license: MIT / MIT
   :recipe: /`vcfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit/meta.yaml>`_

   


.. conda:package:: vcfkit

   |downloads_vcfkit| |docker_vcfkit|

   :versions:
      
      

      ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-0``,  ``0.0.4-0``

      

   
   :depends awesome-slugify: 
   :depends bcftools: ``>=1.3``
   :depends biopython: 
   :depends blast: ``>=2.2.31``
   :depends bwa: ``>=0.7.12``
   :depends clint: 
   :depends cyvcf2: ``>=0.6.5``
   :depends docopt: 
   :depends intervaltree: ``2.1.0``
   :depends jinja2: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends matplotlib: 
   :depends muscle: ``>=3.8.31``
   :depends networkx: ``1.11``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends requests: 
   :depends samtools: ``>=1.3``
   :depends scipy: 
   :depends tabulate: 
   :depends yahmm: ``>=1.1.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfkit

   and update with::

      conda update vcfkit

   or use the docker container::

      docker pull quay.io/biocontainers/vcfkit:<tag>

   (see `vcfkit/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfkit| image:: https://img.shields.io/conda/dn/bioconda/vcfkit.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfkit
   :alt:   (downloads)
.. |docker_vcfkit| image:: https://quay.io/repository/biocontainers/vcfkit/status
   :target: https://quay.io/repository/biocontainers/vcfkit
.. _`vcfkit/tags`: https://quay.io/repository/biocontainers/vcfkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfkit/README.html