:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrosome'
.. highlight: bash

centrosome
==========

.. conda:recipe:: centrosome
   :replaces_section_title:
   :noindex:

   An open source image processing library. Dependency for CellProfiler

   :homepage: https://github.com/CellProfiler/centrosome
   :license: BSD 3
   :recipe: /`centrosome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome/meta.yaml>`_

   


.. conda:package:: centrosome

   |downloads_centrosome| |docker_centrosome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.3-2</code>,  <code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deprecation: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pillow: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: 
   :depends on scipy: 

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

    pixi global install centrosome

to add into an existing workspace instead, run::

    pixi add centrosome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install centrosome

Alternatively, to install into a new environment, run::

    conda create -n envname centrosome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/centrosome:<tag>

(see `centrosome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_centrosome| image:: https://img.shields.io/conda/dn/bioconda/centrosome.svg?style=flat
   :target: https://anaconda.org/bioconda/centrosome
   :alt:   (downloads)
.. |docker_centrosome| image:: https://quay.io/repository/biocontainers/centrosome/status
   :target: https://quay.io/repository/biocontainers/centrosome
.. _`centrosome/tags`: https://quay.io/repository/biocontainers/centrosome?tab=tags


.. raw:: html

    <script>
        var package = "centrosome";
        var versions = ["1.3.3","1.3.2","1.3.1","1.3.0","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrosome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrosome/README.html