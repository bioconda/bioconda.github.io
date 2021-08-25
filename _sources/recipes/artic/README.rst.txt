:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic'
.. highlight: bash

artic
=====

.. conda:recipe:: artic
   :replaces_section_title:
   :noindex:

   ARTIC pipeline \- a bioinformatics pipeline for working with virus sequencing data sequenced with nanopore

   :homepage: https://github.com/artic-network/fieldbioinformatics
   :license: MIT
   :recipe: /`artic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic/meta.yaml>`_

   


.. conda:package:: artic

   |downloads_artic| |docker_artic|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0_rc2-0``

      

   
   :depends artic-porechop: ``0.3.2pre.*``
   :depends artic-tools: ``0.2.6.*``
   :depends bcftools: ``1.10.2.*``
   :depends biopython: ``>=1.76``
   :depends bwa: ``0.7.17.*``
   :depends clint: 
   :depends htslib: ``1.10.2.*``
   :depends longshot: ``>=0.4.1``
   :depends medaka: ``>=1.0.3``
   :depends minimap2: ``2.17.*``
   :depends multiqc: 
   :depends muscle: ``>=3.8``
   :depends nanopolish: ``>=0.13.2``
   :depends pandas: ``<1``
   :depends pip: 
   :depends pysam: ``>=0.15.3``
   :depends pysam: ``>=0.16.0.1``
   :depends pytest: 
   :depends python: ``>=3``
   :depends pyvcf: ``>=0.6.8``
   :depends requests: 
   :depends samtools: ``1.10.*``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install artic

   and update with::

      conda update artic

   or use the docker container::

      docker pull quay.io/biocontainers/artic:<tag>

   (see `artic/tags`_ for valid values for ``<tag>``)


.. |downloads_artic| image:: https://img.shields.io/conda/dn/bioconda/artic.svg?style=flat
   :target: https://anaconda.org/bioconda/artic
   :alt:   (downloads)
.. |docker_artic| image:: https://quay.io/repository/biocontainers/artic/status
   :target: https://quay.io/repository/biocontainers/artic
.. _`artic/tags`: https://quay.io/repository/biocontainers/artic?tab=tags


.. raw:: html

    <script>
        var package = "artic";
        var versions = ["1.2.1","1.2.0","1.1.3","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic/README.html