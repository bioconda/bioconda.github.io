:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-merge-kallisto'
.. highlight: bash

r-merge-kallisto
================

.. conda:recipe:: r-merge-kallisto
   :replaces_section_title:
   :noindex:

   merge\_kallisto

   :homepage: https://github.com/zavolanlab/merge_kallisto
   :license: APACHE / Apache License 2.0
   :recipe: /`r-merge-kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto/meta.yaml>`_

   


.. conda:package:: r-merge-kallisto

   |downloads_r-merge-kallisto| |docker_r-merge-kallisto|

   :versions:
      
      

      ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends on bioconductor-rhdf5: 
   :depends on bioconductor-rtracklayer: 
   :depends on bioconductor-tximport: 
   :depends on coreutils: 
   :depends on r-base: 
   :depends on r-optparse: 
   :depends on r-rcpp: 
   :depends on rsync: 

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

    pixi global install r-merge-kallisto

to add into an existing workspace instead, run::

    pixi add r-merge-kallisto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-merge-kallisto

Alternatively, to install into a new environment, run::

    conda create -n envname r-merge-kallisto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-merge-kallisto:<tag>

(see `r-merge-kallisto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-merge-kallisto| image:: https://img.shields.io/conda/dn/bioconda/r-merge-kallisto.svg?style=flat
   :target: https://anaconda.org/bioconda/r-merge-kallisto
   :alt:   (downloads)
.. |docker_r-merge-kallisto| image:: https://quay.io/repository/biocontainers/r-merge-kallisto/status
   :target: https://quay.io/repository/biocontainers/r-merge-kallisto
.. _`r-merge-kallisto/tags`: https://quay.io/repository/biocontainers/r-merge-kallisto?tab=tags


.. raw:: html

    <script>
        var package = "r-merge-kallisto";
        var versions = ["0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-merge-kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-merge-kallisto/README.html