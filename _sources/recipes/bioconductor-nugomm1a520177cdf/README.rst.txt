:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nugomm1a520177cdf'
.. highlight: bash

bioconductor-nugomm1a520177cdf
==============================

.. conda:recipe:: bioconductor-nugomm1a520177cdf
   :replaces_section_title:
   :noindex:

   nugomm1a520177cdf

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/nugomm1a520177cdf.html
   :license: LGPL
   :recipe: /`bioconductor-nugomm1a520177cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugomm1a520177cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugomm1a520177cdf/meta.yaml>`_

   A package containing an environment representing the NuGO\_Mm1a520177.cdf file.


.. conda:package:: bioconductor-nugomm1a520177cdf

   |downloads_bioconductor-nugomm1a520177cdf| |docker_bioconductor-nugomm1a520177cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-14</code>,  <code>3.4.0-13</code>,  <code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  </span></summary>
      

      ``3.4.0-14``,  ``3.4.0-13``,  ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
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

    pixi global install bioconductor-nugomm1a520177cdf

to add into an existing workspace instead, run::

    pixi add bioconductor-nugomm1a520177cdf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nugomm1a520177cdf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nugomm1a520177cdf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nugomm1a520177cdf:<tag>

(see `bioconductor-nugomm1a520177cdf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nugomm1a520177cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nugomm1a520177cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nugomm1a520177cdf
   :alt:   (downloads)
.. |docker_bioconductor-nugomm1a520177cdf| image:: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177cdf
.. _`bioconductor-nugomm1a520177cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nugomm1a520177cdf";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nugomm1a520177cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nugomm1a520177cdf/README.html