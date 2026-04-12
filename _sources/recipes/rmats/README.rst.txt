:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats'
.. highlight: bash

rmats
=====

.. conda:recipe:: rmats
   :replaces_section_title:
   :noindex:

   MATS is a computational tool to detect differential alternative splicing events from RNA\-Seq data.

   :homepage: http://rnaseq-mats.sourceforge.net
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`rmats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats/meta.yaml>`_

   


.. conda:package:: rmats

   |downloads_rmats| |docker_rmats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-5</code>,  <code>4.3.0-4</code>,  <code>4.3.0-3</code>,  <code>4.3.0-2</code>,  <code>4.3.0-1</code>,  <code>4.3.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.2-5</code>,  <code>4.1.2-4</code>,  </span></summary>
      

      ``4.3.0-5``,  ``4.3.0-4``,  ``4.3.0-3``,  ``4.3.0-2``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.2-5``,  ``4.1.2-4``,  ``4.1.2-3``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-4``,  ``4.1.0-3``,  ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.2-4``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``4.0.2-0``,  ``3.2.5-2``,  ``3.2.5-1``,  ``3.2.5-0``,  ``3.2.2beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on star: ``>=2.5``
   :depends on zlib: 

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

    pixi global install rmats

to add into an existing workspace instead, run::

    pixi add rmats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmats

Alternatively, to install into a new environment, run::

    conda create -n envname rmats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmats:<tag>

(see `rmats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmats| image:: https://img.shields.io/conda/dn/bioconda/rmats.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats
   :alt:   (downloads)
.. |docker_rmats| image:: https://quay.io/repository/biocontainers/rmats/status
   :target: https://quay.io/repository/biocontainers/rmats
.. _`rmats/tags`: https://quay.io/repository/biocontainers/rmats?tab=tags


.. raw:: html

    <script>
        var package = "rmats";
        var versions = ["4.3.0","4.3.0","4.3.0","4.3.0","4.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats/README.html