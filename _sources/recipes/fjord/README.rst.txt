:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fjord'
.. highlight: bash

fjord
=====

.. conda:recipe:: fjord
   :replaces_section_title:
   :noindex:

   ONT amplicon sequencing pipeline for bacterial identification

   :homepage: https://github.com/adnsvrtsn/fjord
   :license: MIT / MIT
   :recipe: /`fjord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fjord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fjord/meta.yaml>`_

   FJORD \(Flexible Joint Operational pipeline for Reference\-based Diagnostics\)
   is an amplicon sequencing pipeline for bacterial identification from Oxford
   Nanopore Technologies long\-read data. It maps reads to a GTDB\-formatted
   reference database\, generates consensus sequences\, clusters similar
   sequences with IUPAC\-aware consolidation\, and assigns taxonomy via BLAST.



.. conda:package:: fjord

   |downloads_fjord| |docker_fjord|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bash: ``>=3.2``
   :depends on biopython: 
   :depends on blast: 
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.15``
   :depends on vsearch: 
   :depends on x-mapper: 

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

    pixi global install fjord

to add into an existing workspace instead, run::

    pixi add fjord

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fjord

Alternatively, to install into a new environment, run::

    conda create -n envname fjord

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fjord:<tag>

(see `fjord/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fjord| image:: https://img.shields.io/conda/dn/bioconda/fjord.svg?style=flat
   :target: https://anaconda.org/bioconda/fjord
   :alt:   (downloads)
.. |docker_fjord| image:: https://quay.io/repository/biocontainers/fjord/status
   :target: https://quay.io/repository/biocontainers/fjord
.. _`fjord/tags`: https://quay.io/repository/biocontainers/fjord?tab=tags


.. raw:: html

    <script>
        var package = "fjord";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fjord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fjord/README.html