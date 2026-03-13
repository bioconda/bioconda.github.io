:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alleleflux'
.. highlight: bash

alleleflux
==========

.. conda:recipe:: alleleflux
   :replaces_section_title:
   :noindex:

   A tool for fine\-grained evolutionary analysis of microbial populations and communities

   :homepage: https://github.com/MoellerLabPU/AlleleFlux
   :documentation: https://alleleflux.readthedocs.io/en/latest/?badge=latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`alleleflux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alleleflux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alleleflux/meta.yaml>`_

   AlleleFlux is a python package for analyzing allele frequencies trajectories
   in metagenomic data. It profiles MAG \(Metagenome\-Assembled Genome\) populations 
   across samples\, detecting parallel evolution through allele frequency changes.



.. conda:package:: alleleflux

   |downloads_alleleflux| |docker_alleleflux|

   :versions:
      
      

      ``0.1.14-0``,  ``0.1.4-0``

      

   
   :depends on biopython: 
   :depends on click: 
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on pyyaml: 
   :depends on questionary: 
   :depends on r-base: 
   :depends on r-tidyr: 
   :depends on rpy2: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on snakemake-executor-plugin-cluster-generic: 
   :depends on snakemake-minimal: ``>=8.0.0``
   :depends on statsmodels: 
   :depends on tqdm: 

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

    pixi global install alleleflux

to add into an existing workspace instead, run::

    pixi add alleleflux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alleleflux

Alternatively, to install into a new environment, run::

    conda create -n envname alleleflux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alleleflux:<tag>

(see `alleleflux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alleleflux| image:: https://img.shields.io/conda/dn/bioconda/alleleflux.svg?style=flat
   :target: https://anaconda.org/bioconda/alleleflux
   :alt:   (downloads)
.. |docker_alleleflux| image:: https://quay.io/repository/biocontainers/alleleflux/status
   :target: https://quay.io/repository/biocontainers/alleleflux
.. _`alleleflux/tags`: https://quay.io/repository/biocontainers/alleleflux?tab=tags


.. raw:: html

    <script>
        var package = "alleleflux";
        var versions = ["0.1.14","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alleleflux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alleleflux/README.html