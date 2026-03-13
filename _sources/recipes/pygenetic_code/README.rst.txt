:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenetic_code'
.. highlight: bash

pygenetic_code
==============

.. conda:recipe:: pygenetic_code
   :replaces_section_title:
   :noindex:

   Python code for translating sequences using different NCBI translation tables and genetic codes

   :homepage: https://github.com/linsalrob/genetic_codes
   :license: MIT / MIT
   :recipe: /`pygenetic_code <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenetic_code>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenetic_code/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10450718`

   


.. conda:package:: pygenetic_code

   |downloads_pygenetic_code| |docker_pygenetic_code|

   :versions:
      
      

      ``0.20.0-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``

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

    pixi global install pygenetic_code

to add into an existing workspace instead, run::

    pixi add pygenetic_code

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygenetic_code

Alternatively, to install into a new environment, run::

    conda create -n envname pygenetic_code

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygenetic_code:<tag>

(see `pygenetic_code/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygenetic_code| image:: https://img.shields.io/conda/dn/bioconda/pygenetic_code.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenetic_code
   :alt:   (downloads)
.. |docker_pygenetic_code| image:: https://quay.io/repository/biocontainers/pygenetic_code/status
   :target: https://quay.io/repository/biocontainers/pygenetic_code
.. _`pygenetic_code/tags`: https://quay.io/repository/biocontainers/pygenetic_code?tab=tags


.. raw:: html

    <script>
        var package = "pygenetic_code";
        var versions = ["0.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenetic_code/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenetic_code/README.html