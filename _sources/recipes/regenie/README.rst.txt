:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regenie'
.. highlight: bash

regenie
=======

.. conda:recipe:: regenie
   :replaces_section_title:
   :noindex:

   Regenie is a C\+\+ program for whole genome regression modelling of large genome\-wide association studies \(GWAS\).

   :homepage: https://rgcgithub.github.io/regenie/
   :documentation: https://rgcgithub.github.io/regenie/options/
   
   :developer docs: https://github.com/rgcgithub/regenie
   :license: MIT / MIT
   :recipe: /`regenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie/meta.yaml>`_

   


.. conda:package:: regenie

   |downloads_regenie| |docker_regenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1-0</code>,  <code>4.0-2</code>,  <code>4.0-1</code>,  <code>4.0-0</code>,  <code>3.6-0</code>,  <code>3.5-0</code>,  <code>3.4.1-0</code>,  </span></summary>
      

      ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4.1-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2.9-0``,  ``3.2.7-0``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.5.2-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2.4-0``,  ``3.2.2.3-0``,  ``3.2.2.1-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``1.0.6.9-0``,  ``1.0.6.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: ``1.74.*``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on liblapack: ``>=3.9.0,<3.10.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on mkl: ``>=2020.4``
   :depends on sqlite: 
   :depends on zlib: 
   :depends on zstd: ``>=1.5.6,<1.6.0a0``

   :additional platforms:
      

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

    pixi global install regenie

to add into an existing workspace instead, run::

    pixi add regenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install regenie

Alternatively, to install into a new environment, run::

    conda create -n envname regenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/regenie:<tag>

(see `regenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_regenie| image:: https://img.shields.io/conda/dn/bioconda/regenie.svg?style=flat
   :target: https://anaconda.org/bioconda/regenie
   :alt:   (downloads)
.. |docker_regenie| image:: https://quay.io/repository/biocontainers/regenie/status
   :target: https://quay.io/repository/biocontainers/regenie
.. _`regenie/tags`: https://quay.io/repository/biocontainers/regenie?tab=tags


.. raw:: html

    <script>
        var package = "regenie";
        var versions = ["4.1.2","4.1.1","4.1","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regenie/README.html