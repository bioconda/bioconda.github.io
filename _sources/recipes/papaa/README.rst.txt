:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'papaa'
.. highlight: bash

papaa
=====

.. conda:recipe:: papaa
   :replaces_section_title:
   :noindex:

   PAPAA tools to measure mutation specific pathway acitvity in TCGA pancancer dataset

   :homepage: https://github.com/nvk747/papaa
   :license: BSD / BSD-3-Clause License
   :recipe: /`papaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papaa/meta.yaml>`_

   


.. conda:package:: papaa

   |downloads_papaa| |docker_papaa|

   :versions:
      
      

      ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on bunch: ``>=1.0``
   :depends on numexpr: ``>=2.6``
   :depends on numpy: ``>=1.14``
   :depends on pandas: ``>=0.23``
   :depends on plotnine: ``>=0.3``
   :depends on python: ``>=3.6``
   :depends on r-cowplot: ``>=0.9``
   :depends on r-dplyr: ``>=0.7``
   :depends on r-ggplot2: ``>=3.0``
   :depends on r-ggpmisc: ``>=0.3``
   :depends on r-ggrepel: ``>=0.8``
   :depends on r-hmisc: ``>=4.1.1``
   :depends on r-optparse: ``>=1.6``
   :depends on r-pheatmap: ``>=1.0``
   :depends on r-readr: ``>=1.1``
   :depends on scikit-learn: ``>=0.19``
   :depends on seaborn: ``>=0.8``
   :depends on statsmodels: ``>=0.9``

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

    pixi global install papaa

to add into an existing workspace instead, run::

    pixi add papaa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install papaa

Alternatively, to install into a new environment, run::

    conda create -n envname papaa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/papaa:<tag>

(see `papaa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_papaa| image:: https://img.shields.io/conda/dn/bioconda/papaa.svg?style=flat
   :target: https://anaconda.org/bioconda/papaa
   :alt:   (downloads)
.. |docker_papaa| image:: https://quay.io/repository/biocontainers/papaa/status
   :target: https://quay.io/repository/biocontainers/papaa
.. _`papaa/tags`: https://quay.io/repository/biocontainers/papaa?tab=tags


.. raw:: html

    <script>
        var package = "papaa";
        var versions = ["0.1.9","0.1.9","0.1.8","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/papaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/papaa/README.html