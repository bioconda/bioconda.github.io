:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggseqalign'
.. highlight: bash

bioconductor-ggseqalign
=======================

.. conda:recipe:: bioconductor-ggseqalign
   :replaces_section_title:
   :noindex:

   Minimal Visualization of Sequence Alignments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ggseqalign.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggseqalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggseqalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggseqalign/meta.yaml>`_

   Simple visualizations of alignments of DNA or AA sequences as well as arbitrary strings. Compatible with Biostrings and ggplot2. The plots are fully customizable using ggplot2 modifiers such as theme\(\).


.. conda:package:: bioconductor-ggseqalign

   |downloads_bioconductor-ggseqalign| |docker_bioconductor-ggseqalign|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-ggseqalign

to add into an existing workspace instead, run::

    pixi add bioconductor-ggseqalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ggseqalign

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ggseqalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ggseqalign:<tag>

(see `bioconductor-ggseqalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ggseqalign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggseqalign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggseqalign
   :alt:   (downloads)
.. |docker_bioconductor-ggseqalign| image:: https://quay.io/repository/biocontainers/bioconductor-ggseqalign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggseqalign
.. _`bioconductor-ggseqalign/tags`: https://quay.io/repository/biocontainers/bioconductor-ggseqalign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggseqalign";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggseqalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggseqalign/README.html