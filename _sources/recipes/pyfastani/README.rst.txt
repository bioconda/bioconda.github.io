:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastani'
.. highlight: bash

pyfastani
=========

.. conda:recipe:: pyfastani
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to FastANI\, a method for fast whole\-genome similarity estimation.

   :homepage: https://github.com/althonos/pyfastani
   :documentation: https://pyfastani.readthedocs.org
   
   :license: MIT / MIT
   :recipe: /`pyfastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani/meta.yaml>`_

   


.. conda:package:: pyfastani

   |downloads_pyfastani| |docker_pyfastani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.1-3</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.1-3``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pyfastani

to add into an existing workspace instead, run::

    pixi add pyfastani

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyfastani

Alternatively, to install into a new environment, run::

    conda create -n envname pyfastani

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyfastani:<tag>

(see `pyfastani/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyfastani| image:: https://img.shields.io/conda/dn/bioconda/pyfastani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastani
   :alt:   (downloads)
.. |docker_pyfastani| image:: https://quay.io/repository/biocontainers/pyfastani/status
   :target: https://quay.io/repository/biocontainers/pyfastani
.. _`pyfastani/tags`: https://quay.io/repository/biocontainers/pyfastani?tab=tags


.. raw:: html

    <script>
        var package = "pyfastani";
        var versions = ["0.6.1","0.6.0","0.6.0","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastani/README.html