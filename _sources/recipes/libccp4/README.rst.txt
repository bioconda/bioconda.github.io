:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libccp4'
.. highlight: bash

libccp4
=======

.. conda:recipe:: libccp4
   :replaces_section_title:
   :noindex:

   Protein X\-ray crystallography toolkit.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`libccp4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libccp4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libccp4/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444994003112`

   CCP4 library provides an interface to the Collaborative Computational
   Project Number 4 \(CCP4\) suite of programs.



.. conda:package:: libccp4

   |downloads_libccp4| |docker_libccp4|

   :versions:
      
      

      ``8.0.0-1``,  ``8.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``
   :depends on pkg-config: 

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

    pixi global install libccp4

to add into an existing workspace instead, run::

    pixi add libccp4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libccp4

Alternatively, to install into a new environment, run::

    conda create -n envname libccp4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libccp4:<tag>

(see `libccp4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libccp4| image:: https://img.shields.io/conda/dn/bioconda/libccp4.svg?style=flat
   :target: https://anaconda.org/bioconda/libccp4
   :alt:   (downloads)
.. |docker_libccp4| image:: https://quay.io/repository/biocontainers/libccp4/status
   :target: https://quay.io/repository/biocontainers/libccp4
.. _`libccp4/tags`: https://quay.io/repository/biocontainers/libccp4?tab=tags


.. raw:: html

    <script>
        var package = "libccp4";
        var versions = ["8.0.0","8.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libccp4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libccp4/README.html