:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-picb'
.. highlight: bash

bioconductor-picb
=================

.. conda:recipe:: bioconductor-picb
   :replaces_section_title:
   :noindex:

   piRNA Cluster Builder

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/PICB.html
   :license: CC0
   :recipe: /`bioconductor-picb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-picb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-picb/meta.yaml>`_

   piRNAs \(short for PIWI\-interacting RNAs\) and their PIWI protein partners play a key role in fertility and maintaining genome integrity by restricting mobile genetic elements \(transposons\) in germ cells. piRNAs originate from genomic regions known as piRNA clusters. The piRNA Cluster Builder \(PICB\) is a versatile toolkit designed to identify genomic regions with a high density of piRNAs. It constructs piRNA clusters through a stepwise integration of unique and multimapping piRNAs and offers wide\-ranging parameter settings\, supported by an optimization function that allows users to test different parameter combinations to tailor the analysis to their specific piRNA system. The output includes extensive metadata columns\, enabling researchers to rank clusters and extract cluster characteristics.


.. conda:package:: bioconductor-picb

   |downloads_bioconductor-picb| |docker_bioconductor-picb|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-openxlsx: 
   :depends on r-seqinr: 

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

    pixi global install bioconductor-picb

to add into an existing workspace instead, run::

    pixi add bioconductor-picb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-picb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-picb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-picb:<tag>

(see `bioconductor-picb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-picb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-picb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-picb
   :alt:   (downloads)
.. |docker_bioconductor-picb| image:: https://quay.io/repository/biocontainers/bioconductor-picb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-picb
.. _`bioconductor-picb/tags`: https://quay.io/repository/biocontainers/bioconductor-picb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-picb";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-picb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-picb/README.html