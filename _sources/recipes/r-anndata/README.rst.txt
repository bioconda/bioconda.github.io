:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-anndata'
.. highlight: bash

r-anndata
=========

.. conda:recipe:: r-anndata
   :replaces_section_title:
   :noindex:

   A \'reticulate\' wrapper for the Python package \'anndata\'. Provides a scalable way of keeping track of data and learned annotations.  Used to read from and write to the h5ad file format.

   :homepage: https://github.com/dynverse/anndata
   :license: MIT / MIT
   :recipe: /`r-anndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1382-0`

   


.. conda:package:: r-anndata

   |downloads_r-anndata| |docker_r-anndata|

   :versions:
      
      

      ``0.7.5.6-2``,  ``0.7.5.6-1``,  ``0.7.5.6-0``,  ``0.7.5.4-2``,  ``0.7.5.4-1``,  ``0.7.5.4-0``,  ``0.7.5.2-0``

      

   
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-r6: 
   :depends on r-reticulate: ``>=1.17``

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

    pixi global install r-anndata

to add into an existing workspace instead, run::

    pixi add r-anndata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-anndata

Alternatively, to install into a new environment, run::

    conda create -n envname r-anndata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-anndata:<tag>

(see `r-anndata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-anndata| image:: https://img.shields.io/conda/dn/bioconda/r-anndata.svg?style=flat
   :target: https://anaconda.org/bioconda/r-anndata
   :alt:   (downloads)
.. |docker_r-anndata| image:: https://quay.io/repository/biocontainers/r-anndata/status
   :target: https://quay.io/repository/biocontainers/r-anndata
.. _`r-anndata/tags`: https://quay.io/repository/biocontainers/r-anndata?tab=tags


.. raw:: html

    <script>
        var package = "r-anndata";
        var versions = ["0.7.5.6","0.7.5.6","0.7.5.6","0.7.5.4","0.7.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-anndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-anndata/README.html