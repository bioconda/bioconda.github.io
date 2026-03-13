:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'daisyblast'
.. highlight: bash

daisyblast
==========

.. conda:recipe:: daisyblast
   :replaces_section_title:
   :noindex:

   A Python tool to find\, plot\, and export synteny blocks from all\-vs\-all BLAST.

   :homepage: https://github.com/erinyoung/daisyblast
   :license: MIT
   :recipe: /`daisyblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisyblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisyblast/meta.yaml>`_

   


.. conda:package:: daisyblast

   |downloads_daisyblast| |docker_daisyblast|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on matplotlib-base: 
   :depends on pycirclize: 
   :depends on python: ``>=3.8``

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

    pixi global install daisyblast

to add into an existing workspace instead, run::

    pixi add daisyblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install daisyblast

Alternatively, to install into a new environment, run::

    conda create -n envname daisyblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/daisyblast:<tag>

(see `daisyblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_daisyblast| image:: https://img.shields.io/conda/dn/bioconda/daisyblast.svg?style=flat
   :target: https://anaconda.org/bioconda/daisyblast
   :alt:   (downloads)
.. |docker_daisyblast| image:: https://quay.io/repository/biocontainers/daisyblast/status
   :target: https://quay.io/repository/biocontainers/daisyblast
.. _`daisyblast/tags`: https://quay.io/repository/biocontainers/daisyblast?tab=tags


.. raw:: html

    <script>
        var package = "daisyblast";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daisyblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daisyblast/README.html