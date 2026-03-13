:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfflu'
.. highlight: bash

gfflu
=====

.. conda:recipe:: gfflu
   :replaces_section_title:
   :noindex:

   Annotate Influenza A virus gene segment sequences and output GFF3 files.

   :homepage: https://github.com/CFIA-NCFAD/gfflu
   :license: MIT
   :recipe: /`gfflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu/meta.yaml>`_

   


.. conda:package:: gfflu

   |downloads_gfflu| |docker_gfflu|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on blast: 
   :depends on miniprot: 
   :depends on polars: 
   :depends on python: ``>=3.8``
   :depends on rich: 
   :depends on typer: 

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

    pixi global install gfflu

to add into an existing workspace instead, run::

    pixi add gfflu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfflu

Alternatively, to install into a new environment, run::

    conda create -n envname gfflu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfflu:<tag>

(see `gfflu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfflu| image:: https://img.shields.io/conda/dn/bioconda/gfflu.svg?style=flat
   :target: https://anaconda.org/bioconda/gfflu
   :alt:   (downloads)
.. |docker_gfflu| image:: https://quay.io/repository/biocontainers/gfflu/status
   :target: https://quay.io/repository/biocontainers/gfflu
.. _`gfflu/tags`: https://quay.io/repository/biocontainers/gfflu?tab=tags


.. raw:: html

    <script>
        var package = "gfflu";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfflu/README.html