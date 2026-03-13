:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eacon'
.. highlight: bash

r-eacon
=======

.. conda:recipe:: r-eacon
   :replaces_section_title:
   :noindex:

   Easy Copy Number. EaCoN aims to be an all\-packed in\, user\-friendly solution to perform relative or absolute copy\-number analysis for multiple sources of data\, with three different segmenters available \(and corresponding three copy\-number modelization methods\)

   :homepage: https://github.com/gustaveroussy/EaCoN
   :license: MIT
   :recipe: /`r-eacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eacon/meta.yaml>`_

   


.. conda:package:: r-eacon

   |downloads_r-eacon| |docker_r-eacon|

   :versions:
      
      

      ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4_1-1``,  ``0.3.4_1-0``

      

   
   :depends on ascat: ``>=3``
   :depends on bioconductor-affxparser: 
   :depends on bioconductor-aroma.light: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-bsgenome.hsapiens.1000genomes.hs37d5: 
   :depends on bioconductor-copynumber: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-limma: 
   :depends on bioconductor-rhdf5: 
   :depends on bioconductor-rsamtools: 
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-bedr: 
   :depends on r-changepoint: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-facets: 
   :depends on r-foreach: 
   :depends on r-iotools: 
   :depends on r-mclust: 
   :depends on r-rmarkdown: 
   :depends on r-seqinr: 
   :depends on r-sequenza: 

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

    pixi global install r-eacon

to add into an existing workspace instead, run::

    pixi add r-eacon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-eacon

Alternatively, to install into a new environment, run::

    conda create -n envname r-eacon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-eacon:<tag>

(see `r-eacon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-eacon| image:: https://img.shields.io/conda/dn/bioconda/r-eacon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eacon
   :alt:   (downloads)
.. |docker_r-eacon| image:: https://quay.io/repository/biocontainers/r-eacon/status
   :target: https://quay.io/repository/biocontainers/r-eacon
.. _`r-eacon/tags`: https://quay.io/repository/biocontainers/r-eacon?tab=tags


.. raw:: html

    <script>
        var package = "r-eacon";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eacon/README.html