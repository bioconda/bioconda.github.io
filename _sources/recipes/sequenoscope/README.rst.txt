:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenoscope'
.. highlight: bash

sequenoscope
============

.. conda:recipe:: sequenoscope
   :replaces_section_title:
   :noindex:

   Sequenoscope \- A Modular Pipeline for ONT Adaptive Sampling and Comparative Microbial Genomics Visualization

   :homepage: https://github.com/phac-nml/sequenoscope
   :documentation: https://github.com/phac-nml/sequenoscope/blob/master/README.md
   
   :license: Apache / Apache-2.0
   :recipe: /`sequenoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenoscope/meta.yaml>`_

   Sequenoscope is an integrated modular pipeline for evaluating Oxford Nanopore adaptive sampling performance and automating microbial genomic analysis through interactive visualizations.


.. conda:package:: sequenoscope

   |downloads_sequenoscope| |docker_sequenoscope|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends on biopython: ``>=1.7``
   :depends on fastp: ``>=0.22.0,<=0.23.2``
   :depends on mash: ``>=2.3``
   :depends on minimap2: ``>=2.26``
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: ``>=5.16.1``
   :depends on pysam: ``>=0.16.0``
   :depends on python: ``>=3.7.12,<4``
   :depends on samtools: ``>=1.6``
   :depends on scipy: 
   :depends on seqtk: ``>=1.4``
   :depends on six: ``>=1.14.0``

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

    pixi global install sequenoscope

to add into an existing workspace instead, run::

    pixi add sequenoscope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequenoscope

Alternatively, to install into a new environment, run::

    conda create -n envname sequenoscope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequenoscope:<tag>

(see `sequenoscope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequenoscope| image:: https://img.shields.io/conda/dn/bioconda/sequenoscope.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenoscope
   :alt:   (downloads)
.. |docker_sequenoscope| image:: https://quay.io/repository/biocontainers/sequenoscope/status
   :target: https://quay.io/repository/biocontainers/sequenoscope
.. _`sequenoscope/tags`: https://quay.io/repository/biocontainers/sequenoscope?tab=tags


.. raw:: html

    <script>
        var package = "sequenoscope";
        var versions = ["1.0.0","1.0.0","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenoscope/README.html