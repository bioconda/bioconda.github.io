:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circleseeker'
.. highlight: bash

circleseeker
============

.. conda:recipe:: circleseeker
   :replaces_section_title:
   :noindex:

   Comprehensive eccDNA detection from PacBio HiFi sequencing data

   :homepage: https://github.com/leoxqy/CircleSeeker
   :documentation: https://github.com/leoxqy/CircleSeeker#readme
   
   :license: GPL / GPL-3.0-only
   :recipe: /`circleseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circleseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circleseeker/meta.yaml>`_

   CircleSeeker is a specialized bioinformatics pipeline designed for the
   identification\, classification\, and characterization of extrachromosomal
   circular DNA \(eccDNA\) from PacBio HiFi long\-read sequencing data.

   Key features\:
   \- CtcReads\-Core\: TideHunter\-based confirmed eccDNA detection
   \- SplitReads\-Core\: Built\-in split\-read inference \(HiFi optimized\)
   \- Hybrid detection strategy combining tandem repeat detection with split\-read assembly
   \- Comprehensive eccDNA classification \(UeccDNA\, MeccDNA\, CeccDNA\, XeccDNA\)
   \- Automated pipeline with checkpoint and resumption capabilities
   \- Detailed HTML reports and comprehensive output formats
   \- Modular architecture with 16 processing steps



.. conda:package:: circleseeker

   |downloads_circleseeker| |docker_circleseeker|

   :versions:
      
      

      ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on cd-hit: 
   :depends on click: ``>=8.1``
   :depends on intervaltree: ``>=3.1``
   :depends on last: 
   :depends on mappy: ``>=2.26``
   :depends on minimap2: 
   :depends on networkx: ``>=3.0``
   :depends on numpy: ``>=1.23``
   :depends on packaging: ``>=23``
   :depends on pandas: ``>=2.0``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=6.0``
   :depends on samtools: 
   :depends on tidehunter: 

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

    pixi global install circleseeker

to add into an existing workspace instead, run::

    pixi add circleseeker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circleseeker

Alternatively, to install into a new environment, run::

    conda create -n envname circleseeker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circleseeker:<tag>

(see `circleseeker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circleseeker| image:: https://img.shields.io/conda/dn/bioconda/circleseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/circleseeker
   :alt:   (downloads)
.. |docker_circleseeker| image:: https://quay.io/repository/biocontainers/circleseeker/status
   :target: https://quay.io/repository/biocontainers/circleseeker
.. _`circleseeker/tags`: https://quay.io/repository/biocontainers/circleseeker?tab=tags


.. raw:: html

    <script>
        var package = "circleseeker";
        var versions = ["1.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circleseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circleseeker/README.html