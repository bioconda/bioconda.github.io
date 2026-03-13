:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virprof'
.. highlight: bash

virprof
=======

.. conda:recipe:: virprof
   :replaces_section_title:
   :noindex:

   Virus Identification\, Quantification and Genome Recovery from RNA\-Seq NGS data

   :homepage: https://github.com/seiboldlab/virprof
   :license: GPLv3
   :recipe: /`virprof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virprof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virprof/meta.yaml>`_

   VirProf is a dual RNA\-seq analysis pipeline integrating host
   expression profile generation with virus identification\,
   quantification\, and genome recovery from host tissue RNA
   sequencing data. VirProf combines an unguided metagenomic assembly
   workflow with interleaved host read depletion followed by BLAST
   based binning\, scaffolding and classification. Application of
   VirProf to poly\-A selected RNA\-seq data from nasal swabs with
   respiratory virus qPCR data\, revealed that VirProf was able to a\)
   quantify a range of viral infections at detection limits and
   precision comparable to qPCR and b\) recover complete\, accurate
   viral genomes suitable for phylogenetic analysis.



.. conda:package:: virprof

   |downloads_virprof| |docker_virprof|

   :versions:
      
      

      ``0.9.2-0``

      

   
   :depends on biopython: 
   :depends on click: 
   :depends on graph-tool-base: ``>=2.34``
   :depends on networkx: ``>=2.0``
   :depends on python: ``>=3.10,<3.12``
   :depends on requests: 
   :depends on tqdm: 
   :depends on ymp: ``>=0.3.2,<0.4``

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

    pixi global install virprof

to add into an existing workspace instead, run::

    pixi add virprof

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virprof

Alternatively, to install into a new environment, run::

    conda create -n envname virprof

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virprof:<tag>

(see `virprof/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virprof| image:: https://img.shields.io/conda/dn/bioconda/virprof.svg?style=flat
   :target: https://anaconda.org/bioconda/virprof
   :alt:   (downloads)
.. |docker_virprof| image:: https://quay.io/repository/biocontainers/virprof/status
   :target: https://quay.io/repository/biocontainers/virprof
.. _`virprof/tags`: https://quay.io/repository/biocontainers/virprof?tab=tags


.. raw:: html

    <script>
        var package = "virprof";
        var versions = ["0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virprof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virprof/README.html