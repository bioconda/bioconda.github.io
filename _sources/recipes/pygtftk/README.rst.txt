:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygtftk'
.. highlight: bash

pygtftk
=======

.. conda:recipe:: pygtftk
   :replaces_section_title:
   :noindex:

   The gtftk suite providing facilities to manipulate genomic annotations in gtf format.

   :homepage: http://github.com/dputhier/pygtftk
   :license: MIT / MIT
   :recipe: /`pygtftk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk/meta.yaml>`_

   


.. conda:package:: pygtftk

   |downloads_pygtftk| |docker_pygtftk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.2-5</code>,  <code>1.6.2-4</code>,  <code>1.6.2-3</code>,  <code>1.6.2-2</code>,  <code>1.6.2-1</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.3-1</code>,  </span></summary>
      

      ``1.6.2-5``,  ``1.6.2-4``,  ``1.6.2-3``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.23.1``
   :depends on billiard: ``>=3.6.4.0``
   :depends on biopython: ``>=1.69``
   :depends on cffi: ``>=1.10.0``
   :depends on cloudpickle: ``>=0.4.0``
   :depends on ftputil: ``>=3.3.1,<4.0.0``
   :depends on future: 
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=2.0.2``
   :depends on mpmath: ``>=1.1.0``
   :depends on nose: 
   :depends on numpy: ``>=1.15.3``
   :depends on numpy: ``>=1.19,<3``
   :depends on pandas: ``>=0.23.3``
   :depends on plotnine: ``>=0.4.0``
   :depends on pybedtools: ``>=0.7.8``
   :depends on pybigwig: ``>=0.3.12``
   :depends on pyparsing: ``>=2.2.0``
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python-graphviz: 
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on pyyaml: ``>=3.12``
   :depends on requests: ``>=2.13.0``
   :depends on scikit-learn: ``>=0.21.2,<1``
   :depends on scipy: ``>=1.1.0``
   :depends on seaborn-base: 

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

    pixi global install pygtftk

to add into an existing workspace instead, run::

    pixi add pygtftk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygtftk

Alternatively, to install into a new environment, run::

    conda create -n envname pygtftk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygtftk:<tag>

(see `pygtftk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygtftk| image:: https://img.shields.io/conda/dn/bioconda/pygtftk.svg?style=flat
   :target: https://anaconda.org/bioconda/pygtftk
   :alt:   (downloads)
.. |docker_pygtftk| image:: https://quay.io/repository/biocontainers/pygtftk/status
   :target: https://quay.io/repository/biocontainers/pygtftk
.. _`pygtftk/tags`: https://quay.io/repository/biocontainers/pygtftk?tab=tags


.. raw:: html

    <script>
        var package = "pygtftk";
        var versions = ["1.6.2","1.6.2","1.6.2","1.6.2","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygtftk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygtftk/README.html