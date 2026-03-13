:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fragpipe'
.. highlight: bash

fragpipe
========

.. conda:recipe:: fragpipe
   :replaces_section_title:
   :noindex:

   Pipeline for comprehensive analysis of shotgun proteomics data

   :homepage: https://github.com/Nesvilab/FragPipe
   :license: GPL-3.0 + LICENSE files
   :recipe: /`fragpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragpipe/meta.yaml>`_
   :links: biotools: :biotools:`fragpipe`, doi: :doi:`10.1074/mcp.TIR120.002048`

   FragPipe is a Java Graphical User Interface \(GUI\) for a suite of computational tools
   enabling comprehensive analysis of mass spectrometry\-based proteomics data.
   It is powered by MSFragger \- an ultrafast proteomic search engine suitable
   for both conventional and \"open\" \(wide precursor mass tolerance\) peptide identification.
   FragPipe includes the Philosopher toolkit for downstream post\-processing of
   MSFragger search results \(PeptideProphet\, iProphet\, ProteinProphet\)\, FDR filtering\,
   label\-based quantification\, and multi\-experiment summary report generation.
   Crystal\-C and PTM\-Shepherd are included to aid interpretation of open search results.
   Also included in FragPipe binary are TMT\-Integrator for TMT\/iTRAQ isobaric
   labeling\-based quantification\, IonQuant for label\-free quantification with
   match\-between\-run \(MBR\) functionality\, spectral library building with EasyPQP\,
   and MSFragger\-DIA and DIA\-Umpire SE modules for direct analysis of data independent
   acquisition \(DIA\) data.



.. conda:package:: fragpipe

   |downloads_fragpipe| |docker_fragpipe|

   :versions:
      
      

      ``24.0-0``,  ``23.1-0``,  ``23.0-0``,  ``22.0-0``,  ``20.0-4``,  ``20.0-3``,  ``20.0-2``,  ``20.0-1``,  ``20.0-0``

      

   
   :depends on diatracer: ``>=1.2.5``
   :depends on easypqp: ``>=0.1.34``
   :depends on ionquant: ``>=1.11.9``
   :depends on lxml: 
   :depends on msfragger: ``>=4.2``
   :depends on openjdk: ``>=9``
   :depends on python: ``3.11.*``
   :depends on zlib: ``>=1.2.13``

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

    pixi global install fragpipe

to add into an existing workspace instead, run::

    pixi add fragpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fragpipe

Alternatively, to install into a new environment, run::

    conda create -n envname fragpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fragpipe:<tag>

(see `fragpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fragpipe| image:: https://img.shields.io/conda/dn/bioconda/fragpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/fragpipe
   :alt:   (downloads)
.. |docker_fragpipe| image:: https://quay.io/repository/biocontainers/fragpipe/status
   :target: https://quay.io/repository/biocontainers/fragpipe
.. _`fragpipe/tags`: https://quay.io/repository/biocontainers/fragpipe?tab=tags


.. raw:: html

    <script>
        var package = "fragpipe";
        var versions = ["24.0","23.1","23.0","22.0","20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fragpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fragpipe/README.html