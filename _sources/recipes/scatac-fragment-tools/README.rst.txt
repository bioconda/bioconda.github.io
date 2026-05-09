:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scatac-fragment-tools'
.. highlight: bash

scatac-fragment-tools
=====================

.. conda:recipe:: scatac-fragment-tools
   :replaces_section_title:
   :noindex:

   Tools for working with scATAC\-seq fragment files.

   :homepage: https://github.com/aertslab/scatac_fragment_tools/
   :documentation: https://aertslab.github.io/scatac_fragment_tools/
   
   :license: MIT
   :recipe: /`scatac-fragment-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scatac-fragment-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scatac-fragment-tools/meta.yaml>`_

   


.. conda:package:: scatac-fragment-tools

   |downloads_scatac-fragment-tools| |docker_scatac-fragment-tools|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on numba: 
   :depends on numpy: ``<2``
   :depends on polars: ``>=1.0.0``
   :depends on pyarrow: 
   :depends on pybigtools: ``>=0.2.0``
   :depends on pybigwig: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rich-argparse: 

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

    pixi global install scatac-fragment-tools

to add into an existing workspace instead, run::

    pixi add scatac-fragment-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scatac-fragment-tools

Alternatively, to install into a new environment, run::

    conda create -n envname scatac-fragment-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scatac-fragment-tools:<tag>

(see `scatac-fragment-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scatac-fragment-tools| image:: https://img.shields.io/conda/dn/bioconda/scatac-fragment-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/scatac-fragment-tools
   :alt:   (downloads)
.. |docker_scatac-fragment-tools| image:: https://quay.io/repository/biocontainers/scatac-fragment-tools/status
   :target: https://quay.io/repository/biocontainers/scatac-fragment-tools
.. _`scatac-fragment-tools/tags`: https://quay.io/repository/biocontainers/scatac-fragment-tools?tab=tags


.. raw:: html

    <script>
        var package = "scatac-fragment-tools";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scatac-fragment-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scatac-fragment-tools/README.html