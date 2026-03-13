:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svim-asm'
.. highlight: bash

svim-asm
========

.. conda:recipe:: svim-asm
   :replaces_section_title:
   :noindex:

   SVIM\-asm is a fork of the SV caller SVIM for genome\-genome alignments.

   :homepage: https://github.com/eldariont/svim-asm
   :license: GPL / GPL-3.0
   :recipe: /`svim-asm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm/meta.yaml>`_

   


.. conda:package:: svim-asm

   |downloads_svim-asm| |docker_svim-asm|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pysam: ``>=0.15``
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on scipy: 

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

    pixi global install svim-asm

to add into an existing workspace instead, run::

    pixi add svim-asm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svim-asm

Alternatively, to install into a new environment, run::

    conda create -n envname svim-asm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svim-asm:<tag>

(see `svim-asm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svim-asm| image:: https://img.shields.io/conda/dn/bioconda/svim-asm.svg?style=flat
   :target: https://anaconda.org/bioconda/svim-asm
   :alt:   (downloads)
.. |docker_svim-asm| image:: https://quay.io/repository/biocontainers/svim-asm/status
   :target: https://quay.io/repository/biocontainers/svim-asm
.. _`svim-asm/tags`: https://quay.io/repository/biocontainers/svim-asm?tab=tags


.. raw:: html

    <script>
        var package = "svim-asm";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim-asm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim-asm/README.html