:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macarron'
.. highlight: bash

bioconductor-macarron
=====================

.. conda:recipe:: bioconductor-macarron
   :replaces_section_title:
   :noindex:

   Prioritization of potentially bioactive metabolic features from epidemiological and environmental metabolomics datasets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Macarron.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-macarron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron/meta.yaml>`_

   Macarron is a workflow for the prioritization of potentially bioactive metabolites from metabolomics experiments. Prioritization integrates strengths of evidences of bioactivity such as covariation with a known metabolite\, abundance relative to a known metabolite and association with an environmental or phenotypic indicator of bioactivity. Broadly\, the workflow consists of stratified clustering of metabolic spectral features which co\-vary in abundance in a condition\, transfer of functional annotations\, estimation of relative abundance and differential abundance analysis to identify associations between features and phenotype\/condition.


.. conda:package:: bioconductor-macarron

   |downloads_bioconductor-macarron| |docker_bioconductor-macarron|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends on bioconductor-maaslin2: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dynamictreecut: 
   :depends on r-ff: 
   :depends on r-logging: 
   :depends on r-plyr: 
   :depends on r-psych: 
   :depends on r-rcurl: 
   :depends on r-rjsonio: 
   :depends on r-wgcna: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-macarron

to add into an existing workspace instead, run::

    pixi add bioconductor-macarron

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-macarron

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-macarron

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-macarron:<tag>

(see `bioconductor-macarron/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-macarron| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macarron.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macarron
   :alt:   (downloads)
.. |docker_bioconductor-macarron| image:: https://quay.io/repository/biocontainers/bioconductor-macarron/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macarron
.. _`bioconductor-macarron/tags`: https://quay.io/repository/biocontainers/bioconductor-macarron?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macarron";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macarron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macarron/README.html