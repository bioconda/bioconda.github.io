:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secedo'
.. highlight: bash

secedo
======

.. conda:recipe:: secedo
   :replaces_section_title:
   :noindex:

   SNV\-based clustering for single\-cell sequencing data.

   :homepage: https://github.com/ratschlab/secedo
   :license: MIT / MIT
   :recipe: /`secedo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo/meta.yaml>`_
   :links: biotools: :biotools:`secedo`

   


.. conda:package:: secedo

   |downloads_secedo| |docker_secedo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-4</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.7-4``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on arpack: ``>=3.9.1,<3.10.0a0 nompi_*``
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on jsoncpp: ``>=1.9.6,<1.9.7.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openblas: 

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

    pixi global install secedo

to add into an existing workspace instead, run::

    pixi add secedo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install secedo

Alternatively, to install into a new environment, run::

    conda create -n envname secedo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/secedo:<tag>

(see `secedo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_secedo| image:: https://img.shields.io/conda/dn/bioconda/secedo.svg?style=flat
   :target: https://anaconda.org/bioconda/secedo
   :alt:   (downloads)
.. |docker_secedo| image:: https://quay.io/repository/biocontainers/secedo/status
   :target: https://quay.io/repository/biocontainers/secedo
.. _`secedo/tags`: https://quay.io/repository/biocontainers/secedo?tab=tags


.. raw:: html

    <script>
        var package = "secedo";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secedo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secedo/README.html