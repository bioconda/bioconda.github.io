:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smcpp'
.. highlight: bash

smcpp
=====

.. conda:recipe:: smcpp
   :replaces_section_title:
   :noindex:

   SMC\+\+ infers population history from whole\-genome sequence data.

   :homepage: https://github.com/popgenmethods/smcpp
   :license: BSD
   :recipe: /`smcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcpp/meta.yaml>`_

   


.. conda:package:: smcpp

   |downloads_smcpp| |docker_smcpp|

   :versions:
      
      

      ``1.15.4-0``

      

   
   :depends on appdirs: 
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on gnuplot: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: ``>=3,<3.6``
   :depends on mpfr: ``<4.2``
   :depends on mpfr: ``>=4.1.0,<5.0a0``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: ``>=1.4``
   :depends on pysam: ``>=0.18``
   :depends on python: ``>=3.9,<3.10.0a0 *_cpython``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on scikit-learn: ``>=1``
   :depends on scipy: ``>=1.8``
   :depends on seaborn: 
   :depends on setuptools_scm: 
   :depends on tqdm: 

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

    pixi global install smcpp

to add into an existing workspace instead, run::

    pixi add smcpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smcpp

Alternatively, to install into a new environment, run::

    conda create -n envname smcpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smcpp:<tag>

(see `smcpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smcpp| image:: https://img.shields.io/conda/dn/bioconda/smcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/smcpp
   :alt:   (downloads)
.. |docker_smcpp| image:: https://quay.io/repository/biocontainers/smcpp/status
   :target: https://quay.io/repository/biocontainers/smcpp
.. _`smcpp/tags`: https://quay.io/repository/biocontainers/smcpp?tab=tags


.. raw:: html

    <script>
        var package = "smcpp";
        var versions = ["1.15.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcpp/README.html