:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'janusx'
.. highlight: bash

janusx
======

.. conda:recipe:: janusx
   :replaces_section_title:
   :noindex:

   GWAS and genomic selection toolkit with Rust\-accelerated kernels.

   :homepage: https://github.com/FJingxian/JanusX
   :documentation: https://github.com/FJingxian/JanusX/tree/v1.0.20/doc
   
   :license: AGPL-3.0-or-later
   :recipe: /`janusx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/janusx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/janusx/meta.yaml>`_
   :links: doi: :doi:`10.64898/2026.01.20.700366`

   JanusX is a high\-performance toolkit for genome\-wide association studies
   \(GWAS\)\, genomic selection \(GS\)\, and post\-analysis visualization.

   This Bioconda recipe packages the Python\+Rust core and provides the \`jxpy\`
   command entrypoint. Launcher\-specific features \(\`jx\`\, self\-update\/runtime
   management\, \`fastq2vcf\`\, and \`fastq2count\`\) are intentionally excluded
   from this package scope.



.. conda:package:: janusx

   |downloads_janusx| |docker_janusx|

   :versions:
      
      

      ``1.0.20-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on joblib: ``>=1.5``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on pandas: ``<3.0``
   :depends on psutil: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rich: 
   :depends on rich-argparse: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on xgboost: 

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

    pixi global install janusx

to add into an existing workspace instead, run::

    pixi add janusx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install janusx

Alternatively, to install into a new environment, run::

    conda create -n envname janusx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/janusx:<tag>

(see `janusx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_janusx| image:: https://img.shields.io/conda/dn/bioconda/janusx.svg?style=flat
   :target: https://anaconda.org/bioconda/janusx
   :alt:   (downloads)
.. |docker_janusx| image:: https://quay.io/repository/biocontainers/janusx/status
   :target: https://quay.io/repository/biocontainers/janusx
.. _`janusx/tags`: https://quay.io/repository/biocontainers/janusx?tab=tags


.. raw:: html

    <script>
        var package = "janusx";
        var versions = ["1.0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/janusx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/janusx/README.html