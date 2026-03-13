:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rblast'
.. highlight: bash

r-rblast
========

.. conda:recipe:: r-rblast
   :replaces_section_title:
   :noindex:

   Seamlessly interfaces the Basic Local Alignment Search Tool \(BLAST\) to search genetic sequence data bases. This work was partially supported by grant no. R21HG005912 from the National Human Genome Research Institute.

   :homepage: https://github.com/mhahsler/rBLAST
   :documentation: https://github.com/mhahsler/rBLAST/blob/devel/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-rblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rblast/meta.yaml>`_
   :links: doi: :doi:`10.18129/B9.bioc.rBLAST`

   


.. conda:package:: r-rblast

   |downloads_r-rblast| |docker_r-rblast|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``0.99.1-8``,  ``0.99.1-7``,  ``0.99.1-6``,  ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on blast: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-rblast

to add into an existing workspace instead, run::

    pixi add r-rblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-rblast

Alternatively, to install into a new environment, run::

    conda create -n envname r-rblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-rblast:<tag>

(see `r-rblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-rblast| image:: https://img.shields.io/conda/dn/bioconda/r-rblast.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rblast
   :alt:   (downloads)
.. |docker_r-rblast| image:: https://quay.io/repository/biocontainers/r-rblast/status
   :target: https://quay.io/repository/biocontainers/r-rblast
.. _`r-rblast/tags`: https://quay.io/repository/biocontainers/r-rblast?tab=tags


.. raw:: html

    <script>
        var package = "r-rblast";
        var versions = ["1.3.1","1.3.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rblast/README.html