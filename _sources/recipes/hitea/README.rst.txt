:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hitea'
.. highlight: bash

hitea
=====

.. conda:recipe:: hitea
   :replaces_section_title:
   :noindex:

   computational tool to identify trasposable element insertions using Hi\-C data

   :homepage: https://github.com/parklab/HiTea
   :license: MIT / MIT
   :recipe: /`hitea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitea/meta.yaml>`_

   


.. conda:package:: hitea

   |downloads_hitea| |docker_hitea|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends on bedtools: ``2.27.1``
   :depends on bioconductor-enrichedheatmap: ``>=1.16.0``
   :depends on bioconductor-genomicranges: ``>=1.38.0``
   :depends on bwa: ``>=0.7.17``
   :depends on pairtools: ``0.3.0.*``
   :depends on pandoc: 
   :depends on parallel: 
   :depends on perl: ``>=5.24``
   :depends on python: 
   :depends on r-base: ``>=3.5.0``
   :depends on r-circlize: ``>=0.4.8``
   :depends on r-data.table: ``>=1.12.8``
   :depends on r-dt: ``>=0.13``
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-kableextra: 
   :depends on r-kernsmooth: ``>=2.23_17``
   :depends on r-knitr: ``>=1.28``
   :depends on r-mass: ``>=7.3``
   :depends on r-rcolorbrewer: ``>=1.1``
   :depends on r-rmarkdown: ``>=2.1``
   :depends on r-xtable: ``>=1.8``
   :depends on samtools: ``>=1.10``

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

    pixi global install hitea

to add into an existing workspace instead, run::

    pixi add hitea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hitea

Alternatively, to install into a new environment, run::

    conda create -n envname hitea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hitea:<tag>

(see `hitea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hitea| image:: https://img.shields.io/conda/dn/bioconda/hitea.svg?style=flat
   :target: https://anaconda.org/bioconda/hitea
   :alt:   (downloads)
.. |docker_hitea| image:: https://quay.io/repository/biocontainers/hitea/status
   :target: https://quay.io/repository/biocontainers/hitea
.. _`hitea/tags`: https://quay.io/repository/biocontainers/hitea?tab=tags


.. raw:: html

    <script>
        var package = "hitea";
        var versions = ["0.1.5","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hitea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hitea/README.html