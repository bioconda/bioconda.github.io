:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kmcut'
.. highlight: bash

bioconductor-kmcut
==================

.. conda:recipe:: bioconductor-kmcut
   :replaces_section_title:
   :noindex:

   Optimized Kaplan Meier analysis and identification and validation of prognostic biomarkers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/kmcut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-kmcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kmcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kmcut/meta.yaml>`_

   The purpose of the package is to identify prognostic biomarkers and an optimal numeric cutoff for each biomarker that can be used to stratify a group of test subjects \(samples\) into two sub\-groups with significantly different survival \(better vs. worse\). The package was developed for the analysis of gene expression data\, such as RNA\-seq. However\, it can be used with any quantitative variable that has a sufficiently large proportion of unique values.


.. conda:package:: bioconductor-kmcut

   |downloads_bioconductor-kmcut| |docker_bioconductor-kmcut|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-pracma: 
   :depends on r-survival: 

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

    pixi global install bioconductor-kmcut

to add into an existing workspace instead, run::

    pixi add bioconductor-kmcut

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-kmcut

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-kmcut

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-kmcut:<tag>

(see `bioconductor-kmcut/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-kmcut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kmcut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kmcut
   :alt:   (downloads)
.. |docker_bioconductor-kmcut| image:: https://quay.io/repository/biocontainers/bioconductor-kmcut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kmcut
.. _`bioconductor-kmcut/tags`: https://quay.io/repository/biocontainers/bioconductor-kmcut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kmcut";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kmcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kmcut/README.html