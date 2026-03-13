:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpra-data-access-portal'
.. highlight: bash

mpra-data-access-portal
=======================

.. conda:recipe:: mpra-data-access-portal
   :replaces_section_title:
   :noindex:

   Saturation mutagenesis MPRA data access portal.

   :homepage: https://mpra.gs.washington.edu/satMutMPRA
   :license: MIT
   :recipe: /`mpra-data-access-portal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal/meta.yaml>`_

   


.. conda:package:: mpra-data-access-portal

   |downloads_mpra-data-access-portal| |docker_mpra-data-access-portal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.15-0</code>,  <code>0.1.14-0</code>,  <code>0.1.13-0</code>,  <code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-3</code>,  <code>0.1.8-2</code>,  </span></summary>
      

      ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-3``,  ``0.1.8-2``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.0.0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-markdown: 
   :depends on r-plotly: 
   :depends on r-readr: 
   :depends on r-shiny: 
   :depends on r-stringr: 

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

    pixi global install mpra-data-access-portal

to add into an existing workspace instead, run::

    pixi add mpra-data-access-portal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mpra-data-access-portal

Alternatively, to install into a new environment, run::

    conda create -n envname mpra-data-access-portal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mpra-data-access-portal:<tag>

(see `mpra-data-access-portal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mpra-data-access-portal| image:: https://img.shields.io/conda/dn/bioconda/mpra-data-access-portal.svg?style=flat
   :target: https://anaconda.org/bioconda/mpra-data-access-portal
   :alt:   (downloads)
.. |docker_mpra-data-access-portal| image:: https://quay.io/repository/biocontainers/mpra-data-access-portal/status
   :target: https://quay.io/repository/biocontainers/mpra-data-access-portal
.. _`mpra-data-access-portal/tags`: https://quay.io/repository/biocontainers/mpra-data-access-portal?tab=tags


.. raw:: html

    <script>
        var package = "mpra-data-access-portal";
        var versions = ["0.1.15","0.1.14","0.1.13","0.1.12","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpra-data-access-portal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpra-data-access-portal/README.html