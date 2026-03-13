:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strandphaser'
.. highlight: bash

strandphaser
============

.. conda:recipe:: strandphaser
   :replaces_section_title:
   :noindex:

   Phase Strand\-seq data

   :homepage: https://github.com/daewoooo/StrandPhaseR/
   :license: MIT
   :recipe: /`strandphaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strandphaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strandphaser/meta.yaml>`_

   R Package for phasing of single cell Strand\-seq data


.. conda:package:: strandphaser

   |downloads_strandphaser| |docker_strandphaser|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bamsignals: 
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-breakpointr: 
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-fastseg: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-rsamtools: 
   :depends on bioconductor-s4vectors: 
   :depends on bioconductor-variantannotation: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-r.methodss3: 
   :depends on r-reshape2: 
   :depends on r-tidyr: 
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

    pixi global install strandphaser

to add into an existing workspace instead, run::

    pixi add strandphaser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strandphaser

Alternatively, to install into a new environment, run::

    conda create -n envname strandphaser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strandphaser:<tag>

(see `strandphaser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strandphaser| image:: https://img.shields.io/conda/dn/bioconda/strandphaser.svg?style=flat
   :target: https://anaconda.org/bioconda/strandphaser
   :alt:   (downloads)
.. |docker_strandphaser| image:: https://quay.io/repository/biocontainers/strandphaser/status
   :target: https://quay.io/repository/biocontainers/strandphaser
.. _`strandphaser/tags`: https://quay.io/repository/biocontainers/strandphaser?tab=tags


.. raw:: html

    <script>
        var package = "strandphaser";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strandphaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strandphaser/README.html