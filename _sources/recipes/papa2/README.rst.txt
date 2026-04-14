:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'papa2'
.. highlight: bash

papa2
=====

.. conda:recipe:: papa2
   :replaces_section_title:
   :noindex:

   Python\-first amplicon denoising — byte\-identical to R\'s DADA2

   :homepage: https://github.com/rec3141/papa2
   :documentation: https://rec3141.github.io/papa2
   
   :license: LGPL-3.0-only
   :recipe: /`papa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papa2/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3869`

   papa2 is a complete Python port of the DADA2 amplicon denoising pipeline.
   All 37 R functions have Python equivalents\, producing byte\-identical results
   with no R dependency. Includes quality filtering\, dereplication\, error
   learning\, denoising\, paired\-end merging\, chimera removal\, and taxonomy
   assignment backed by a compiled C\/C\+\+ core.



.. conda:package:: papa2

   |downloads_papa2| |docker_papa2|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install papa2

to add into an existing workspace instead, run::

    pixi add papa2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install papa2

Alternatively, to install into a new environment, run::

    conda create -n envname papa2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/papa2:<tag>

(see `papa2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_papa2| image:: https://img.shields.io/conda/dn/bioconda/papa2.svg?style=flat
   :target: https://anaconda.org/bioconda/papa2
   :alt:   (downloads)
.. |docker_papa2| image:: https://quay.io/repository/biocontainers/papa2/status
   :target: https://quay.io/repository/biocontainers/papa2
.. _`papa2/tags`: https://quay.io/repository/biocontainers/papa2?tab=tags


.. raw:: html

    <script>
        var package = "papa2";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/papa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/papa2/README.html