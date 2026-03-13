:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lineagespot'
.. highlight: bash

bioconductor-lineagespot
========================

.. conda:recipe:: bioconductor-lineagespot
   :replaces_section_title:
   :noindex:

   Detection of SARS\-CoV\-2 lineages in wastewater samples using next\-generation sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lineagespot.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lineagespot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagespot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagespot/meta.yaml>`_

   Lineagespot is a framework written in R\, and aims to identify SARS\-CoV\-2 related mutations based on a single \(or a list\) of variant\(s\) file\(s\) \(i.e.\, variant calling format\). The method can facilitate the detection of SARS\-CoV\-2 lineages in wastewater samples using next generation sequencing\, and attempts to infer the potential distribution of the SARS\-CoV\-2 lineages.


.. conda:package:: bioconductor-lineagespot

   |downloads_bioconductor-lineagespot| |docker_bioconductor-lineagespot|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-httr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-lineagespot

to add into an existing workspace instead, run::

    pixi add bioconductor-lineagespot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lineagespot

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lineagespot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lineagespot:<tag>

(see `bioconductor-lineagespot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lineagespot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagespot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lineagespot
   :alt:   (downloads)
.. |docker_bioconductor-lineagespot| image:: https://quay.io/repository/biocontainers/bioconductor-lineagespot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagespot
.. _`bioconductor-lineagespot/tags`: https://quay.io/repository/biocontainers/bioconductor-lineagespot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lineagespot";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagespot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagespot/README.html