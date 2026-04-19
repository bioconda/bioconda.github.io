:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quatradis'
.. highlight: bash

quatradis
=========

.. conda:recipe:: quatradis
   :replaces_section_title:
   :noindex:

   A set of tools to analyse the output from TraDIS analyses.

   :homepage: https://github.com/quadram-institute-bioscience/QuaTradis
   :license: GPL3 / GPL-3.0-only
   :recipe: /`quatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw022`

   


.. conda:package:: quatradis

   |downloads_quatradis| |docker_quatradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.5.4-0``,  ``0.4.9-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bwa: 
   :depends on cython: 
   :depends on dendropy: ``4.6``
   :depends on htslib: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: ``>=0.18.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-graphviz: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: 
   :depends on r-getopt: 
   :depends on r-mass: 
   :depends on samtools: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on setuptools: 
   :depends on smalt: 
   :depends on snakemake-minimal: 
   :depends on snakeviz: 

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

    pixi global install quatradis

to add into an existing workspace instead, run::

    pixi add quatradis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quatradis

Alternatively, to install into a new environment, run::

    conda create -n envname quatradis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quatradis:<tag>

(see `quatradis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quatradis| image:: https://img.shields.io/conda/dn/bioconda/quatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/quatradis
   :alt:   (downloads)
.. |docker_quatradis| image:: https://quay.io/repository/biocontainers/quatradis/status
   :target: https://quay.io/repository/biocontainers/quatradis
.. _`quatradis/tags`: https://quay.io/repository/biocontainers/quatradis?tab=tags


.. raw:: html

    <script>
        var package = "quatradis";
        var versions = ["1.4.0","1.4.0","1.3.3","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quatradis/README.html