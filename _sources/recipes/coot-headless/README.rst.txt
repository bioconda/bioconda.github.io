:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coot-headless'
.. highlight: bash

coot-headless
=============

.. conda:recipe:: coot-headless
   :replaces_section_title:
   :noindex:

   Coot Headless API \- Software for macromolecular model building.

   :homepage: https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot
   :documentation: https://www.mrc-lmb.cam.ac.uk/lucrezia/libcootapi-documentation/index.html
   
   :developer docs: https://github.com/pemsley/coot
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`coot-headless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444910007493`

   Coot is a macromolecular model building\, model completion and validation
   application. This package provides the headless APIs \(Chapi python bindings and libcootapi C\+\+ library\)
   without GUI dependencies\, suitable for automated workflows.



.. conda:package:: coot-headless

   |downloads_coot-headless| |docker_coot-headless|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.20-1</code>,  <code>1.1.20-0</code>,  <code>1.1.19-0</code>,  <code>1.1.18-3</code>,  <code>1.1.18-2</code>,  <code>1.1.18-1</code>,  <code>1.1.18-0</code>,  <code>1.1.17-3</code>,  <code>1.1.17-2</code>,  </span></summary>
      

      ``1.1.20-1``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.18-3``,  ``1.1.18-2``,  ``1.1.18-1``,  ``1.1.18-0``,  ``1.1.17-3``,  ``1.1.17-2``,  ``1.1.17-1``,  ``1.1.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cairo: ``>=1.18.4,<2.0a0``
   :depends on clipper: ``>=2.1.20180802,<3.0a0``
   :depends on elfutils: ``>=0.191,<0.192.0a0``
   :depends on fontconfig: ``>=2.15.0,<3.0a0``
   :depends on fonts-conda-ecosystem: 
   :depends on gemmi: ``>=0.7.4,<0.7.5.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libffi: ``>=3.4.6,<3.5.0a0``
   :depends on libfreetype: ``>=2.14.1``
   :depends on libfreetype6: ``>=2.14.1``
   :depends on libgcc: ``>=13``
   :depends on libpng: ``>=1.6.54,<1.7.0a0``
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libxml2: ``>=2.13.9,<2.14.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``
   :depends on numpy: ``1.26.*``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on pixman: ``>=0.46.4,<1.0a0``
   :depends on python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rdkit: 
   :depends on servalcat: 
   :depends on ssm: ``>=1.4,<2.0a0``

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

    pixi global install coot-headless

to add into an existing workspace instead, run::

    pixi add coot-headless

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coot-headless

Alternatively, to install into a new environment, run::

    conda create -n envname coot-headless

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coot-headless:<tag>

(see `coot-headless/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coot-headless| image:: https://img.shields.io/conda/dn/bioconda/coot-headless.svg?style=flat
   :target: https://anaconda.org/bioconda/coot-headless
   :alt:   (downloads)
.. |docker_coot-headless| image:: https://quay.io/repository/biocontainers/coot-headless/status
   :target: https://quay.io/repository/biocontainers/coot-headless
.. _`coot-headless/tags`: https://quay.io/repository/biocontainers/coot-headless?tab=tags


.. raw:: html

    <script>
        var package = "coot-headless";
        var versions = ["1.1.20","1.1.20","1.1.19","1.1.18","1.1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coot-headless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coot-headless/README.html