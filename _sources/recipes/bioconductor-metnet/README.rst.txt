:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metnet'
.. highlight: bash

bioconductor-metnet
===================

.. conda:recipe:: bioconductor-metnet
   :replaces_section_title:
   :noindex:

   Inferring metabolic networks from untargeted high\-resolution mass spectrometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetNet.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet/meta.yaml>`_

   MetNet contains functionality to infer metabolic network topologies from quantitative data and high\-resolution mass\/charge information. Using statistical models \(including correlation\, mutual information\, regression and Bayes statistics\) and quantitative data \(intensity values of features\) adjacency matrices are inferred that can be combined to a consensus matrix. Mass differences calculated between mass\/charge values of features will be matched against a data frame of supplied mass\/charge differences referring to transformations of enzymatic activities. In a third step\, the two levels of information are combined to form a adjacency matrix inferred from both quantitative and structure information.


.. conda:package:: bioconductor-metnet

   |downloads_bioconductor-metnet| |docker_bioconductor-metnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genie3: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bnlearn: ``>=4.3``
   :depends on r-corpcor: ``>=1.6.10``
   :depends on r-dplyr: ``>=1.0.3``
   :depends on r-genenet: ``>=1.2.15``
   :depends on r-ggplot2: ``>=3.3.3``
   :depends on r-parmigene: ``>=1.0.2``
   :depends on r-psych: ``>=2.1.6``
   :depends on r-rlang: ``>=0.4.10``
   :depends on r-stabs: ``>=0.6``
   :depends on r-tibble: ``>=3.0.5``
   :depends on r-tidyr: ``>=1.1.2``

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

    pixi global install bioconductor-metnet

to add into an existing workspace instead, run::

    pixi add bioconductor-metnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metnet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metnet:<tag>

(see `bioconductor-metnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metnet
   :alt:   (downloads)
.. |docker_bioconductor-metnet| image:: https://quay.io/repository/biocontainers/bioconductor-metnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metnet
.. _`bioconductor-metnet/tags`: https://quay.io/repository/biocontainers/bioconductor-metnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metnet";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metnet/README.html