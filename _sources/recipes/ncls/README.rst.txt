:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncls'
.. highlight: bash

ncls
====

.. conda:recipe:: ncls
   :replaces_section_title:
   :noindex:

   A fast interval tree\-like implementation in C\, wrapped for the Python ecosystem. Basically a static interval\-tree that is silly fast for both construction and lookups.

   :homepage: https://github.com/endrebak/ncls
   :license: BSD / BSD-3-Clause
   :recipe: /`ncls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls/meta.yaml>`_

   


.. conda:package:: ncls

   |downloads_ncls| |docker_ncls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.70-0</code>,  <code>0.0.68-5</code>,  <code>0.0.68-4</code>,  <code>0.0.68-3</code>,  <code>0.0.68-2</code>,  <code>0.0.68-1</code>,  <code>0.0.68-0</code>,  <code>0.0.66-3</code>,  <code>0.0.66-1</code>,  </span></summary>
      

      ``0.0.70-0``,  ``0.0.68-5``,  ``0.0.68-4``,  ``0.0.68-3``,  ``0.0.68-2``,  ``0.0.68-1``,  ``0.0.68-0``,  ``0.0.66-3``,  ``0.0.66-1``,  ``0.0.66-0``,  ``0.0.65-1``,  ``0.0.65-0``,  ``0.0.64-1``,  ``0.0.64-0``,  ``0.0.63-0``,  ``0.0.62-0``,  ``0.0.60-0``,  ``0.0.57-1``,  ``0.0.57-0``,  ``0.0.56-0``,  ``0.0.54-0``,  ``0.0.53-2``,  ``0.0.53-1``,  ``0.0.53-0``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.49-0``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.46-0``,  ``0.0.45-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.42-3``,  ``0.0.42-2``,  ``0.0.42-1``,  ``0.0.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: 

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

    pixi global install ncls

to add into an existing workspace instead, run::

    pixi add ncls

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncls

Alternatively, to install into a new environment, run::

    conda create -n envname ncls

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncls:<tag>

(see `ncls/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncls| image:: https://img.shields.io/conda/dn/bioconda/ncls.svg?style=flat
   :target: https://anaconda.org/bioconda/ncls
   :alt:   (downloads)
.. |docker_ncls| image:: https://quay.io/repository/biocontainers/ncls/status
   :target: https://quay.io/repository/biocontainers/ncls
.. _`ncls/tags`: https://quay.io/repository/biocontainers/ncls?tab=tags


.. raw:: html

    <script>
        var package = "ncls";
        var versions = ["0.0.70","0.0.68","0.0.68","0.0.68","0.0.68"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncls/README.html