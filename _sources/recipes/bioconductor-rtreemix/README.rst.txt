:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtreemix'
.. highlight: bash

bioconductor-rtreemix
=====================

.. conda:recipe:: bioconductor-rtreemix
   :replaces_section_title:
   :noindex:

   Rtreemix\: Mutagenetic trees mixture models.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rtreemix.html
   :license: LGPL
   :recipe: /`bioconductor-rtreemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix/meta.yaml>`_
   :links: biotools: :biotools:`rtreemix`, doi: :doi:`10.1093/bioinformatics/btn410`

   Rtreemix is a package that offers an environment for estimating the mutagenetic trees mixture models from cross\-sectional data and using them for various predictions. It includes functions for fitting the trees mixture models\, likelihood computations\, model comparisons\, waiting time estimations\, stability analysis\, etc.


.. conda:package:: bioconductor-rtreemix

   |downloads_bioconductor-rtreemix| |docker_bioconductor-rtreemix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-hmisc: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-rtreemix

to add into an existing workspace instead, run::

    pixi add bioconductor-rtreemix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rtreemix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rtreemix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rtreemix:<tag>

(see `bioconductor-rtreemix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rtreemix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtreemix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtreemix
   :alt:   (downloads)
.. |docker_bioconductor-rtreemix| image:: https://quay.io/repository/biocontainers/bioconductor-rtreemix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtreemix
.. _`bioconductor-rtreemix/tags`: https://quay.io/repository/biocontainers/bioconductor-rtreemix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtreemix";
        var versions = ["1.68.0","1.68.0","1.64.0","1.62.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html