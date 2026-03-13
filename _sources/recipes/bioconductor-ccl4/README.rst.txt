:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccl4'
.. highlight: bash

bioconductor-ccl4
=================

.. conda:recipe:: bioconductor-ccl4
   :replaces_section_title:
   :noindex:

   Carbon Tetrachloride \(CCl4\) treated hepatocytes

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CCl4.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ccl4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccl4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccl4/meta.yaml>`_

   NChannelSet for rat hepatocytes treated with Carbon Tetrachloride \(CCl4\) data from LGC company.


.. conda:package:: bioconductor-ccl4

   |downloads_bioconductor-ccl4| |docker_bioconductor-ccl4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on curl: 
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

    pixi global install bioconductor-ccl4

to add into an existing workspace instead, run::

    pixi add bioconductor-ccl4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ccl4

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ccl4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ccl4:<tag>

(see `bioconductor-ccl4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ccl4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccl4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccl4
   :alt:   (downloads)
.. |docker_bioconductor-ccl4| image:: https://quay.io/repository/biocontainers/bioconductor-ccl4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccl4
.. _`bioconductor-ccl4/tags`: https://quay.io/repository/biocontainers/bioconductor-ccl4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccl4";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccl4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccl4/README.html