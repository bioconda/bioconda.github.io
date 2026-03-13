:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools'
.. highlight: bash

bcftools
========

.. conda:recipe:: bcftools
   :replaces_section_title:
   :noindex:

   BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format \(VCF\) and its binary counterpart BCF. All commands work transparently with both VCFs and BCFs\, both uncompressed and BGZF\-compressed.  Most commands accept VCF\, bgzipped VCF and BCF with filetype detected automatically even when streaming from a pipe. Indexed VCF and BCF will work in all situations. Un\-indexed VCF and BCF and streams will work in most\, but not all situations.

   :homepage: https://github.com/samtools/bcftools
   :license: GPL
   :recipe: /`bcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools/meta.yaml>`_
   :links: biotools: :biotools:`bcftools`, usegalaxy-eu: :usegalaxy-eu:`bcftools_merge`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: bcftools

   |downloads_bcftools| |docker_bcftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23-0</code>,  <code>1.22-1</code>,  <code>1.22-0</code>,  <code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19-1</code>,  <code>1.19-0</code>,  </span></summary>
      

      ``1.23-0``,  ``1.22-1``,  ``1.22-0``,  ``1.21-1``,  ``1.21-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19-1``,  ``1.19-0``,  ``1.18-0``,  ``1.17-1``,  ``1.17-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-2``,  ``1.15-1``,  ``1.15-0``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``,  ``1.10.2-3``,  ``1.10.2-2``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10-0``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-9``,  ``1.3-8``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 

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

    pixi global install bcftools

to add into an existing workspace instead, run::

    pixi add bcftools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcftools

Alternatively, to install into a new environment, run::

    conda create -n envname bcftools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcftools:<tag>

(see `bcftools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcftools| image:: https://img.shields.io/conda/dn/bioconda/bcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools
   :alt:   (downloads)
.. |docker_bcftools| image:: https://quay.io/repository/biocontainers/bcftools/status
   :target: https://quay.io/repository/biocontainers/bcftools
.. _`bcftools/tags`: https://quay.io/repository/biocontainers/bcftools?tab=tags


.. raw:: html

    <script>
        var package = "bcftools";
        var versions = ["1.23","1.22","1.22","1.21","1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools/README.html