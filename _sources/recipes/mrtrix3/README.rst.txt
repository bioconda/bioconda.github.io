:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrtrix3'
.. highlight: bash

mrtrix3
=======

.. conda:recipe:: mrtrix3
   :replaces_section_title:
   :noindex:

   A set of tools to perform various advanced diffusion MRI analyses\, including constrained spherical deconvolution \(CSD\)\, probabilistic tractography\, track\-density imaging\, and apparent fibre density

   :homepage: https://www.mrtrix.org
   :documentation: https://www.mrtrix.org/documentation/
   
   :developer docs: https://github.com/MRtrix3/mrtrix3
   :license: MOZILLA / MPL-2.0
   :recipe: /`mrtrix3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrtrix3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrtrix3/meta.yaml>`_

   


.. conda:package:: mrtrix3

   |downloads_mrtrix3| |docker_mrtrix3|

   :versions:
      
      

      ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.0``
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libtiff: ``>=4.0``
   :depends on libtiff: ``>=4.7.1,<4.8.0a0``
   :depends on libxcb: ``>=1.17.0,<2.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on qt: ``>=5.15``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install mrtrix3

to add into an existing workspace instead, run::

    pixi add mrtrix3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mrtrix3

Alternatively, to install into a new environment, run::

    conda create -n envname mrtrix3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mrtrix3:<tag>

(see `mrtrix3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mrtrix3| image:: https://img.shields.io/conda/dn/bioconda/mrtrix3.svg?style=flat
   :target: https://anaconda.org/bioconda/mrtrix3
   :alt:   (downloads)
.. |docker_mrtrix3| image:: https://quay.io/repository/biocontainers/mrtrix3/status
   :target: https://quay.io/repository/biocontainers/mrtrix3
.. _`mrtrix3/tags`: https://quay.io/repository/biocontainers/mrtrix3?tab=tags


.. raw:: html

    <script>
        var package = "mrtrix3";
        var versions = ["3.0.8","3.0.7","3.0.6","3.0.5","3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrtrix3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrtrix3/README.html