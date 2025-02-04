:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastx_toolkit'
.. highlight: bash

fastx_toolkit
=============

.. conda:recipe:: fastx_toolkit
   :replaces_section_title:
   :noindex:

   \'The FASTX\-Toolkit is a collection of command line tools for
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
   :documentation: https://github.com/agordon/fastx_toolkit/blob/0.0.14/README
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`fastx_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit/meta.yaml>`_

   


.. conda:package:: fastx_toolkit

   |downloads_fastx_toolkit| |docker_fastx_toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.14-13</code>,  <code>0.0.14-12</code>,  <code>0.0.14-11</code>,  <code>0.0.14-10</code>,  <code>0.0.14-9</code>,  <code>0.0.14-8</code>,  <code>0.0.14-7</code>,  <code>0.0.14-6</code>,  <code>0.0.14-5</code>,  </span></summary>
      

      ``0.0.14-13``,  ``0.0.14-12``,  ``0.0.14-11``,  ``0.0.14-10``,  ``0.0.14-9``,  ``0.0.14-8``,  ``0.0.14-7``,  ``0.0.14-6``,  ``0.0.14-5``,  ``0.0.14-4``,  ``0.0.14-3``,  ``0.0.14-2``,  ``0.0.14-1``,  ``0.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends gnuplot: ``>=5.4.10``
   :depends libgcc: ``>=13``
   :depends libgtextutils: ``>=0.7,<0.8.0a0``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends perl-gd: 
   :depends perl-gdgraph-histogram: 
   :depends perl-perlio-gzip: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fastx_toolkit

   and update with::

      mamba update fastx_toolkit

  To create a new environment, run::

      mamba create --name myenvname fastx_toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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