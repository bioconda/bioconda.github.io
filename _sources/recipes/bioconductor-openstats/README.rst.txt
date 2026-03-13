:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openstats'
.. highlight: bash

bioconductor-openstats
======================

.. conda:recipe:: bioconductor-openstats
   :replaces_section_title:
   :noindex:

   A Robust and Scalable Software Package for Reproducible Analysis of High\-Throughput genotype\-phenotype association

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OpenStats.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-openstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats/meta.yaml>`_

   Package contains several methods for statistical analysis of genotype to phenotype association in high\-throughput screening pipelines.


.. conda:package:: bioconductor-openstats

   |downloads_bioconductor-openstats| |docker_bioconductor-openstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-aiccmodavg: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-car: 
   :depends on r-hmisc: 
   :depends on r-jsonlite: 
   :depends on r-knitr: 
   :depends on r-mass: 
   :depends on r-nlme: 
   :depends on r-rlist: 
   :depends on r-summarytools: 

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

    pixi global install bioconductor-openstats

to add into an existing workspace instead, run::

    pixi add bioconductor-openstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-openstats

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-openstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-openstats:<tag>

(see `bioconductor-openstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-openstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openstats
   :alt:   (downloads)
.. |docker_bioconductor-openstats| image:: https://quay.io/repository/biocontainers/bioconductor-openstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openstats
.. _`bioconductor-openstats/tags`: https://quay.io/repository/biocontainers/bioconductor-openstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openstats";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openstats/README.html