:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gchromvar'
.. highlight: bash

r-gchromvar
===========

.. conda:recipe:: r-gchromvar
   :replaces_section_title:
   :noindex:

   R package for computing cell\-type specific GWAS enrichments from Finemapping data and quantitative epigenomic data.

   :homepage: https://caleblareau.github.io/gchromVAR/
   :developer docs: https://github.com/caleblareau/gchromVAR
   :license: MIT / MIT
   :recipe: /`r-gchromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gchromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gchromvar/meta.yaml>`_

   


.. conda:package:: r-gchromvar

   |downloads_r-gchromvar| |docker_r-gchromvar|

   :versions:
      
      

      ``0.3.2-1``,  ``0.3.2-0``

      

   
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-chromvar: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-s4vectors: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-matrix: 

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

    pixi global install r-gchromvar

to add into an existing workspace instead, run::

    pixi add r-gchromvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-gchromvar

Alternatively, to install into a new environment, run::

    conda create -n envname r-gchromvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-gchromvar:<tag>

(see `r-gchromvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-gchromvar| image:: https://img.shields.io/conda/dn/bioconda/r-gchromvar.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gchromvar
   :alt:   (downloads)
.. |docker_r-gchromvar| image:: https://quay.io/repository/biocontainers/r-gchromvar/status
   :target: https://quay.io/repository/biocontainers/r-gchromvar
.. _`r-gchromvar/tags`: https://quay.io/repository/biocontainers/r-gchromvar?tab=tags


.. raw:: html

    <script>
        var package = "r-gchromvar";
        var versions = ["0.3.2","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gchromvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gchromvar/README.html