:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-calm'
.. highlight: bash

bioconductor-calm
=================

.. conda:recipe:: bioconductor-calm
   :replaces_section_title:
   :noindex:

   Covariate Assisted Large\-scale Multiple testing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/calm.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-calm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calm/meta.yaml>`_

   Statistical methods for multiple testing with covariate information. Traditional multiple testing methods only consider a list of test statistics\, such as p\-values. Our methods incorporate the auxiliary information\, such as the lengths of gene coding regions or the minor allele frequencies of SNPs\, to improve power.


.. conda:package:: bioconductor-calm

   |downloads_bioconductor-calm| |docker_bioconductor-calm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mgcv: 

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

    pixi global install bioconductor-calm

to add into an existing workspace instead, run::

    pixi add bioconductor-calm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-calm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-calm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-calm:<tag>

(see `bioconductor-calm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-calm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-calm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-calm
   :alt:   (downloads)
.. |docker_bioconductor-calm| image:: https://quay.io/repository/biocontainers/bioconductor-calm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-calm
.. _`bioconductor-calm/tags`: https://quay.io/repository/biocontainers/bioconductor-calm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-calm";
        var versions = ["1.24.0","1.20.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-calm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-calm/README.html