:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intramirexplorer'
.. highlight: bash

bioconductor-intramirexplorer
=============================

.. conda:recipe:: bioconductor-intramirexplorer
   :replaces_section_title:
   :noindex:

   Predicting Targets for Drosophila Intragenic miRNAs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IntramiRExploreR.html
   :license: GPL-2
   :recipe: /`bioconductor-intramirexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer/meta.yaml>`_

   Intra\-miR\-ExploreR\, an integrative miRNA target prediction bioinformatics tool\, identifies targets combining expression and biophysical interactions of a given microRNA \(miR\). Using the tool\, we have identified targets for 92 intragenic miRs in D. melanogaster\, using available microarray expression data\, from Affymetrix 1 and Affymetrix2 microarray array platforms\, providing a global perspective of intragenic miR targets in Drosophila. Predicted targets are grouped according to biological functions using the DAVID Gene Ontology tool and are ranked based on a biologically relevant scoring system\, enabling the user to identify functionally relevant targets for a given miR.


.. conda:package:: bioconductor-intramirexplorer

   |downloads_bioconductor-intramirexplorer| |docker_bioconductor-intramirexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-fgnet: ``>=3.44.0,<3.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: ``>=1.0.1``
   :depends on r-knitr: ``>=1.12.3``

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

    pixi global install bioconductor-intramirexplorer

to add into an existing workspace instead, run::

    pixi add bioconductor-intramirexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-intramirexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-intramirexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-intramirexplorer:<tag>

(see `bioconductor-intramirexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-intramirexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intramirexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intramirexplorer
   :alt:   (downloads)
.. |docker_bioconductor-intramirexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer
.. _`bioconductor-intramirexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intramirexplorer";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html