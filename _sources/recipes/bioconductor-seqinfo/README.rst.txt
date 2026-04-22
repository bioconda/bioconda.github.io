:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqinfo'
.. highlight: bash

bioconductor-seqinfo
====================

.. conda:recipe:: bioconductor-seqinfo
   :replaces_section_title:
   :noindex:

   A simple S4 class for storing basic information about a collection of genomic sequences

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Seqinfo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqinfo/meta.yaml>`_

   The Seqinfo class stores the names\, lengths\, circularity flags\, and genomes for a particular collection of sequences. These sequences are typically the chromosomes and\/or scaffolds of a specific genome assembly of a given organism. Seqinfo objects are rarely used as standalone objects. Instead\, they are used as part of higher\-level objects to represent their seqinfo\(\) component. Examples of such higher\-level objects are GRanges\, RangedSummarizedExperiment\, VCF\, GAlignments\, etc... defined in other Bioconductor infrastructure packages.


.. conda:package:: bioconductor-seqinfo

   |downloads_bioconductor-seqinfo| |docker_bioconductor-seqinfo|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-seqinfo

to add into an existing workspace instead, run::

    pixi add bioconductor-seqinfo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqinfo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqinfo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqinfo:<tag>

(see `bioconductor-seqinfo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqinfo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqinfo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqinfo
   :alt:   (downloads)
.. |docker_bioconductor-seqinfo| image:: https://quay.io/repository/biocontainers/bioconductor-seqinfo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqinfo
.. _`bioconductor-seqinfo/tags`: https://quay.io/repository/biocontainers/bioconductor-seqinfo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqinfo";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqinfo/README.html