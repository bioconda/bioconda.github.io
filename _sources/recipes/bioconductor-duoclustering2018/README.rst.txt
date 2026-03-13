:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-duoclustering2018'
.. highlight: bash

bioconductor-duoclustering2018
==============================

.. conda:recipe:: bioconductor-duoclustering2018
   :replaces_section_title:
   :noindex:

   Data\, Clustering Results and Visualization Functions From Duò et al \(2018\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/DuoClustering2018.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-duoclustering2018 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018/meta.yaml>`_

   Preprocessed experimental and simulated scRNA\-seq data sets used for evaluation of clustering methods for scRNA\-seq data in Duò et al \(2018\). Also contains results from applying several clustering methods to each of the data sets\, and functions for plotting method performance.


.. conda:package:: bioconductor-duoclustering2018

   |downloads_bioconductor-duoclustering2018| |docker_bioconductor-duoclustering2018|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-magrittr: 
   :depends on r-mclust: 
   :depends on r-purrr: 
   :depends on r-reshape2: 
   :depends on r-tidyr: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-duoclustering2018

to add into an existing workspace instead, run::

    pixi add bioconductor-duoclustering2018

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-duoclustering2018

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-duoclustering2018

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-duoclustering2018:<tag>

(see `bioconductor-duoclustering2018/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-duoclustering2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-duoclustering2018.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-duoclustering2018
   :alt:   (downloads)
.. |docker_bioconductor-duoclustering2018| image:: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018
.. _`bioconductor-duoclustering2018/tags`: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-duoclustering2018";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html