:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repaq'
.. highlight: bash

repaq
=====

.. conda:recipe:: repaq
   :replaces_section_title:
   :noindex:

   A fast lossless FASTQ compressor with ultra\-high compression ratio.

   :homepage: https://github.com/OpenGene/repaq
   :documentation: https://github.com/OpenGene/repaq/blob/v0.5.1/README.md
   
   :license: MIT / MIT
   :recipe: /`repaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq/meta.yaml>`_
   :links: doi: :doi:`10.3389/fgene.2023.1260531`

   


.. conda:package:: repaq

   |downloads_repaq| |docker_repaq|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install repaq

to add into an existing workspace instead, run::

    pixi add repaq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install repaq

Alternatively, to install into a new environment, run::

    conda create -n envname repaq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/repaq:<tag>

(see `repaq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_repaq| image:: https://img.shields.io/conda/dn/bioconda/repaq.svg?style=flat
   :target: https://anaconda.org/bioconda/repaq
   :alt:   (downloads)
.. |docker_repaq| image:: https://quay.io/repository/biocontainers/repaq/status
   :target: https://quay.io/repository/biocontainers/repaq
.. _`repaq/tags`: https://quay.io/repository/biocontainers/repaq?tab=tags


.. raw:: html

    <script>
        var package = "repaq";
        var versions = ["0.5.1","0.5.1","0.5.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repaq/README.html