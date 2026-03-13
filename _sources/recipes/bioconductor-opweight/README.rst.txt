:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opweight'
.. highlight: bash

bioconductor-opweight
=====================

.. conda:recipe:: bioconductor-opweight
   :replaces_section_title:
   :noindex:

   Optimal p\-value weighting with independent information

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OPWeight.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-opweight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opweight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opweight/meta.yaml>`_

   This package perform weighted\-pvalue based multiple hypothesis test and provides corresponding information such as ranking probability\, weight\, significant tests\, etc . To conduct this testing procedure\, the testing method apply a probabilistic relationship between the test rank and the corresponding test effect size.


.. conda:package:: bioconductor-opweight

   |downloads_bioconductor-opweight| |docker_bioconductor-opweight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-opweight

to add into an existing workspace instead, run::

    pixi add bioconductor-opweight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-opweight

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-opweight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-opweight:<tag>

(see `bioconductor-opweight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-opweight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opweight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opweight
   :alt:   (downloads)
.. |docker_bioconductor-opweight| image:: https://quay.io/repository/biocontainers/bioconductor-opweight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opweight
.. _`bioconductor-opweight/tags`: https://quay.io/repository/biocontainers/bioconductor-opweight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-opweight";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opweight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opweight/README.html