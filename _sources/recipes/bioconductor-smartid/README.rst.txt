:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smartid'
.. highlight: bash

bioconductor-smartid
====================

.. conda:recipe:: bioconductor-smartid
   :replaces_section_title:
   :noindex:

   Scoring and Marker Selection Method Based on Modified TF\-IDF

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/smartid.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smartid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smartid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smartid/meta.yaml>`_

   This package enables automated selection of group specific signature\, especially for rare population. The package is developed for generating specifc lists of signature genes based on Term Frequency\-Inverse Document Frequency \(TF\-IDF\) modified methods. It can also be used as a new gene\-set scoring method or data transformation method. Multiple visualization functions are implemented in this package.


.. conda:package:: bioconductor-smartid

   |downloads_bioconductor-smartid| |docker_bioconductor-smartid|

   :versions:
      
      

      ``1.6.1-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-mclust: 
   :depends on r-mixtools: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-smartid

to add into an existing workspace instead, run::

    pixi add bioconductor-smartid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-smartid

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-smartid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-smartid:<tag>

(see `bioconductor-smartid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-smartid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smartid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smartid
   :alt:   (downloads)
.. |docker_bioconductor-smartid| image:: https://quay.io/repository/biocontainers/bioconductor-smartid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smartid
.. _`bioconductor-smartid/tags`: https://quay.io/repository/biocontainers/bioconductor-smartid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smartid";
        var versions = ["1.6.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smartid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smartid/README.html