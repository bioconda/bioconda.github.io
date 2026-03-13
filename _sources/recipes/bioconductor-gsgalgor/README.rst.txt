:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsgalgor'
.. highlight: bash

bioconductor-gsgalgor
=====================

.. conda:recipe:: bioconductor-gsgalgor
   :replaces_section_title:
   :noindex:

   An Evolutionary Framework for the Identification and Study of Prognostic Gene Expression Signatures in Cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GSgalgoR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gsgalgor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsgalgor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsgalgor/meta.yaml>`_

   A multi\-objective optimization algorithm for disease sub\-type discovery based on a non\-dominated sorting genetic algorithm. The \'Galgo\' framework combines the advantages of clustering algorithms for grouping heterogeneous \'omics\' data and the searching properties of genetic algorithms for feature selection. The algorithm search for the optimal number of clusters determination considering the features that maximize the survival difference between sub\-types while keeping cluster consistency high.


.. conda:package:: bioconductor-gsgalgor

   |downloads_bioconductor-gsgalgor| |docker_bioconductor-gsgalgor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-matchingr: 
   :depends on r-nsga2r: 
   :depends on r-proxy: 
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

    pixi global install bioconductor-gsgalgor

to add into an existing workspace instead, run::

    pixi add bioconductor-gsgalgor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gsgalgor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gsgalgor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gsgalgor:<tag>

(see `bioconductor-gsgalgor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gsgalgor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsgalgor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsgalgor
   :alt:   (downloads)
.. |docker_bioconductor-gsgalgor| image:: https://quay.io/repository/biocontainers/bioconductor-gsgalgor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsgalgor
.. _`bioconductor-gsgalgor/tags`: https://quay.io/repository/biocontainers/bioconductor-gsgalgor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsgalgor";
        var versions = ["1.20.0","1.16.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsgalgor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsgalgor/README.html