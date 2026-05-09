:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trash-py'
.. highlight: bash

trash-py
========

.. conda:recipe:: trash-py
   :replaces_section_title:
   :noindex:

   Tandem\-repeat array identifier — Python port of TRASH.

   :homepage: https://github.com/mbeavitt/trash-py
   :license: MIT / MIT
   :recipe: /`trash-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trash-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trash-py/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad308`

   trash\-py is a Python re\-implementation of the TRASH program \(Tandem
   Repeat Annotation and Structural Hierarchy\) originally written in R by
   Piotr Włodzimierz. It identifies tandem repeat arrays in genome
   assemblies and exposes a library of reusable repeat\-annotation
   primitives in addition to the drag\-and\-drop CLI replacement for the
   upstream pipeline. Performance\-critical routines are implemented as a
   C extension.



.. conda:package:: trash-py

   |downloads_trash-py| |docker_trash-py|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on biopython: ``>=1.83``
   :depends on clustalo: 
   :depends on hmmer: 
   :depends on numpy: ``>=1.26``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``
   :depends on rapidfuzz: ``>=3.6``

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

    pixi global install trash-py

to add into an existing workspace instead, run::

    pixi add trash-py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trash-py

Alternatively, to install into a new environment, run::

    conda create -n envname trash-py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trash-py:<tag>

(see `trash-py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trash-py| image:: https://img.shields.io/conda/dn/bioconda/trash-py.svg?style=flat
   :target: https://anaconda.org/bioconda/trash-py
   :alt:   (downloads)
.. |docker_trash-py| image:: https://quay.io/repository/biocontainers/trash-py/status
   :target: https://quay.io/repository/biocontainers/trash-py
.. _`trash-py/tags`: https://quay.io/repository/biocontainers/trash-py?tab=tags


.. raw:: html

    <script>
        var package = "trash-py";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trash-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trash-py/README.html