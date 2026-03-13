:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooltools'
.. highlight: bash

cooltools
=========

.. conda:recipe:: cooltools
   :replaces_section_title:
   :noindex:

   Analysis tools for genomic interaction data stored in .cool format

   :homepage: https://github.com/open2c/cooltools
   :documentation: https://cooltools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`cooltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools/meta.yaml>`_

   


.. conda:package:: cooltools

   |downloads_cooltools| |docker_cooltools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-3</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-3``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.2-5``,  ``0.3.2-4``,  ``0.3.2-3``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioframe: ``>=0.4.1``
   :depends on click: ``>=7``
   :depends on cooler: ``>=0.9.1``
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on multiprocess: 
   :depends on numba: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: ``>=1.5.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: 
   :depends on scikit-learn: ``>=1.1.2``
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

    pixi global install cooltools

to add into an existing workspace instead, run::

    pixi add cooltools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cooltools

Alternatively, to install into a new environment, run::

    conda create -n envname cooltools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cooltools:<tag>

(see `cooltools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cooltools| image:: https://img.shields.io/conda/dn/bioconda/cooltools.svg?style=flat
   :target: https://anaconda.org/bioconda/cooltools
   :alt:   (downloads)
.. |docker_cooltools| image:: https://quay.io/repository/biocontainers/cooltools/status
   :target: https://quay.io/repository/biocontainers/cooltools
.. _`cooltools/tags`: https://quay.io/repository/biocontainers/cooltools?tab=tags


.. raw:: html

    <script>
        var package = "cooltools";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooltools/README.html