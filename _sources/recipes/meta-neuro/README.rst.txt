:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta-neuro'
.. highlight: bash

meta-neuro
==========

.. conda:recipe:: meta-neuro
   :replaces_section_title:
   :noindex:

   Medial Tractography Analysis \(MeTA\)

   :homepage: https://github.com/USC-LoBeS/meta
   :developer docs: https://github.com/bagari/meta
   :license: BSD-3-Clause
   :recipe: /`meta-neuro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-neuro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-neuro/meta.yaml>`_

   MeTA is a workflow implemented to minimize microstructural heterogeneity in diffusion MRI \(dMRI\) metrics by extracting and parcellating the core volume along the bundle length in the voxel\-space directly while effectively preserving bundle shape and efficiently capturing the regional variation within and along white matter \(WM\) bundles.



.. conda:package:: meta-neuro

   |downloads_meta-neuro| |docker_meta-neuro|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on dipy: 
   :depends on libgcc: ``>=13``
   :depends on libitk: ``>=5.4.4,<5.5.0a0``
   :depends on libitk-devel: ``>=5.4.0,<5.5.0``
   :depends on libstdcxx: ``>=13``
   :depends on libxml2: 
   :depends on libxml2-16: ``>=2.15.1``
   :depends on nibabel: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pip: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on pyvista: 
   :depends on qhull: 
   :depends on scipy: ``>=1.15.0``
   :depends on setuptools: 
   :depends on tqdm: 
   :depends on tslearn: 
   :depends on vtk: ``>=9.4.1,<9.6``
   :depends on vtk-base: ``>=9.5.2,<9.5.3.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install meta-neuro

to add into an existing workspace instead, run::

    pixi add meta-neuro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meta-neuro

Alternatively, to install into a new environment, run::

    conda create -n envname meta-neuro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meta-neuro:<tag>

(see `meta-neuro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meta-neuro| image:: https://img.shields.io/conda/dn/bioconda/meta-neuro.svg?style=flat
   :target: https://anaconda.org/bioconda/meta-neuro
   :alt:   (downloads)
.. |docker_meta-neuro| image:: https://quay.io/repository/biocontainers/meta-neuro/status
   :target: https://quay.io/repository/biocontainers/meta-neuro
.. _`meta-neuro/tags`: https://quay.io/repository/biocontainers/meta-neuro?tab=tags


.. raw:: html

    <script>
        var package = "meta-neuro";
        var versions = ["2.0.1","2.0.0","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-neuro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-neuro/README.html