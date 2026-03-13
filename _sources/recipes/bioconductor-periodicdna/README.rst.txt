:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-periodicdna'
.. highlight: bash

bioconductor-periodicdna
========================

.. conda:recipe:: bioconductor-periodicdna
   :replaces_section_title:
   :noindex:

   Set of tools to identify periodic occurrences of k\-mers in DNA sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/periodicDNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-periodicdna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna/meta.yaml>`_

   This R package helps the user identify k\-mers \(e.g. di\- or tri\-nucleotides\) present periodically in a set of genomic loci \(typically regulatory elements\). The functions of this package provide a straightforward approach to find periodic occurrences of k\-mers in DNA sequences\, such as regulatory elements. It is not aimed at identifying motifs separated by a conserved distance\; for this type of analysis\, please visit MEME website.


.. conda:package:: bioconductor-periodicdna

   |downloads_bioconductor-periodicdna| |docker_bioconductor-periodicdna|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-periodicdna

to add into an existing workspace instead, run::

    pixi add bioconductor-periodicdna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-periodicdna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-periodicdna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-periodicdna:<tag>

(see `bioconductor-periodicdna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-periodicdna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-periodicdna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-periodicdna
   :alt:   (downloads)
.. |docker_bioconductor-periodicdna| image:: https://quay.io/repository/biocontainers/bioconductor-periodicdna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-periodicdna
.. _`bioconductor-periodicdna/tags`: https://quay.io/repository/biocontainers/bioconductor-periodicdna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-periodicdna";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html