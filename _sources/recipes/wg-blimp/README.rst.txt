:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wg-blimp'
.. highlight: bash

wg-blimp
========

.. conda:recipe:: wg-blimp
   :replaces_section_title:
   :noindex:

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\)

   :homepage: https://github.com/MarWoes/wg-blimp
   :license: GPL / AGPL-3.0
   :recipe: /`wg-blimp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp/meta.yaml>`_

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\) can be utilised to analyse WGBS data. 
   It performs alignment\, qc\, methylation calling\, DMR calling and DMR annotation using a multitude of tools. 



.. conda:package:: wg-blimp

   |downloads_wg-blimp| |docker_wg-blimp|

   :versions:
      
      

      ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends bedtools: 
   :depends bwa: 
   :depends bwameth: ``0.2.0.*``
   :depends click: 
   :depends fastqc: 
   :depends git: 
   :depends h5py: 
   :depends methyldackel: 
   :depends metilene: 
   :depends mosdepth: 
   :depends multiqc: 
   :depends picard: 
   :depends pysam: 
   :depends qualimap: 
   :depends r-base: 
   :depends ruamel.yaml: 
   :depends samtools: 
   :depends snakemake-minimal: ``>=5.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wg-blimp

   and update with::

      conda update wg-blimp

   or use the docker container::

      docker pull quay.io/biocontainers/wg-blimp:<tag>

   (see `wg-blimp/tags`_ for valid values for ``<tag>``)


.. |downloads_wg-blimp| image:: https://img.shields.io/conda/dn/bioconda/wg-blimp.svg?style=flat
   :target: https://anaconda.org/bioconda/wg-blimp
   :alt:   (downloads)
.. |docker_wg-blimp| image:: https://quay.io/repository/biocontainers/wg-blimp/status
   :target: https://quay.io/repository/biocontainers/wg-blimp
.. _`wg-blimp/tags`: https://quay.io/repository/biocontainers/wg-blimp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wg-blimp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wg-blimp/README.html