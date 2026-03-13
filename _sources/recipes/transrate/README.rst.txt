:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transrate'
.. highlight: bash

transrate
=========

.. conda:recipe:: transrate
   :replaces_section_title:
   :noindex:

   Reference free quality assessment of de\-novo transcriptome assemblies

   :homepage: https://github.com/blahah/transrate/
   :license: MIT
   :recipe: /`transrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.196469.115`

   


.. conda:package:: transrate

   |downloads_transrate| |docker_transrate|

   :versions:
      
      

      ``1.0.3-7``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on blast: ``2.2.31.*``
   :depends on boost: ``1.60.*``
   :depends on libgcc: ``>=14``
   :depends on libxcrypt: ``>=4.4.36``
   :depends on rb-bundler: 
   :depends on ruby: ``>=2``
   :depends on ruby: ``>=2.5.7,<2.6.0a0``
   :depends on salmon: ``0.6.0.*``
   :depends on snap-aligner: ``1.0dev.96.*``
   :depends on transrate-tools: ``1.0.0.*``

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

    pixi global install transrate

to add into an existing workspace instead, run::

    pixi add transrate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transrate

Alternatively, to install into a new environment, run::

    conda create -n envname transrate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transrate:<tag>

(see `transrate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transrate| image:: https://img.shields.io/conda/dn/bioconda/transrate.svg?style=flat
   :target: https://anaconda.org/bioconda/transrate
   :alt:   (downloads)
.. |docker_transrate| image:: https://quay.io/repository/biocontainers/transrate/status
   :target: https://quay.io/repository/biocontainers/transrate
.. _`transrate/tags`: https://quay.io/repository/biocontainers/transrate?tab=tags


.. raw:: html

    <script>
        var package = "transrate";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate/README.html