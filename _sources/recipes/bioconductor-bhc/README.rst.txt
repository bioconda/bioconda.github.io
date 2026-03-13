:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bhc'
.. highlight: bash

bioconductor-bhc
================

.. conda:recipe:: bioconductor-bhc
   :replaces_section_title:
   :noindex:

   Bayesian Hierarchical Clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BHC.html
   :license: GPL-3
   :recipe: /`bioconductor-bhc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bhc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bhc/meta.yaml>`_
   :links: biotools: :biotools:`bhc`, doi: :doi:`10.1186/1471-2105-10-242`

   The method performs bottom\-up hierarchical clustering\, using a Dirichlet Process \(infinite mixture\) to model uncertainty in the data and Bayesian model selection to decide at each step which clusters to merge.  This avoids several limitations of traditional methods\, for example how many clusters there should be and how to choose a principled distance metric.  This implementation accepts multinomial \(i.e. discrete\, with 2\+ categories\) or time\-series data. This version also includes a randomised algorithm which is more efficient for larger data sets.


.. conda:package:: bioconductor-bhc

   |downloads_bioconductor-bhc| |docker_bioconductor-bhc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-bhc

to add into an existing workspace instead, run::

    pixi add bioconductor-bhc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bhc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bhc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bhc:<tag>

(see `bioconductor-bhc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bhc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bhc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bhc
   :alt:   (downloads)
.. |docker_bioconductor-bhc| image:: https://quay.io/repository/biocontainers/bioconductor-bhc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bhc
.. _`bioconductor-bhc/tags`: https://quay.io/repository/biocontainers/bioconductor-bhc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bhc";
        var versions = ["1.54.0","1.52.0","1.50.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bhc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bhc/README.html