:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cas-offinder'
.. highlight: bash

cas-offinder
============

.. conda:recipe:: cas-offinder
   :replaces_section_title:
   :noindex:

   Cas\-OFFinder is OpenCL based\, ultrafast and versatile program that searches for potential off\-target sites of CRISPR\/Cas\-derived RNA\-guided endonucleases \(RGEN\).

   :homepage: https://github.com/snugel/cas-offinder
   :documentation: https://github.com/snugel/cas-offinder/blob/2.4.1/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cas-offinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu048`, biotools: :biotools:`cas-offinder`

   


.. conda:package:: cas-offinder

   |downloads_cas-offinder| |docker_cas-offinder|

   :versions:
      
      

      ``2.4.1-0``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libopencl-devel: 
   :depends on libstdcxx: ``>=13``
   :depends on ocl-icd: ``>=2.3.3,<3.0a0``
   :depends on opencl-headers: 
   :depends on pocl: 

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

    pixi global install cas-offinder

to add into an existing workspace instead, run::

    pixi add cas-offinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cas-offinder

Alternatively, to install into a new environment, run::

    conda create -n envname cas-offinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cas-offinder:<tag>

(see `cas-offinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cas-offinder| image:: https://img.shields.io/conda/dn/bioconda/cas-offinder.svg?style=flat
   :target: https://anaconda.org/bioconda/cas-offinder
   :alt:   (downloads)
.. |docker_cas-offinder| image:: https://quay.io/repository/biocontainers/cas-offinder/status
   :target: https://quay.io/repository/biocontainers/cas-offinder
.. _`cas-offinder/tags`: https://quay.io/repository/biocontainers/cas-offinder?tab=tags


.. raw:: html

    <script>
        var package = "cas-offinder";
        var versions = ["2.4.1","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cas-offinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cas-offinder/README.html