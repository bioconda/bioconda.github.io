:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pneumo-typer'
.. highlight: bash

pneumo-typer
============

.. conda:recipe:: pneumo-typer
   :replaces_section_title:
   :noindex:

   Pneumo\-Typer is a high\-throughput capsule genotype visualization tool with integrated serotype and sequence type prediction for Streptococcus pneumoniae

   :homepage: https://www.microbialgenomic.cn/Pneumo-Typer.html
   :documentation: https://github.com/Xiangyang1984/Pneumo-Typer
   
   :license: GNU General Public License v3.0 or any later version (GPL-3.0-or-later)
   :recipe: /`pneumo-typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumo-typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumo-typer/meta.yaml>`_

   Pneumo\-Typer is a stand\-alone perl application\, which requires blat\, prodigal\, NCBI BLAST\+\, and several perl Modules \(GD\, GD\:\:SVG\) to be installed before use.


.. conda:package:: pneumo-typer

   |downloads_pneumo-typer| |docker_pneumo-typer|

   :versions:
      
      

      ``2.0.1-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on blast: 
   :depends on blat: 
   :depends on perl-bioperl-core: 
   :depends on perl-gd: ``>=2.74``
   :depends on perl-gd-svg: 
   :depends on perl-svg: ``>=2.87``
   :depends on prodigal: 

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

    pixi global install pneumo-typer

to add into an existing workspace instead, run::

    pixi add pneumo-typer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pneumo-typer

Alternatively, to install into a new environment, run::

    conda create -n envname pneumo-typer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pneumo-typer:<tag>

(see `pneumo-typer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pneumo-typer| image:: https://img.shields.io/conda/dn/bioconda/pneumo-typer.svg?style=flat
   :target: https://anaconda.org/bioconda/pneumo-typer
   :alt:   (downloads)
.. |docker_pneumo-typer| image:: https://quay.io/repository/biocontainers/pneumo-typer/status
   :target: https://quay.io/repository/biocontainers/pneumo-typer
.. _`pneumo-typer/tags`: https://quay.io/repository/biocontainers/pneumo-typer?tab=tags


.. raw:: html

    <script>
        var package = "pneumo-typer";
        var versions = ["2.0.1","1.0.3","1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pneumo-typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pneumo-typer/README.html