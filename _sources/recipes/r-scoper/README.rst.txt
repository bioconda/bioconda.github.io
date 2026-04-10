:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scoper'
.. highlight: bash

r-scoper
========

.. conda:recipe:: r-scoper
   :replaces_section_title:
   :noindex:

   Provides a computational framework for identification of B cell clones from Adaptive Immune Receptor Repertoire sequencing \(AIRR\-Seq\) data. Three main functions are included \(identicalClones\, hierarchicalClones\, and spectralClones\) that perform clustering among sequences of BCRs\/IGs \(B cell receptors\/immunoglobulins\) which share the same V gene\, J gene and junction length. Nouri N and Kleinstein SH \(2018\) \<doi\: 10.1093\/bioinformatics\/bty235\>. Nouri N and Kleinstein SH \(2019\) \<doi\: 10.1101\/788620\>. Gupta NT\, et al. \(2017\) \<doi\: 10.4049\/jimmunol.1601850\>.

   :homepage: https://scoper.readthedocs.io
   :license: AGPL / AGPL-3.0-only
   :recipe: /`r-scoper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scoper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scoper/meta.yaml>`_

   


.. conda:package:: r-scoper

   |downloads_r-scoper| |docker_r-scoper|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-alakazam: ``>=1.2.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dplyr: ``>=1.0``
   :depends on r-foreach: 
   :depends on r-ggplot2: ``>=3.3.4``
   :depends on r-rcpp: ``>=0.12.12``
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-shazam: ``>=1.1.0``
   :depends on r-stringi: 
   :depends on r-tidyr: ``>=1.0``

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

    pixi global install r-scoper

to add into an existing workspace instead, run::

    pixi add r-scoper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scoper

Alternatively, to install into a new environment, run::

    conda create -n envname r-scoper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scoper:<tag>

(see `r-scoper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scoper| image:: https://img.shields.io/conda/dn/bioconda/r-scoper.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scoper
   :alt:   (downloads)
.. |docker_r-scoper| image:: https://quay.io/repository/biocontainers/r-scoper/status
   :target: https://quay.io/repository/biocontainers/r-scoper
.. _`r-scoper/tags`: https://quay.io/repository/biocontainers/r-scoper?tab=tags


.. raw:: html

    <script>
        var package = "r-scoper";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scoper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scoper/README.html