:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drawproteins'
.. highlight: bash

bioconductor-drawproteins
=========================

.. conda:recipe:: bioconductor-drawproteins
   :replaces_section_title:
   :noindex:

   Package to Draw Protein Schematics from Uniprot API output

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/drawProteins.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-drawproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins/meta.yaml>`_

   This package draws protein schematics from Uniprot API output. From the JSON returned by the GET command\, it creates a dataframe from the Uniprot Features API. This dataframe can then be used by geoms based on ggplot2 and base R to draw protein schematics.


.. conda:package:: bioconductor-drawproteins

   |downloads_bioconductor-drawproteins| |docker_bioconductor-drawproteins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-httr: 
   :depends on r-readr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-drawproteins

to add into an existing workspace instead, run::

    pixi add bioconductor-drawproteins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-drawproteins

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-drawproteins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-drawproteins:<tag>

(see `bioconductor-drawproteins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-drawproteins| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drawproteins.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drawproteins
   :alt:   (downloads)
.. |docker_bioconductor-drawproteins| image:: https://quay.io/repository/biocontainers/bioconductor-drawproteins/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drawproteins
.. _`bioconductor-drawproteins/tags`: https://quay.io/repository/biocontainers/bioconductor-drawproteins?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drawproteins";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html