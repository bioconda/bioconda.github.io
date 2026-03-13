:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmcif'
.. highlight: bash

mmcif
=====

.. conda:recipe:: mmcif
   :replaces_section_title:
   :noindex:

   mmCIF Core Access Library

   :homepage: https://rcsb.github.io/py-mmcif
   :developer docs: https://github.com/rcsb/py-mmcif
   :license: BSD-3-Clause AND Apache-2.0
   :recipe: /`mmcif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmcif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmcif/meta.yaml>`_

   This module includes a native Python mmCIF API for data files
   and dictionaries along with pybind11 wrappers for the PDB C\+\+ Core mmCIF Library.



.. conda:package:: mmcif

   |downloads_mmcif| |docker_mmcif|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.92.0-1``,  ``0.92.0-0``,  ``0.91.0-0``

      

   
   :depends on future: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on msgpack-python: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: ``>=2.25``
   :depends on six: 

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

    pixi global install mmcif

to add into an existing workspace instead, run::

    pixi add mmcif

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mmcif

Alternatively, to install into a new environment, run::

    conda create -n envname mmcif

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mmcif:<tag>

(see `mmcif/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mmcif| image:: https://img.shields.io/conda/dn/bioconda/mmcif.svg?style=flat
   :target: https://anaconda.org/bioconda/mmcif
   :alt:   (downloads)
.. |docker_mmcif| image:: https://quay.io/repository/biocontainers/mmcif/status
   :target: https://quay.io/repository/biocontainers/mmcif
.. _`mmcif/tags`: https://quay.io/repository/biocontainers/mmcif?tab=tags


.. raw:: html

    <script>
        var package = "mmcif";
        var versions = ["1.1.0","1.0.0","0.92.0","0.92.0","0.91.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmcif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmcif/README.html