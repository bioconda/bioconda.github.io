:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrle'
.. highlight: bash

pyrle
=====

.. conda:recipe:: pyrle
   :replaces_section_title:
   :noindex:

   Genomic Rle\-objects for Python.

   :homepage: https://github.com/endrebak/pyrle
   :license: MIT / MIT
   :recipe: /`pyrle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle/meta.yaml>`_

   


.. conda:package:: pyrle

   |downloads_pyrle| |docker_pyrle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.43-0</code>,  <code>0.0.42-1</code>,  <code>0.0.42-0</code>,  <code>0.0.40-2</code>,  <code>0.0.40-1</code>,  <code>0.0.40-0</code>,  <code>0.0.39-1</code>,  <code>0.0.39-0</code>,  <code>0.0.38-3</code>,  </span></summary>
      

      ``0.0.43-0``,  ``0.0.42-1``,  ``0.0.42-0``,  ``0.0.40-2``,  ``0.0.40-1``,  ``0.0.40-0``,  ``0.0.39-1``,  ``0.0.39-0``,  ``0.0.38-3``,  ``0.0.38-0``,  ``0.0.36-3``,  ``0.0.36-1``,  ``0.0.36-0``,  ``0.0.35-1``,  ``0.0.35-0``,  ``0.0.34-1``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.32-1``,  ``0.0.32-0``,  ``0.0.31-1``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-1``,  ``0.0.24-0``,  ``0.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: 
   :depends on tabulate: 

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

    pixi global install pyrle

to add into an existing workspace instead, run::

    pixi add pyrle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyrle

Alternatively, to install into a new environment, run::

    conda create -n envname pyrle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyrle:<tag>

(see `pyrle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyrle| image:: https://img.shields.io/conda/dn/bioconda/pyrle.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrle
   :alt:   (downloads)
.. |docker_pyrle| image:: https://quay.io/repository/biocontainers/pyrle/status
   :target: https://quay.io/repository/biocontainers/pyrle
.. _`pyrle/tags`: https://quay.io/repository/biocontainers/pyrle?tab=tags


.. raw:: html

    <script>
        var package = "pyrle";
        var versions = ["0.0.43","0.0.42","0.0.42","0.0.40","0.0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrle/README.html