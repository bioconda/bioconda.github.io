:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-difflogo'
.. highlight: bash

bioconductor-difflogo
=====================

.. conda:recipe:: bioconductor-difflogo
   :replaces_section_title:
   :noindex:

   DiffLogo\: A comparative visualisation of biooligomer motifs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DiffLogo.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-difflogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo/meta.yaml>`_

   DiffLogo is an easy\-to\-use tool to visualize motif differences.


.. conda:package:: bioconductor-difflogo

   |downloads_bioconductor-difflogo| |docker_bioconductor-difflogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.30.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cba: 

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

    pixi global install bioconductor-difflogo

to add into an existing workspace instead, run::

    pixi add bioconductor-difflogo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-difflogo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-difflogo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-difflogo:<tag>

(see `bioconductor-difflogo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-difflogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-difflogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-difflogo
   :alt:   (downloads)
.. |docker_bioconductor-difflogo| image:: https://quay.io/repository/biocontainers/bioconductor-difflogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-difflogo
.. _`bioconductor-difflogo/tags`: https://quay.io/repository/biocontainers/bioconductor-difflogo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-difflogo";
        var versions = ["2.34.0","2.30.0","2.26.0","2.26.0","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-difflogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-difflogo/README.html