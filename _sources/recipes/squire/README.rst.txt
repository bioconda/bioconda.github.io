:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squire'
.. highlight: bash

squire
======

.. conda:recipe:: squire
   :replaces_section_title:
   :noindex:

   Quantitative\, locus\-specific view of transposable element expression.

   :homepage: https://github.com/wyang17/SQuIRE
   :license: GNU
   :recipe: /`squire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squire/meta.yaml>`_

   


.. conda:package:: squire

   |downloads_squire| |docker_squire|

   :versions:
      
      

      ``0.9.9.92-1``,  ``0.9.9.92-0``

      

   
   :depends on bedtools: ``2.25.0``
   :depends on bioconductor-biocparallel: ``1.12.0``
   :depends on bioconductor-deseq2: ``1.16.1``
   :depends on bioconductor-vsn: 
   :depends on igvtools: ``2.3.93``
   :depends on pyfaidx: 
   :depends on python: ``2.7.*``
   :depends on r-base: ``3.4.1``
   :depends on r-ggrepel: 
   :depends on r-hexbin: 
   :depends on r-pheatmap: 
   :depends on samtools: ``1.1``
   :depends on star: ``2.5.3a``
   :depends on stringtie: ``1.3.3``
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-genepredtobed: 
   :depends on ucsc-genepredtogtf: 
   :depends on ucsc-gtftogenepred: 

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

    pixi global install squire

to add into an existing workspace instead, run::

    pixi add squire

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install squire

Alternatively, to install into a new environment, run::

    conda create -n envname squire

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/squire:<tag>

(see `squire/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_squire| image:: https://img.shields.io/conda/dn/bioconda/squire.svg?style=flat
   :target: https://anaconda.org/bioconda/squire
   :alt:   (downloads)
.. |docker_squire| image:: https://quay.io/repository/biocontainers/squire/status
   :target: https://quay.io/repository/biocontainers/squire
.. _`squire/tags`: https://quay.io/repository/biocontainers/squire?tab=tags


.. raw:: html

    <script>
        var package = "squire";
        var versions = ["0.9.9.92","0.9.9.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squire/README.html