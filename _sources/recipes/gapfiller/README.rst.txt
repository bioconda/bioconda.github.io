:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapfiller'
.. highlight: bash

gapfiller
=========

.. conda:recipe:: gapfiller
   :replaces_section_title:
   :noindex:

   GapFiller is a seed\-and\-extend local assembler to fill the gap within paired reads.

   :homepage: https://sourceforge.net/projects/gapfiller
   :license: GPL / GPLv3
   :recipe: /`gapfiller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapfiller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapfiller/meta.yaml>`_

   


.. conda:package:: gapfiller

   |downloads_gapfiller| |docker_gapfiller|

   :versions:
      
      

      ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.1-0``

      

   
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on zlib: ``>=1.2.13,<1.3.0a0``

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

    pixi global install gapfiller

to add into an existing workspace instead, run::

    pixi add gapfiller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gapfiller

Alternatively, to install into a new environment, run::

    conda create -n envname gapfiller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gapfiller:<tag>

(see `gapfiller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gapfiller| image:: https://img.shields.io/conda/dn/bioconda/gapfiller.svg?style=flat
   :target: https://anaconda.org/bioconda/gapfiller
   :alt:   (downloads)
.. |docker_gapfiller| image:: https://quay.io/repository/biocontainers/gapfiller/status
   :target: https://quay.io/repository/biocontainers/gapfiller
.. _`gapfiller/tags`: https://quay.io/repository/biocontainers/gapfiller?tab=tags


.. raw:: html

    <script>
        var package = "gapfiller";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapfiller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapfiller/README.html