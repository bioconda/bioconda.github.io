:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openprimerui'
.. highlight: bash

bioconductor-openprimerui
=========================

.. conda:recipe:: bioconductor-openprimerui
   :replaces_section_title:
   :noindex:

   Shiny Application for Multiplex PCR Primer Design and Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/openPrimeRui.html
   :license: GPL-2
   :recipe: /`bioconductor-openprimerui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui/meta.yaml>`_

   A Shiny application providing methods for designing\, evaluating\, and comparing primer sets for multiplex polymerase chain reaction. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected.


.. conda:package:: bioconductor-openprimerui

   |downloads_bioconductor-openprimerui| |docker_bioconductor-openprimerui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-openprimer: ``>=1.24.0,<1.25.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dt: ``>=0.2``
   :depends on r-rmarkdown: ``>=1.0``
   :depends on r-shiny: ``>=1.0.2``
   :depends on r-shinybs: ``>=0.61``
   :depends on r-shinyjs: ``>=0.9``

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

    pixi global install bioconductor-openprimerui

to add into an existing workspace instead, run::

    pixi add bioconductor-openprimerui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-openprimerui

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-openprimerui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-openprimerui:<tag>

(see `bioconductor-openprimerui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-openprimerui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openprimerui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openprimerui
   :alt:   (downloads)
.. |docker_bioconductor-openprimerui| image:: https://quay.io/repository/biocontainers/bioconductor-openprimerui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openprimerui
.. _`bioconductor-openprimerui/tags`: https://quay.io/repository/biocontainers/bioconductor-openprimerui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openprimerui";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html