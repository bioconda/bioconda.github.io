:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloacc'
.. highlight: bash

phyloacc
========

.. conda:recipe:: phyloacc
   :replaces_section_title:
   :noindex:

   Bayesian estimation of substitution rate shifts in non\-coding regions

   :homepage: https://phyloacc.github.io/
   :documentation: https://phyloacc.github.io/readme.html
   
   :developer docs: https://github.com/phyloacc/PhyloAcc
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phyloacc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc/meta.yaml>`_

   Bayesian estimation of substitution rate shifts in non\-coding regions


.. conda:package:: phyloacc

   |downloads_phyloacc| |docker_phyloacc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.5-1</code>,  <code>2.4.5-0</code>,  <code>2.4.3-0</code>,  <code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.3-0``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on armadillo: ``>=15.2,<16.0a0``
   :depends on biopython: ``>=1.79``
   :depends on blis: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: ``>=3.5``
   :depends on mkl: 
   :depends on numpy: ``>=1.22``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on snakemake-executor-plugin-slurm: 
   :depends on snakemake-minimal: ``>=8.0``

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

    pixi global install phyloacc

to add into an existing workspace instead, run::

    pixi add phyloacc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyloacc

Alternatively, to install into a new environment, run::

    conda create -n envname phyloacc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyloacc:<tag>

(see `phyloacc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyloacc| image:: https://img.shields.io/conda/dn/bioconda/phyloacc.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloacc
   :alt:   (downloads)
.. |docker_phyloacc| image:: https://quay.io/repository/biocontainers/phyloacc/status
   :target: https://quay.io/repository/biocontainers/phyloacc
.. _`phyloacc/tags`: https://quay.io/repository/biocontainers/phyloacc?tab=tags


.. raw:: html

    <script>
        var package = "phyloacc";
        var versions = ["2.4.5","2.4.5","2.4.3","2.4.2","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloacc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloacc/README.html