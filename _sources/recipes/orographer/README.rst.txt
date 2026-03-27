:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orographer'
.. highlight: bash

orographer
==========

.. conda:recipe:: orographer
   :replaces_section_title:
   :noindex:

   Command line tool for visualizing alignments from BAM files.

   :homepage: https://github.com/PacificBiosciences/Orographer
   :documentation: https://github.com/PacificBiosciences/Orographer/blob/main/docs/user_guide.md
   
   :license: PROPRIETARY / Pacific Biosciences Software License Agreement
   :recipe: /`orographer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orographer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orographer/meta.yaml>`_

   Orographer reads a BAM file and one or more genomic regions\, then generates
   interactive Bokeh\-based HTML plots for reviewing alignments. It supports optional
   GTF\/GFF3 gene tracks and VCF variant overlay.



.. conda:package:: orographer

   |downloads_orographer| |docker_orographer|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bokeh: ``>=3.0``
   :depends on intervaltree: ``>=3.1``
   :depends on pysam: ``>=0.23``
   :depends on python: ``>=3.10``

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

    pixi global install orographer

to add into an existing workspace instead, run::

    pixi add orographer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orographer

Alternatively, to install into a new environment, run::

    conda create -n envname orographer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orographer:<tag>

(see `orographer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orographer| image:: https://img.shields.io/conda/dn/bioconda/orographer.svg?style=flat
   :target: https://anaconda.org/bioconda/orographer
   :alt:   (downloads)
.. |docker_orographer| image:: https://quay.io/repository/biocontainers/orographer/status
   :target: https://quay.io/repository/biocontainers/orographer
.. _`orographer/tags`: https://quay.io/repository/biocontainers/orographer?tab=tags


.. raw:: html

    <script>
        var package = "orographer";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orographer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orographer/README.html