:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-director'
.. highlight: bash

bioconductor-director
=====================

.. conda:recipe:: bioconductor-director
   :replaces_section_title:
   :noindex:

   A dynamic visualization tool of multi\-level data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Director.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-director <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-director>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-director/meta.yaml>`_
   :links: biotools: :biotools:`director`, doi: :doi:`10.1038/nmeth.3252`

   Director is an R package designed to streamline the visualization of molecular effects in regulatory cascades. It utilizes the R package htmltools and a modified Sankey plugin of the JavaScript library D3 to provide a fast and easy\, browser\-enabled solution to discovering potentially interesting downstream effects of regulatory and\/or co\-expressed molecules. The diagrams are robust\, interactive\, and packaged as highly\-portable HTML files that eliminate the need for third\-party software to view. This enables a straightforward approach for scientists to interpret the data produced\, and bioinformatics developers an alternative means to present relevant data.


.. conda:package:: bioconductor-director

   |downloads_bioconductor-director| |docker_bioconductor-director|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-htmltools: 

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

    pixi global install bioconductor-director

to add into an existing workspace instead, run::

    pixi add bioconductor-director

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-director

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-director

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-director:<tag>

(see `bioconductor-director/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-director| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-director.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-director
   :alt:   (downloads)
.. |docker_bioconductor-director| image:: https://quay.io/repository/biocontainers/bioconductor-director/status
   :target: https://quay.io/repository/biocontainers/bioconductor-director
.. _`bioconductor-director/tags`: https://quay.io/repository/biocontainers/bioconductor-director?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-director";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-director/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-director/README.html