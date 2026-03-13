:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2frmavecs'
.. highlight: bash

bioconductor-hgu133plus2frmavecs
================================

.. conda:recipe:: bioconductor-hgu133plus2frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type hgu133plus2

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/hgu133plus2frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hgu133plus2frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2frmavecs/meta.yaml>`_

   This package was created by frmaTools version 1.19.3 and hgu133ahsentrezgcdf version 19.0.0.


.. conda:package:: bioconductor-hgu133plus2frmavecs

   |downloads_bioconductor-hgu133plus2frmavecs| |docker_bioconductor-hgu133plus2frmavecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-15</code>,  <code>1.5.0-14</code>,  <code>1.5.0-13</code>,  <code>1.5.0-12</code>,  <code>1.5.0-11</code>,  <code>1.5.0-10</code>,  <code>1.5.0-9</code>,  <code>1.5.0-8</code>,  <code>1.5.0-7</code>,  </span></summary>
      

      ``1.5.0-15``,  ``1.5.0-14``,  ``1.5.0-13``,  ``1.5.0-12``,  ``1.5.0-11``,  ``1.5.0-10``,  ``1.5.0-9``,  ``1.5.0-8``,  ``1.5.0-7``,  ``1.5.0-6``,  ``1.5.0-5``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
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

    pixi global install bioconductor-hgu133plus2frmavecs

to add into an existing workspace instead, run::

    pixi add bioconductor-hgu133plus2frmavecs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hgu133plus2frmavecs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hgu133plus2frmavecs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hgu133plus2frmavecs:<tag>

(see `bioconductor-hgu133plus2frmavecs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hgu133plus2frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs
.. _`bioconductor-hgu133plus2frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133plus2frmavecs";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2frmavecs/README.html