:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megapath'
.. highlight: bash

megapath
========

.. conda:recipe:: megapath
   :replaces_section_title:
   :noindex:

   MegaPath\: sensitive and rapid pathogen detection using metagenomic NGS data\; MegaPath\-Amplicon\: filtering module for metagenomic amplicon data

   :homepage: https://github.com/HKU-BAL/MegaPath
   :license: BSD-3-Clause
   :recipe: /`megapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath/meta.yaml>`_

   


.. conda:package:: megapath

   |downloads_megapath| |docker_megapath|

   :versions:
      
      

      ``2-0``,  ``1.0-0``

      

   
   :depends bedtools: 
   :depends bwa: ``0.7.12.*``
   :depends gatk4: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends megahit: ``1.1.3.*``
   :depends minimap2: 
   :depends pandas: 
   :depends parallel: ``20191122.*``
   :depends pypy3.6: 
   :depends pysam: ``0.16.0.1.*``
   :depends python: ``3.6.10.*``
   :depends samtools: ``1.10.*``
   :depends seqtk: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megapath

   and update with::

      conda update megapath

   or use the docker container::

      docker pull quay.io/biocontainers/megapath:<tag>

   (see `megapath/tags`_ for valid values for ``<tag>``)


.. |downloads_megapath| image:: https://img.shields.io/conda/dn/bioconda/megapath.svg?style=flat
   :target: https://anaconda.org/bioconda/megapath
   :alt:   (downloads)
.. |docker_megapath| image:: https://quay.io/repository/biocontainers/megapath/status
   :target: https://quay.io/repository/biocontainers/megapath
.. _`megapath/tags`: https://quay.io/repository/biocontainers/megapath?tab=tags


.. raw:: html

    <script>
        var package = "megapath";
        var versions = ["2","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megapath/README.html