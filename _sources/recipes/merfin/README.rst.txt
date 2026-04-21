:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merfin'
.. highlight: bash

merfin
======

.. conda:recipe:: merfin
   :replaces_section_title:
   :noindex:

   Improved variant filtering and polishing via k\-mer validation.

   :homepage: https://github.com/arangrhie/merfin
   :documentation: https://github.com/arangrhie/merfin/blob/v1.1/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`merfin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfin/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01445-y`, doi: :doi:`10.1101/2022.12.01.518724`, biotools: :biotools:`merfin`

   


.. conda:package:: merfin

   |downloads_merfin| |docker_merfin|

   :versions:
      
      

      ``1.1-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on genomescope2: 
   :depends on libcxx: ``>=19``
   :depends on liblzma: ``>=5.8.3,<6.0a0``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on meryl: ``>=1.3,<2``

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

    pixi global install merfin

to add into an existing workspace instead, run::

    pixi add merfin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install merfin

Alternatively, to install into a new environment, run::

    conda create -n envname merfin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/merfin:<tag>

(see `merfin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_merfin| image:: https://img.shields.io/conda/dn/bioconda/merfin.svg?style=flat
   :target: https://anaconda.org/bioconda/merfin
   :alt:   (downloads)
.. |docker_merfin| image:: https://quay.io/repository/biocontainers/merfin/status
   :target: https://quay.io/repository/biocontainers/merfin
.. _`merfin/tags`: https://quay.io/repository/biocontainers/merfin?tab=tags


.. raw:: html

    <script>
        var package = "merfin";
        var versions = ["1.1","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merfin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merfin/README.html