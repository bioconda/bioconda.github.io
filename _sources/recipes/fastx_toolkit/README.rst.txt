:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastx_toolkit'
.. highlight: bash

fastx_toolkit
=============

.. conda:recipe:: fastx_toolkit
   :replaces_section_title:
   :noindex:

   The FASTX\-Toolkit is a collection of command line tools for
   Short\-Reads FASTA\/FASTQ files preprocessing.

   Next\-Generation sequencing machines usually produce FASTA or FASTQ files\,
   containing multiple short\-reads sequences \(possibly with quality
   information\).

   The main processing of such FASTA\/FASTQ files is mapping \(aka aligning\) the
   sequences to reference genomes or other databases using specialized
   programs. Example of such mapping programs are\: Blat\, SHRiMP\, LastZ\, MAQ
   and many many others

   However\, it is sometimes more productive to preprocess the FASTA\/FASTQ files
   before mapping the sequences to the genome \- manipulating the sequences to
   produce better mapping results.

   The FASTX\-Toolkit tools perform some of these preprocessing tasks.\'


   :homepage: https://github.com/agordon/fastx_toolkit
   :license: AGPL
   :recipe: /`fastx_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit/meta.yaml>`_

   


.. conda:package:: fastx_toolkit

   |downloads_fastx_toolkit| |docker_fastx_toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.14-11</code>,  <code>0.0.14-10</code>,  <code>0.0.14-9</code>,  <code>0.0.14-8</code>,  <code>0.0.14-7</code>,  <code>0.0.14-6</code>,  <code>0.0.14-5</code>,  <code>0.0.14-4</code>,  <code>0.0.14-3</code>,  </span></summary>
      

      ``0.0.14-11``,  ``0.0.14-10``,  ``0.0.14-9``,  ``0.0.14-8``,  ``0.0.14-7``,  ``0.0.14-6``,  ``0.0.14-5``,  ``0.0.14-4``,  ``0.0.14-3``,  ``0.0.14-2``,  ``0.0.14-1``,  ``0.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends gnuplot: ``>=5.0.5``
   :depends libgcc-ng: ``>=12``
   :depends libgtextutils: ``>=0.7,<0.8.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends perl-gd: 
   :depends perl-gdgraph-histogram: 
   :depends perl-perlio-gzip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastx_toolkit

   and update with::

      conda update fastx_toolkit

   or use the docker container::

      docker pull quay.io/biocontainers/fastx_toolkit:<tag>

   (see `fastx_toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_fastx_toolkit| image:: https://img.shields.io/conda/dn/bioconda/fastx_toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/fastx_toolkit
   :alt:   (downloads)
.. |docker_fastx_toolkit| image:: https://quay.io/repository/biocontainers/fastx_toolkit/status
   :target: https://quay.io/repository/biocontainers/fastx_toolkit
.. _`fastx_toolkit/tags`: https://quay.io/repository/biocontainers/fastx_toolkit?tab=tags


.. raw:: html

    <script>
        var package = "fastx_toolkit";
        var versions = ["0.0.14","0.0.14","0.0.14","0.0.14","0.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastx_toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastx_toolkit/README.html