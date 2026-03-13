:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffgc'
.. highlight: bash

ffgc
====

.. conda:recipe:: ffgc
   :replaces_section_title:
   :noindex:

   Family Free Genome Comparison \(FFGC\) workflow

   :homepage: https://gitlab.ub.uni-bielefeld.de/gi/FFGC
   :documentation: https://gitlab.ub.uni-bielefeld.de/gi/FFGC/blob/master/README.md
   
   :license: BSD
   :recipe: /`ffgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffgc/meta.yaml>`_

   Family Free Genome Comparison \(FFGC\) is a self\-contained workflow system that
   provides functionality for all steps of a family\-free gene order analysis
   starting from annotated genome sequences.

   Family\-free methods for gene order analyses do not require prior knowledge of
   evolutionary relationships between the genes across the studied genomes. This
   tool features a complete workflow for genome comparison\, requiring nothing
   but annotated genome sequences as input.

   Surprisingly\, the continuous development of family\-free methods recently lead
   to an integrated method for inferring gene families across several species.
   FFGC now includes a subworkflow for inferring gene families simultaneously
   based on gene similarities and family\-free genome rearrangements \(OrthoFFGCʜ
   and OrthoFFGCʜ≈ extensions\).

   FFGC is available for download at our git repository
   \(https\:\/\/gitlab.ub.uni\-bielefeld.de\/gi\/FFGC\) or as a
   Conda package at Bioconda \(https\:\/\/anaconda.org\/bioconda\/ffgc\).

   In general\, three major steps are performed\: \(1\) the computation of local
   sequence alignment scores between genes of two or more gene order sequences
   using BLAST\+ or Diamond\; \(2\) the establishment of gene relationships\; and
   \(3\) the actual family\-free gene order analysis.



.. conda:package:: ffgc

   |downloads_ffgc| |docker_ffgc|

   :versions:
      
      

      ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.8``
   :depends on diamond: ``>=2.0.15``
   :depends on lxml: ``>=4.9.1``
   :depends on mcl: ``>=14.137``
   :depends on networkx: ``>=2.4``
   :depends on python: 
   :depends on ruamel.yaml: ``>=0.15``
   :depends on snakemake: ``>=7.24``

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

    pixi global install ffgc

to add into an existing workspace instead, run::

    pixi add ffgc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ffgc

Alternatively, to install into a new environment, run::

    conda create -n envname ffgc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ffgc:<tag>

(see `ffgc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ffgc| image:: https://img.shields.io/conda/dn/bioconda/ffgc.svg?style=flat
   :target: https://anaconda.org/bioconda/ffgc
   :alt:   (downloads)
.. |docker_ffgc| image:: https://quay.io/repository/biocontainers/ffgc/status
   :target: https://quay.io/repository/biocontainers/ffgc
.. _`ffgc/tags`: https://quay.io/repository/biocontainers/ffgc?tab=tags


.. raw:: html

    <script>
        var package = "ffgc";
        var versions = ["2.4.2","2.4.2","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffgc/README.html