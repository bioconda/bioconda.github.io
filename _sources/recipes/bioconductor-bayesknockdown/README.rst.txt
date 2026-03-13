:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesknockdown'
.. highlight: bash

bioconductor-bayesknockdown
===========================

.. conda:recipe:: bioconductor-bayesknockdown
   :replaces_section_title:
   :noindex:

   BayesKnockdown\: Posterior Probabilities for Edges from Knockdown Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BayesKnockdown.html
   :license: GPL-3
   :recipe: /`bioconductor-bayesknockdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown/meta.yaml>`_

   A simple\, fast Bayesian method for computing posterior probabilities for relationships between a single predictor variable and multiple potential outcome variables\, incorporating prior probabilities of relationships. In the context of knockdown experiments\, the predictor variable is the knocked\-down gene\, while the other genes are potential targets. Can also be used for differential expression\/2\-class data.


.. conda:package:: bioconductor-bayesknockdown

   |downloads_bioconductor-bayesknockdown| |docker_bioconductor-bayesknockdown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-bayesknockdown

to add into an existing workspace instead, run::

    pixi add bioconductor-bayesknockdown

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bayesknockdown

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bayesknockdown

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bayesknockdown:<tag>

(see `bioconductor-bayesknockdown/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bayesknockdown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesknockdown.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesknockdown
   :alt:   (downloads)
.. |docker_bioconductor-bayesknockdown| image:: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown
.. _`bioconductor-bayesknockdown/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bayesknockdown";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html