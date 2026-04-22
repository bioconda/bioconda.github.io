:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gembs'
.. highlight: bash

gembs
=====

.. conda:recipe:: gembs
   :replaces_section_title:
   :noindex:

   gemBS is a bioinformatics pipeline designed for high throughput analysis of DNA methylation from Whole Genome Bisulfite Sequencing data \(WGBS\).

   :homepage: https://github.com/heathsc/gemBS
   :license: GPL-3.0
   :recipe: /`gembs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: gembs

   |downloads_gembs| |docker_gembs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.5_IHEC-8</code>,  <code>3.5.5_IHEC-7</code>,  <code>3.5.5_IHEC-6</code>,  <code>3.5.5_IHEC-5</code>,  <code>3.5.5_IHEC-4</code>,  <code>3.5.5_IHEC-3</code>,  <code>3.5.5_IHEC-2</code>,  <code>3.5.5_IHEC-1</code>,  <code>3.5.5_IHEC-0</code>,  </span></summary>
      

      ``3.5.5_IHEC-8``,  ``3.5.5_IHEC-7``,  ``3.5.5_IHEC-6``,  ``3.5.5_IHEC-5``,  ``3.5.5_IHEC-4``,  ``3.5.5_IHEC-3``,  ``3.5.5_IHEC-2``,  ``3.5.5_IHEC-1``,  ``3.5.5_IHEC-0``,  ``3.5.1_IHEC-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on bs_call: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gem3-mapper: 
   :depends on htslib: ``>=1.20,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on matplotlib-base: 
   :depends on multiprocess: 
   :depends on openssl: ``>=3.3.1,<4.0a0``
   :depends on pigz: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 
   :depends on setuptools: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-wigtobigwig: 
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install gembs

to add into an existing workspace instead, run::

    pixi add gembs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gembs

Alternatively, to install into a new environment, run::

    conda create -n envname gembs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gembs:<tag>

(see `gembs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gembs| image:: https://img.shields.io/conda/dn/bioconda/gembs.svg?style=flat
   :target: https://anaconda.org/bioconda/gembs
   :alt:   (downloads)
.. |docker_gembs| image:: https://quay.io/repository/biocontainers/gembs/status
   :target: https://quay.io/repository/biocontainers/gembs
.. _`gembs/tags`: https://quay.io/repository/biocontainers/gembs?tab=tags


.. raw:: html

    <script>
        var package = "gembs";
        var versions = ["3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gembs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gembs/README.html