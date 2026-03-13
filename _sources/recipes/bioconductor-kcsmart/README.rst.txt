:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kcsmart'
.. highlight: bash

bioconductor-kcsmart
====================

.. conda:recipe:: bioconductor-kcsmart
   :replaces_section_title:
   :noindex:

   Multi sample aCGH analysis package using kernel convolution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/KCsmart.html
   :license: GPL-3
   :recipe: /`bioconductor-kcsmart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart/meta.yaml>`_
   :links: biotools: :biotools:`kcsmart`, doi: :doi:`10.1186/1756-0500-3-298`

   Multi sample aCGH analysis package using kernel convolution


.. conda:package:: bioconductor-kcsmart

   |downloads_bioconductor-kcsmart| |docker_bioconductor-kcsmart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68.0-0</code>,  <code>2.64.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  </span></summary>
      

      ``2.68.0-0``,  ``2.64.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-siggenes: ``>=1.84.0,<1.85.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-kernsmooth: 

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

    pixi global install bioconductor-kcsmart

to add into an existing workspace instead, run::

    pixi add bioconductor-kcsmart

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-kcsmart

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-kcsmart

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-kcsmart:<tag>

(see `bioconductor-kcsmart/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-kcsmart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kcsmart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kcsmart
   :alt:   (downloads)
.. |docker_bioconductor-kcsmart| image:: https://quay.io/repository/biocontainers/bioconductor-kcsmart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kcsmart
.. _`bioconductor-kcsmart/tags`: https://quay.io/repository/biocontainers/bioconductor-kcsmart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kcsmart";
        var versions = ["2.68.0","2.64.0","2.60.0","2.58.0","2.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html