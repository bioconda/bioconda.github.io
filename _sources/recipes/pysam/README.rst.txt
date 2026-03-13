:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysam'
.. highlight: bash

pysam
=====

.. conda:recipe:: pysam
   :replaces_section_title:
   :noindex:

   Pysam is a Python module for reading and manipulating SAM\/BAM\/VCF\/BCF files. It\'s a lightweight wrapper of the htslib C\-API\, the same one that powers samtools\, bcftools\, and tabix.

   :homepage: https://github.com/pysam-developers/pysam
   :license: MIT
   :recipe: /`pysam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam/meta.yaml>`_
   :links: biotools: :biotools:`pysam`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: pysam

   |downloads_pysam| |docker_pysam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.23.3-2</code>,  <code>0.23.3-1</code>,  <code>0.23.3-0</code>,  <code>0.23.2-0</code>,  <code>0.23.1-0</code>,  <code>0.23.0-0</code>,  <code>0.22.1-3</code>,  <code>0.22.1-2</code>,  <code>0.22.1-1</code>,  </span></summary>
      

      ``0.23.3-2``,  ``0.23.3-1``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.1-3``,  ``0.22.1-2``,  ``0.22.1-1``,  ``0.22.1-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.21.0-1``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.1-1``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.0.1-3``,  ``0.16.0.1-2``,  ``0.16.0.1-1``,  ``0.16.0.1-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.4-1``,  ``0.15.4-0``,  ``0.15.3-3``,  ``0.15.3-1``,  ``0.15.3-0``,  ``0.15.2-11``,  ``0.15.2-10``,  ``0.15.2-9``,  ``0.15.2-8``,  ``0.15.2-7``,  ``0.15.2-6``,  ``0.15.2-5``,  ``0.15.2-4``,  ``0.15.2-3``,  ``0.15.2-2``,  ``0.15.2-1``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0.1-1``,  ``0.15.0.1-0``,  ``0.15.0-0``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0.1-2``,  ``0.12.0.1-1``,  ``0.12.0.1-0``,  ``0.11.2.2-2``,  ``0.11.2.2-1``,  ``0.11.2.2-0``,  ``0.11.2.1-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-13``,  ``0.10.0-12``,  ``0.10.0-11``,  ``0.10.0-10``,  ``0.10.0-9``,  ``0.10.0-8``,  ``0.10.0-7``,  ``0.10.0-6``,  ``0.10.0-5``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-1``,  ``0.9.1.4-1``,  ``0.9.1.4-0``,  ``0.9.1-12``,  ``0.9.1-11``,  ``0.9.1-10``,  ``0.9.1-9``,  ``0.9.1-8``,  ``0.9.1-7``,  ``0.9.1-6``,  ``0.9.1-5``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.4pre0-0``,  ``0.8.3-9``,  ``0.8.3-8``,  ``0.8.3-7``,  ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.7.7-6``,  ``0.7.7-5``,  ``0.7.7-4``,  ``0.7.7-3``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install pysam

to add into an existing workspace instead, run::

    pixi add pysam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pysam

Alternatively, to install into a new environment, run::

    conda create -n envname pysam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pysam:<tag>

(see `pysam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pysam| image:: https://img.shields.io/conda/dn/bioconda/pysam.svg?style=flat
   :target: https://anaconda.org/bioconda/pysam
   :alt:   (downloads)
.. |docker_pysam| image:: https://quay.io/repository/biocontainers/pysam/status
   :target: https://quay.io/repository/biocontainers/pysam
.. _`pysam/tags`: https://quay.io/repository/biocontainers/pysam?tab=tags


.. raw:: html

    <script>
        var package = "pysam";
        var versions = ["0.23.3","0.23.3","0.23.3","0.23.2","0.23.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysam/README.html