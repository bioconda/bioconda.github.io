:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssdrippipeline'
.. highlight: bash

ssdrippipeline
==============

.. conda:recipe:: ssdrippipeline
   :replaces_section_title:
   :noindex:

   Useful tools for the analysis of ssDRIP\-seq data

   :homepage: https://github.com/PEHGP/ssDripPipeline
   :documentation: https://github.com/PEHGP/ssDripPipeline/wiki
   
   :license: GPL3
   :recipe: /`ssdrippipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssdrippipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssdrippipeline/meta.yaml>`_

   


.. conda:package:: ssdrippipeline

   |downloads_ssdrippipeline| |docker_ssdrippipeline|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends on bedtools: ``>=2.29.2``
   :depends on bioconductor-deseq2: ``>=1.32.0``
   :depends on bioconductor-mfuzz: ``>=2.52.0``
   :depends on biopython: ``>=1.78``
   :depends on bowtie2: ``>=2.3.5.1``
   :depends on deeptools: ``>=3.5.0``
   :depends on homer: ``>=4.11``
   :depends on macs2: ``>=2.2.7.1``
   :depends on matplotlib-base: ``>=3.1.3``
   :depends on numpy: ``>=1.18.1``
   :depends on pandas: ``>=1.0.1``
   :depends on picard: ``>=2.24.2``
   :depends on python: ``>=3.7``
   :depends on r-base: ``>=4.1,<4.2.0a0``
   :depends on r-gplots: ``>=3.1.1``
   :depends on samtools: ``>=1.7``
   :depends on scipy: ``>=1.4.1``
   :depends on seaborn: ``>=0.10.0``
   :depends on ucsc-bedgraphtobigwig: 

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

    pixi global install ssdrippipeline

to add into an existing workspace instead, run::

    pixi add ssdrippipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ssdrippipeline

Alternatively, to install into a new environment, run::

    conda create -n envname ssdrippipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ssdrippipeline:<tag>

(see `ssdrippipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ssdrippipeline| image:: https://img.shields.io/conda/dn/bioconda/ssdrippipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/ssdrippipeline
   :alt:   (downloads)
.. |docker_ssdrippipeline| image:: https://quay.io/repository/biocontainers/ssdrippipeline/status
   :target: https://quay.io/repository/biocontainers/ssdrippipeline
.. _`ssdrippipeline/tags`: https://quay.io/repository/biocontainers/ssdrippipeline?tab=tags


.. raw:: html

    <script>
        var package = "ssdrippipeline";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssdrippipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssdrippipeline/README.html