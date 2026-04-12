:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openstructure'
.. highlight: bash

openstructure
=============

.. conda:recipe:: openstructure
   :replaces_section_title:
   :noindex:

   Open\-Source Computational Structural Biology Framework.

   :homepage: https://openstructure.org
   :documentation: https://openstructure.org/docs
   
   :developer docs: https://git.scicore.unibas.ch/schwede/openstructure
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`openstructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure/meta.yaml>`_
   :links: biotools: :biotools:`openstructure`, doi: :doi:`10.1107/S0907444913007051`

   This project aims to provide an open\-source\, modular\, flexible\, molecular modelling and visualization environment.
   It is targeted at interested method developers in the field of structural bioinformatics.



.. conda:package:: openstructure

   |downloads_openstructure| |docker_openstructure|

   :versions:
      
      

      ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-3``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.3-0``

      

   
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on glew: ``>=2.1.0,<2.2.0a0``
   :depends on glfw: ``>=3.4,<4.0a0``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libboost-python: ``>=1.86.0,<1.87.0a0``
   :depends on libegl: ``>=1.7.0,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libgl: ``>=1.7.0,<2.0a0``
   :depends on libgles: ``>=1.7.0,<2.0a0``
   :depends on libglvnd: ``>=1.7.0,<2.0a0``
   :depends on libglx: ``>=1.7.0,<2.0a0``
   :depends on libopengl: ``>=1.7.0,<2.0a0``
   :depends on libpng: ``>=1.6.50,<1.7.0a0``
   :depends on libsqlite: ``>=3.50.4,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libtiff: ``>=4.7.0,<4.8.0a0``
   :depends on libxcb: ``>=1.17.0,<2.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mesalib: ``>=25.0.5,<25.1.0a0``
   :depends on networkx: ``>=3.5,<4.0a0``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on ocl-icd: ``>=2.3.3,<3.0a0``
   :depends on ocl-icd-system: 
   :depends on openmm: ``>=8.3.1,<9.0a0``
   :depends on pandas: ``>=2.3.1,<3.0a0``
   :depends on parasail: ``>=2.6.2,<3.0a0``
   :depends on pyqt: ``>=5.15.11,<5.16.0a0``
   :depends on python: ``>=3.12,<3.13.0a0 *_cpython``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on qt: ``>=5.15.15,<5.16.0a0``
   :depends on scipy: ``>=1.13.1,<2.0a0``
   :depends on voronota: ``>=1.29.4415,<2.0a0``

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

    pixi global install openstructure

to add into an existing workspace instead, run::

    pixi add openstructure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openstructure

Alternatively, to install into a new environment, run::

    conda create -n envname openstructure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openstructure:<tag>

(see `openstructure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openstructure| image:: https://img.shields.io/conda/dn/bioconda/openstructure.svg?style=flat
   :target: https://anaconda.org/bioconda/openstructure
   :alt:   (downloads)
.. |docker_openstructure| image:: https://quay.io/repository/biocontainers/openstructure/status
   :target: https://quay.io/repository/biocontainers/openstructure
.. _`openstructure/tags`: https://quay.io/repository/biocontainers/openstructure?tab=tags


.. raw:: html

    <script>
        var package = "openstructure";
        var versions = ["2.11.1","2.11.0","2.11.0","2.10.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openstructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openstructure/README.html