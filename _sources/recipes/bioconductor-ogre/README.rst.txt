:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ogre'
.. highlight: bash

bioconductor-ogre
=================

.. conda:recipe:: bioconductor-ogre
   :replaces_section_title:
   :noindex:

   Calculate\, visualize and analyse overlap between genomic regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OGRE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ogre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre/meta.yaml>`_

   OGRE calculates overlap between user defined genomic region datasets. Any regions can be supplied i.e. genes\, SNPs\, or reads from sequencing experiments. Key numbers help analyse the extend of overlaps which can also be visualized at a genomic level.


.. conda:package:: bioconductor-ogre

   |downloads_bioconductor-ogre| |docker_bioconductor-ogre|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-shinyfiles: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-ogre

to add into an existing workspace instead, run::

    pixi add bioconductor-ogre

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ogre

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ogre

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ogre:<tag>

(see `bioconductor-ogre/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ogre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ogre.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ogre
   :alt:   (downloads)
.. |docker_bioconductor-ogre| image:: https://quay.io/repository/biocontainers/bioconductor-ogre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ogre
.. _`bioconductor-ogre/tags`: https://quay.io/repository/biocontainers/bioconductor-ogre?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ogre";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ogre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ogre/README.html