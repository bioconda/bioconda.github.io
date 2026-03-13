:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qiime2r'
.. highlight: bash

r-qiime2r
=========

.. conda:recipe:: r-qiime2r
   :replaces_section_title:
   :noindex:

   Import qiime2 artifacts to R.

   :homepage: https://github.com/jbisanz/qiime2R
   :license: MIT / MIT
   :recipe: /`r-qiime2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiime2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiime2r/meta.yaml>`_

   Importing QIIME2 artifacts and associated data into R sessions.


.. conda:package:: r-qiime2r

   |downloads_r-qiime2r| |docker_r-qiime2r|

   :versions:
      
      

      ``0.99.20-2``,  ``0.99.20-1``,  ``0.99.20-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.46.0``
   :depends on bioconductor-phyloseq: ``>=1.22.3``
   :depends on bioconductor-rhdf5: ``>=2.26.2``
   :depends on r-ape: ``>=5.2``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.12.8``
   :depends on r-dplyr: ``>=0.8.1``
   :depends on r-dt: ``>=0.2``
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on r-hmisc: ``>=4.1-1``
   :depends on r-matrix: ``>=1.2-17``
   :depends on r-tibble: ``>=2.1.3``
   :depends on r-tidyr: ``>=0.8.3``
   :depends on r-yaml: ``>=2.2.0``
   :depends on r-zcompositions: ``>=1.0.3.1``

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

    pixi global install r-qiime2r

to add into an existing workspace instead, run::

    pixi add r-qiime2r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-qiime2r

Alternatively, to install into a new environment, run::

    conda create -n envname r-qiime2r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-qiime2r:<tag>

(see `r-qiime2r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-qiime2r| image:: https://img.shields.io/conda/dn/bioconda/r-qiime2r.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qiime2r
   :alt:   (downloads)
.. |docker_r-qiime2r| image:: https://quay.io/repository/biocontainers/r-qiime2r/status
   :target: https://quay.io/repository/biocontainers/r-qiime2r
.. _`r-qiime2r/tags`: https://quay.io/repository/biocontainers/r-qiime2r?tab=tags


.. raw:: html

    <script>
        var package = "r-qiime2r";
        var versions = ["0.99.20","0.99.20","0.99.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qiime2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qiime2r/README.html