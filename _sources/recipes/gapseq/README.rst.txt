:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapseq'
.. highlight: bash

gapseq
======

.. conda:recipe:: gapseq
   :replaces_section_title:
   :noindex:

   Informed prediction and analysis of bacterial metabolic pathways and genome\-scale networks

   :homepage: https://github.com/jotech/gapseq
   :license: GPL / AGPL-3.0-only
   :recipe: /`gapseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapseq/meta.yaml>`_

   


.. conda:package:: gapseq

   |downloads_gapseq| |docker_gapseq|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends on barrnap: 
   :depends on bc: 
   :depends on bedtools: 
   :depends on bioconductor-biostrings: 
   :depends on blast: 
   :depends on coreutils: 
   :depends on exonerate: 
   :depends on gawk: 
   :depends on git: 
   :depends on glpk: 
   :depends on grep: 
   :depends on hmmer: 
   :depends on libsbml: 
   :depends on openssl: 
   :depends on parallel: 
   :depends on perl: 
   :depends on r-base: 
   :depends on r-biocmanager: 
   :depends on r-cobrar: 
   :depends on r-data.table: 
   :depends on r-getopt: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-renv: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on sed: 
   :depends on wget: 

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

    pixi global install gapseq

to add into an existing workspace instead, run::

    pixi add gapseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gapseq

Alternatively, to install into a new environment, run::

    conda create -n envname gapseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gapseq:<tag>

(see `gapseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gapseq| image:: https://img.shields.io/conda/dn/bioconda/gapseq.svg?style=flat
   :target: https://anaconda.org/bioconda/gapseq
   :alt:   (downloads)
.. |docker_gapseq| image:: https://quay.io/repository/biocontainers/gapseq/status
   :target: https://quay.io/repository/biocontainers/gapseq
.. _`gapseq/tags`: https://quay.io/repository/biocontainers/gapseq?tab=tags


.. raw:: html

    <script>
        var package = "gapseq";
        var versions = ["1.4.0","1.4.0","1.3.1","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapseq/README.html