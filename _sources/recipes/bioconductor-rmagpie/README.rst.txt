:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmagpie'
.. highlight: bash

bioconductor-rmagpie
====================

.. conda:recipe:: bioconductor-rmagpie
   :replaces_section_title:
   :noindex:

   MicroArray Gene\-expression\-based Program In Error rate estimation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rmagpie.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rmagpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie/meta.yaml>`_

   Microarray Classification is designed for both biologists and statisticians. It offers the ability to train a classifier on a labelled microarray dataset and to then use that classifier to predict the class of new observations. A range of modern classifiers are available\, including support vector machines \(SVMs\)\, nearest shrunken centroids \(NSCs\)... Advanced methods are provided to estimate the predictive error rate and to report the subset of genes which appear essential in discriminating between classes.


.. conda:package:: bioconductor-rmagpie

   |downloads_bioconductor-rmagpie| |docker_bioconductor-rmagpie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-kernlab: 
   :depends on r-pamr: 

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

    pixi global install bioconductor-rmagpie

to add into an existing workspace instead, run::

    pixi add bioconductor-rmagpie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rmagpie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rmagpie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rmagpie:<tag>

(see `bioconductor-rmagpie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rmagpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmagpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmagpie
   :alt:   (downloads)
.. |docker_bioconductor-rmagpie| image:: https://quay.io/repository/biocontainers/bioconductor-rmagpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmagpie
.. _`bioconductor-rmagpie/tags`: https://quay.io/repository/biocontainers/bioconductor-rmagpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmagpie";
        var versions = ["1.66.0","1.62.0","1.58.0","1.56.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html