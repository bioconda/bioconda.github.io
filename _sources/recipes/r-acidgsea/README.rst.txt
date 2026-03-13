:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgsea'
.. highlight: bash

r-acidgsea
==========

.. conda:recipe:: r-acidgsea
   :replaces_section_title:
   :noindex:

   Parameterized fast gene set enrichment analysis.

   :homepage: https://r.acidgenomics.com/packages/acidgsea/
   :developer docs: https://github.com/acidgenomics/r-acidgsea
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea/meta.yaml>`_

   


.. conda:package:: r-acidgsea

   |downloads_r-acidgsea| |docker_r-acidgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.9-0</code>,  <code>0.8.8-2</code>,  <code>0.8.8-1</code>,  <code>0.8.8-0</code>,  <code>0.8.7-1</code>,  <code>0.8.7-0</code>,  </span></summary>
      

      ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-2``,  ``0.8.8-1``,  ``0.8.8-0``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-fgsea: ``>=1.26.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidexperiment: ``>=0.5.0``
   :depends on r-acidgenerics: ``>=0.7.1``
   :depends on r-acidgenomes: ``>=0.6.0``
   :depends on r-acidmarkdown: ``>=0.3.0``
   :depends on r-acidplots: ``>=0.7.0``
   :depends on r-acidplyr: ``>=0.5.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-basejump: ``>=0.18.0``
   :depends on r-deseqanalysis: ``>=0.7.0``
   :depends on r-ggplot2: ``>=3.4.3``
   :depends on r-goalie: ``>=0.7.1``
   :depends on r-knitr: ``>=1.44``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-rmarkdown: ``>=2.25``
   :depends on r-syntactic: ``>=0.7.0``

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

    pixi global install r-acidgsea

to add into an existing workspace instead, run::

    pixi add r-acidgsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidgsea

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidgsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidgsea:<tag>

(see `r-acidgsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidgsea| image:: https://img.shields.io/conda/dn/bioconda/r-acidgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgsea
   :alt:   (downloads)
.. |docker_r-acidgsea| image:: https://quay.io/repository/biocontainers/r-acidgsea/status
   :target: https://quay.io/repository/biocontainers/r-acidgsea
.. _`r-acidgsea/tags`: https://quay.io/repository/biocontainers/r-acidgsea?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgsea";
        var versions = ["0.9.1","0.9.0","0.9.0","0.8.9","0.8.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgsea/README.html