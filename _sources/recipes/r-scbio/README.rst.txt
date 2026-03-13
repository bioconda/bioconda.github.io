:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scbio'
.. highlight: bash

r-scbio
=======

.. conda:recipe:: r-scbio
   :replaces_section_title:
   :noindex:

   Cellular population mapping \(CPM\) a deconvolution algorithm in which single\-cell genomics is required in only one or a few samples\, where in other samples of the same tissue\, only bulk genomics is measured and the underlying fine resolution cellular heterogeneity is inferred.

   :homepage: https://github.com/amitfrish/scBio
   :license: GPL / GPL-2
   :recipe: /`r-scbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scbio/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0355-5`

   


.. conda:package:: r-scbio

   |downloads_r-scbio| |docker_r-scbio|

   :versions:
      
      

      ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dosnow: 
   :depends on r-fields: 
   :depends on r-foreach: 
   :depends on r-liblinear: 
   :depends on r-raster: 
   :depends on r-sp: 

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

    pixi global install r-scbio

to add into an existing workspace instead, run::

    pixi add r-scbio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scbio

Alternatively, to install into a new environment, run::

    conda create -n envname r-scbio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scbio:<tag>

(see `r-scbio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scbio| image:: https://img.shields.io/conda/dn/bioconda/r-scbio.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scbio
   :alt:   (downloads)
.. |docker_r-scbio| image:: https://quay.io/repository/biocontainers/r-scbio/status
   :target: https://quay.io/repository/biocontainers/r-scbio
.. _`r-scbio/tags`: https://quay.io/repository/biocontainers/r-scbio?tab=tags


.. raw:: html

    <script>
        var package = "r-scbio";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scbio/README.html