:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidexperiment'
.. highlight: bash

r-acidexperiment
================

.. conda:recipe:: r-acidexperiment
   :replaces_section_title:
   :noindex:

   Toolkit to extend the functionality of SummarizedExperiment.

   :homepage: https://r.acidgenomics.com/packages/acidexperiment/
   :developer docs: https://github.com/acidgenomics/r-acidexperiment
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment/meta.yaml>`_

   


.. conda:package:: r-acidexperiment

   |downloads_r-acidexperiment| |docker_r-acidexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.4.7-2</code>,  <code>0.4.7-1</code>,  <code>0.4.7-0</code>,  <code>0.4.5-1</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.7-2``,  ``0.4.7-1``,  ``0.4.7-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.60.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-biostrings: ``>=2.68.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidgenerics: ``>=0.7.1``
   :depends on r-acidgenomes: ``>=0.6.0``
   :depends on r-acidplyr: ``>=0.5.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.0``
   :depends on r-matrix: ``>=1.6.1``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-scales: ``>=1.2.1``
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

    pixi global install r-acidexperiment

to add into an existing workspace instead, run::

    pixi add r-acidexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidexperiment:<tag>

(see `r-acidexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidexperiment| image:: https://img.shields.io/conda/dn/bioconda/r-acidexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidexperiment
   :alt:   (downloads)
.. |docker_r-acidexperiment| image:: https://quay.io/repository/biocontainers/r-acidexperiment/status
   :target: https://quay.io/repository/biocontainers/r-acidexperiment
.. _`r-acidexperiment/tags`: https://quay.io/repository/biocontainers/r-acidexperiment?tab=tags


.. raw:: html

    <script>
        var package = "r-acidexperiment";
        var versions = ["0.5.5","0.5.4","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidexperiment/README.html