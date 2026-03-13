:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich.mmusculus.background'
.. highlight: bash

bioconductor-pwmenrich.mmusculus.background
===========================================

.. conda:recipe:: bioconductor-pwmenrich.mmusculus.background
   :replaces_section_title:
   :noindex:

   M. musculus background for PWMEnrich

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/PWMEnrich.Mmusculus.background.html
   :license: GPL-3
   :recipe: /`bioconductor-pwmenrich.mmusculus.background <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background/meta.yaml>`_

   PWMEnrich pre\-compiled background objects for M.musculus \(mouse\) and MotifDb M. musculus motifs.


.. conda:package:: bioconductor-pwmenrich.mmusculus.background

   |downloads_bioconductor-pwmenrich.mmusculus.background| |docker_bioconductor-pwmenrich.mmusculus.background|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.44.0-0</code>,  <code>4.40.0-0</code>,  <code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.32.0-0</code>,  <code>4.28.0-1</code>,  <code>4.28.0-0</code>,  <code>4.26.1-0</code>,  <code>4.24.0-1</code>,  </span></summary>
      

      ``4.44.0-0``,  ``4.40.0-0``,  ``4.36.0-0``,  ``4.34.0-0``,  ``4.32.0-0``,  ``4.28.0-1``,  ``4.28.0-0``,  ``4.26.1-0``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.18.0-1``,  ``4.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-pwmenrich: ``>=4.46.0,<4.47.0``
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

    pixi global install bioconductor-pwmenrich.mmusculus.background

to add into an existing workspace instead, run::

    pixi add bioconductor-pwmenrich.mmusculus.background

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pwmenrich.mmusculus.background

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pwmenrich.mmusculus.background

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pwmenrich.mmusculus.background:<tag>

(see `bioconductor-pwmenrich.mmusculus.background/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pwmenrich.mmusculus.background| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.mmusculus.background.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich.mmusculus.background
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich.mmusculus.background| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background
.. _`bioconductor-pwmenrich.mmusculus.background/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich.mmusculus.background";
        var versions = ["4.44.0","4.40.0","4.36.0","4.34.0","4.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html