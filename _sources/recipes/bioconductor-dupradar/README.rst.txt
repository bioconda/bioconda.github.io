:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dupradar'
.. highlight: bash

bioconductor-dupradar
=====================

.. conda:recipe:: bioconductor-dupradar
   :replaces_section_title:
   :noindex:

   Assessment of duplication rates in RNA\-Seq datasets

   :homepage: https://bioconductor.org/packages/3.21/bioc/html/dupRadar.html
   :license: GPL-3
   :recipe: /`bioconductor-dupradar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar/meta.yaml>`_
   :links: biotools: :biotools:`dupradar`

   Duplication rate quality control for RNA\-Seq datasets.


.. conda:package:: bioconductor-dupradar

   |downloads_bioconductor-dupradar| |docker_bioconductor-dupradar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-2``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rsubread: ``>=2.24.0,<2.25.0``
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

    pixi global install bioconductor-dupradar

to add into an existing workspace instead, run::

    pixi add bioconductor-dupradar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dupradar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dupradar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dupradar:<tag>

(see `bioconductor-dupradar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dupradar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dupradar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dupradar
   :alt:   (downloads)
.. |docker_bioconductor-dupradar| image:: https://quay.io/repository/biocontainers/bioconductor-dupradar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dupradar
.. _`bioconductor-dupradar/tags`: https://quay.io/repository/biocontainers/bioconductor-dupradar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dupradar";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dupradar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dupradar/README.html