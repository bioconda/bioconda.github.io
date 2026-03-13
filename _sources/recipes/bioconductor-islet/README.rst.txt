:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-islet'
.. highlight: bash

bioconductor-islet
==================

.. conda:recipe:: bioconductor-islet
   :replaces_section_title:
   :noindex:

   Individual\-Specific ceLl typE referencing Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ISLET.html
   :license: GPL-2
   :recipe: /`bioconductor-islet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet/meta.yaml>`_

   ISLET is a method to conduct signal deconvolution for general \-omics data. It can estimate the individual\-specific and cell\-type\-specific reference panels\, when there are multiple samples observed from each subject. It takes the input of the observed mixture data \(feature by sample matrix\)\, and the cell type mixture proportions \(sample by cell type matrix\)\, and the sample\-to\-subject information. It can solve for the reference panel on the individual\-basis and conduct test to identify cell\-type\-specific differential expression \(csDE\) genes. It also improves estimated cell type mixture proportions by integrating personalized reference panels.


.. conda:package:: bioconductor-islet

   |downloads_bioconductor-islet| |docker_bioconductor-islet|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lme4: 
   :depends on r-matrix: 
   :depends on r-nnls: 
   :depends on r-purrr: 

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

    pixi global install bioconductor-islet

to add into an existing workspace instead, run::

    pixi add bioconductor-islet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-islet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-islet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-islet:<tag>

(see `bioconductor-islet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-islet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-islet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-islet
   :alt:   (downloads)
.. |docker_bioconductor-islet| image:: https://quay.io/repository/biocontainers/bioconductor-islet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-islet
.. _`bioconductor-islet/tags`: https://quay.io/repository/biocontainers/bioconductor-islet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-islet";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-islet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-islet/README.html