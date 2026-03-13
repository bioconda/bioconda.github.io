:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-assign'
.. highlight: bash

bioconductor-assign
===================

.. conda:recipe:: bioconductor-assign
   :replaces_section_title:
   :noindex:

   Adaptive Signature Selection and InteGratioN \(ASSIGN\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASSIGN.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-assign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign/meta.yaml>`_

   ASSIGN is a computational tool to evaluate the pathway deregulation\/activation status in individual patient samples. ASSIGN employs a flexible Bayesian factor analysis approach that adapts predetermined pathway signatures derived either from knowledge\-based literature or from perturbation experiments to the cell\-\/tissue\-specific pathway signatures. The deregulation\/activation level of each context\-specific pathway is quantified to a score\, which represents the extent to which a patient sample encompasses the pathway deregulation\/activation signature.


.. conda:package:: bioconductor-assign

   |downloads_bioconductor-assign| |docker_bioconductor-assign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-msm: 
   :depends on r-rlab: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-assign

to add into an existing workspace instead, run::

    pixi add bioconductor-assign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-assign

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-assign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-assign:<tag>

(see `bioconductor-assign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-assign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-assign
   :alt:   (downloads)
.. |docker_bioconductor-assign| image:: https://quay.io/repository/biocontainers/bioconductor-assign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assign
.. _`bioconductor-assign/tags`: https://quay.io/repository/biocontainers/bioconductor-assign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-assign";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assign/README.html