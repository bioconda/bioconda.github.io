:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsv-typer'
.. highlight: bash

rsv-typer
=========

.. conda:recipe:: rsv-typer
   :replaces_section_title:
   :noindex:

   Genotyping RSV samples from nanopore sequencing data

   :homepage: https://github.com/DiltheyLab/RSVTyper
   :license: MIT
   :recipe: /`rsv-typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsv-typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsv-typer/meta.yaml>`_

   


.. conda:package:: rsv-typer

   |downloads_rsv-typer| |docker_rsv-typer|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on artic: ``1.2.4.*``
   :depends on gsl: ``2.7 he838d99_0``
   :depends on medaka: ``1.11.3.*``
   :depends on minimap2: ``>=2.17``
   :depends on muscle: ``3.8.*``
   :depends on nextclade: ``3.7.0.*``
   :depends on python: ``>=3``
   :depends on samtools: ``>=1.10``

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

    pixi global install rsv-typer

to add into an existing workspace instead, run::

    pixi add rsv-typer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rsv-typer

Alternatively, to install into a new environment, run::

    conda create -n envname rsv-typer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rsv-typer:<tag>

(see `rsv-typer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rsv-typer| image:: https://img.shields.io/conda/dn/bioconda/rsv-typer.svg?style=flat
   :target: https://anaconda.org/bioconda/rsv-typer
   :alt:   (downloads)
.. |docker_rsv-typer| image:: https://quay.io/repository/biocontainers/rsv-typer/status
   :target: https://quay.io/repository/biocontainers/rsv-typer
.. _`rsv-typer/tags`: https://quay.io/repository/biocontainers/rsv-typer?tab=tags


.. raw:: html

    <script>
        var package = "rsv-typer";
        var versions = ["0.5.0","0.4.0","0.4.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsv-typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsv-typer/README.html