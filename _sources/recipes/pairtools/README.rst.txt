:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairtools'
.. highlight: bash

pairtools
=========

.. conda:recipe:: pairtools
   :replaces_section_title:
   :noindex:

   CLI tools to process mapped Hi\-C data.

   :homepage: https://github.com/open2c/pairtools
   :documentation: https://pairtools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pairtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.02.13.528389`, usegalaxy-eu: :usegalaxy-eu:`pairtools_dedup`, usegalaxy-eu: :usegalaxy-eu:`pairtools_parse`, usegalaxy-eu: :usegalaxy-eu:`pairtools_split`, usegalaxy-eu: :usegalaxy-eu:`pairtools_sort`, usegalaxy-eu: :usegalaxy-eu:`pairtools_stats`

   


.. conda:package:: pairtools

   |downloads_pairtools| |docker_pairtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-3</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioframe: ``>=0.3.3``
   :depends on click: 
   :depends on coreutils: 
   :depends on htslib: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on lz4-c: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: 
   :depends on pbgzip: 
   :depends on pysam: ``>=0.19``
   :depends on pysam: ``>=0.23.0,<0.24.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: 
   :depends on samtools: 
   :depends on scipy: ``>=1.7``

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

    pixi global install pairtools

to add into an existing workspace instead, run::

    pixi add pairtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pairtools

Alternatively, to install into a new environment, run::

    conda create -n envname pairtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pairtools:<tag>

(see `pairtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pairtools| image:: https://img.shields.io/conda/dn/bioconda/pairtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pairtools
   :alt:   (downloads)
.. |docker_pairtools| image:: https://quay.io/repository/biocontainers/pairtools/status
   :target: https://quay.io/repository/biocontainers/pairtools
.. _`pairtools/tags`: https://quay.io/repository/biocontainers/pairtools?tab=tags


.. raw:: html

    <script>
        var package = "pairtools";
        var versions = ["1.1.3","1.1.2","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairtools/README.html