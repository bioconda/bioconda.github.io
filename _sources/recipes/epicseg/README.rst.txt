:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epicseg'
.. highlight: bash

epicseg
=======

.. conda:recipe:: epicseg
   :replaces_section_title:
   :noindex:

   EpiCSeg \(Epigenome Count\-based Segmentation\) is a software for annotating the genome based on the state of the chromatin. It provides tools for extracting count data from BAM files\, typlically corresponding to ChIP\-seq experiments for histone marks \(but other choices are possible\) it learns a statistical model for the read counts based on a HMM\, it annotates the genome\, and it provides tools for displaying and analyzing the obtained models and segmentations. EpiCSeg can be used as an R package or from the command line via Rscript.

   :homepage: http://github.com/lamortenera/epicseg
   :license: GPL-3
   :recipe: /`epicseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg/meta.yaml>`_

   


.. conda:package:: epicseg

   |downloads_epicseg| |docker_epicseg|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-bamsignals: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-s4vectors: 
   :depends on kfoots: 
   :depends on libgcc-ng: ``>=12``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=0.10.6``

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

    pixi global install epicseg

to add into an existing workspace instead, run::

    pixi add epicseg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install epicseg

Alternatively, to install into a new environment, run::

    conda create -n envname epicseg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/epicseg:<tag>

(see `epicseg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_epicseg| image:: https://img.shields.io/conda/dn/bioconda/epicseg.svg?style=flat
   :target: https://anaconda.org/bioconda/epicseg
   :alt:   (downloads)
.. |docker_epicseg| image:: https://quay.io/repository/biocontainers/epicseg/status
   :target: https://quay.io/repository/biocontainers/epicseg
.. _`epicseg/tags`: https://quay.io/repository/biocontainers/epicseg?tab=tags


.. raw:: html

    <script>
        var package = "epicseg";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epicseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epicseg/README.html