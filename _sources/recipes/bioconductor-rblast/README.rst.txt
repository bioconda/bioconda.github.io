:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rblast'
.. highlight: bash

bioconductor-rblast
===================

.. conda:recipe:: bioconductor-rblast
   :replaces_section_title:
   :noindex:

   R Interface for the Basic Local Alignment Search Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rBLAST.html
   :license: GPL-3
   :recipe: /`bioconductor-rblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rblast/meta.yaml>`_

   Seamlessly interfaces the Basic Local Alignment Search Tool \(BLAST\) to search genetic sequence data bases. This work was partially supported by grant no. R21HG005912 from the National Human Genome Research Institute.


.. conda:package:: bioconductor-rblast

   |downloads_bioconductor-rblast| |docker_bioconductor-rblast|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-rblast

to add into an existing workspace instead, run::

    pixi add bioconductor-rblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rblast

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rblast:<tag>

(see `bioconductor-rblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rblast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rblast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rblast
   :alt:   (downloads)
.. |docker_bioconductor-rblast| image:: https://quay.io/repository/biocontainers/bioconductor-rblast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rblast
.. _`bioconductor-rblast/tags`: https://quay.io/repository/biocontainers/bioconductor-rblast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rblast";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rblast/README.html