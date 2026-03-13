:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yacht'
.. highlight: bash

yacht
=====

.. conda:recipe:: yacht
   :replaces_section_title:
   :noindex:

   YACHT is a mathematically rigorous hypothesis test for the presence or absence of organisms in a metagenomic sample\, based on average nucleotide identity \(ANI\).

   :homepage: https://github.com/KoslickiLab/YACHT
   :documentation: https://github.com/KoslickiLab/YACHT/wiki
   
   :license: MIT / MIT
   :recipe: /`yacht <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacht>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacht/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae047`

   


.. conda:package:: yacht

   |downloads_yacht| |docker_yacht|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0-0``

      

   
   :depends on biom-format: 
   :depends on codecov: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on loguru: 
   :depends on maturin: ``>=1,<2``
   :depends on numpy: ``>=1.22.4``
   :depends on numpy: ``>=1.23,<3``
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pytaxonkit: ``>=0.10,<0.11.0a0``
   :depends on pytest: 
   :depends on pytest-cov: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on requests: 
   :depends on ruff: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on sourmash: ``>=4.8.3,<5``
   :depends on sourmash: ``>=4.9.4,<5.0a0``
   :depends on sourmash_plugin_branchwater: 
   :depends on tqdm: 

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

    pixi global install yacht

to add into an existing workspace instead, run::

    pixi add yacht

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yacht

Alternatively, to install into a new environment, run::

    conda create -n envname yacht

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yacht:<tag>

(see `yacht/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yacht| image:: https://img.shields.io/conda/dn/bioconda/yacht.svg?style=flat
   :target: https://anaconda.org/bioconda/yacht
   :alt:   (downloads)
.. |docker_yacht| image:: https://quay.io/repository/biocontainers/yacht/status
   :target: https://quay.io/repository/biocontainers/yacht
.. _`yacht/tags`: https://quay.io/repository/biocontainers/yacht?tab=tags


.. raw:: html

    <script>
        var package = "yacht";
        var versions = ["1.3.2","1.3.1","1.3.0","1.3.0","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yacht/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yacht/README.html