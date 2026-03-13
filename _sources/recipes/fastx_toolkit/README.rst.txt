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
      

   
   :depends on gnuplot: ``>=5.4.10``
   :depends on libgcc: ``>=13``
   :depends on libgtextutils: ``>=0.7,<0.8.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on perl-gd: 
   :depends on perl-gdgraph-histogram: 
   :depends on perl-perlio-gzip: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install fastx_toolkit

to add into an existing workspace instead, run::

    pixi add fastx_toolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastx_toolkit

Alternatively, to install into a new environment, run::

    conda create -n envname fastx_toolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastx_toolkit:<tag>

(see `fastx_toolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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