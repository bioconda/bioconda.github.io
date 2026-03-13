:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wg-blimp'
.. highlight: bash

wg-blimp
========

.. conda:recipe:: wg-blimp
   :replaces_section_title:
   :noindex:

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\)

   :homepage: https://github.com/MarWoes/wg-blimp
   :license: GPL / AGPL-3.0
   :recipe: /`wg-blimp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp/meta.yaml>`_

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\) can be utilised to analyse WGBS data. 
   It performs alignment\, qc\, methylation calling\, DMR calling\, segmentation and annotation using a multitude of tools. 



.. conda:package:: wg-blimp

   |downloads_wg-blimp| |docker_wg-blimp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.10-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-1</code>,  <code>0.9.8-0</code>,  <code>0.9.7-0</code>,  <code>0.9.6-1</code>,  <code>0.9.6-0</code>,  <code>0.9.5-1</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.8-1``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on h5py: 
   :depends on pysam: 
   :depends on python: 
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-httpuv: 
   :depends on r-shiny: 
   :depends on r-shinydashboard: 
   :depends on ruamel.yaml: 
   :depends on snakemake-minimal: ``>=5.8``

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

    pixi global install wg-blimp

to add into an existing workspace instead, run::

    pixi add wg-blimp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wg-blimp

Alternatively, to install into a new environment, run::

    conda create -n envname wg-blimp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wg-blimp:<tag>

(see `wg-blimp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wg-blimp| image:: https://img.shields.io/conda/dn/bioconda/wg-blimp.svg?style=flat
   :target: https://anaconda.org/bioconda/wg-blimp
   :alt:   (downloads)
.. |docker_wg-blimp| image:: https://quay.io/repository/biocontainers/wg-blimp/status
   :target: https://quay.io/repository/biocontainers/wg-blimp
.. _`wg-blimp/tags`: https://quay.io/repository/biocontainers/wg-blimp?tab=tags


.. raw:: html

    <script>
        var package = "wg-blimp";
        var versions = ["0.10.0","0.9.10","0.9.9","0.9.8","0.9.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wg-blimp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wg-blimp/README.html