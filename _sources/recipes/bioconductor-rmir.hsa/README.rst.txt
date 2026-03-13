:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hsa'
.. highlight: bash

bioconductor-rmir.hsa
=====================

.. conda:recipe:: bioconductor-rmir.hsa
   :replaces_section_title:
   :noindex:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/RmiR.hsa.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa/meta.yaml>`_

   Various databases of microRNA Targets


.. conda:package:: bioconductor-rmir.hsa

   |downloads_bioconductor-rmir.hsa| |docker_bioconductor-rmir.hsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-14</code>,  <code>1.0.5-13</code>,  <code>1.0.5-12</code>,  <code>1.0.5-11</code>,  <code>1.0.5-10</code>,  <code>1.0.5-9</code>,  <code>1.0.5-8</code>,  <code>1.0.5-7</code>,  <code>1.0.5-6</code>,  </span></summary>
      

      ``1.0.5-14``,  ``1.0.5-13``,  ``1.0.5-12``,  ``1.0.5-11``,  ``1.0.5-10``,  ``1.0.5-9``,  ``1.0.5-8``,  ``1.0.5-7``,  ``1.0.5-6``,  ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-0``

      
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

    pixi global install bioconductor-rmir.hsa

to add into an existing workspace instead, run::

    pixi add bioconductor-rmir.hsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rmir.hsa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rmir.hsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rmir.hsa:<tag>

(see `bioconductor-rmir.hsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rmir.hsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir.hsa
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hsa| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa
.. _`bioconductor-rmir.hsa/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmir.hsa";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html