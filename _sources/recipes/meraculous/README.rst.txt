:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meraculous'
.. highlight: bash

meraculous
==========

.. conda:recipe:: meraculous
   :replaces_section_title:
   :noindex:

   Meraculous is a whole genome assembler for Next Generation Sequencing data\, geared for large genomes. It\'s hybrid k\-mer\/read\-based approach capitalizes on the high accuracy of Illumina sequence by eschewing an explicit error correction step which we argue to be redundant with the assembly process. Meraculous achieves high performance with large datasets by utilizing lightweight data structures and multi\-threaded parallelization\, allowing to assemble human\-sized genomes on a high\-cpu cluster in under a day. The process pipeline implements a highly transparent and portable model of job control and monitoring where different assembly stages can be executed and re\-executed separately or in unison on a wide variety of architectures.


   :homepage: https://jgi.doe.gov/data-and-tools/meraculous/
   :license: GPLv3
   :recipe: /`meraculous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0023501`

   


.. conda:package:: meraculous

   |downloads_meraculous| |docker_meraculous|

   :versions:
      
      

      ``2.2.6-3``,  ``2.2.6-2``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5.1.1.ga103cd6-0``,  ``2.2.5-0``,  ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends gnuplot: ``>=3.7``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgd: ``>=2.0``
   :depends libgd: ``>=2.3.3,<2.4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-log-log4perl: ``>=1.31``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meraculous

   and update with::

      conda update meraculous

   or use the docker container::

      docker pull quay.io/biocontainers/meraculous:<tag>

   (see `meraculous/tags`_ for valid values for ``<tag>``)


.. |downloads_meraculous| image:: https://img.shields.io/conda/dn/bioconda/meraculous.svg?style=flat
   :target: https://anaconda.org/bioconda/meraculous
   :alt:   (downloads)
.. |docker_meraculous| image:: https://quay.io/repository/biocontainers/meraculous/status
   :target: https://quay.io/repository/biocontainers/meraculous
.. _`meraculous/tags`: https://quay.io/repository/biocontainers/meraculous?tab=tags


.. raw:: html

    <script>
        var package = "meraculous";
        var versions = ["2.2.6","2.2.6","2.2.6","2.2.6","2.2.5.1.1.ga103cd6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meraculous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meraculous/README.html