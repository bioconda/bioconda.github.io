:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteasy'
.. highlight: bash

bioconductor-proteasy
=====================

.. conda:recipe:: bioconductor-proteasy
   :replaces_section_title:
   :noindex:

   Protease Mapping

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/proteasy.html
   :license: GPL-3
   :recipe: /`bioconductor-proteasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy/meta.yaml>`_

   Retrieval of experimentally derived protease\- and cleavage data derived from the MEROPS database. Proteasy contains functions for mapping peptide termini to known sites where a protease cleaves. This package also makes it possible to quickly look up known substrates based on a list of \(potential\) proteases\, or vice versa \- look up proteases based on a list of substrates.


.. conda:package:: bioconductor-proteasy

   |downloads_bioconductor-proteasy| |docker_bioconductor-proteasy|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationfilter: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.mmusculus.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.rnorvegicus.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends on bioconductor-rcpi: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
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

    pixi global install bioconductor-proteasy

to add into an existing workspace instead, run::

    pixi add bioconductor-proteasy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-proteasy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-proteasy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-proteasy:<tag>

(see `bioconductor-proteasy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-proteasy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteasy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteasy
   :alt:   (downloads)
.. |docker_bioconductor-proteasy| image:: https://quay.io/repository/biocontainers/bioconductor-proteasy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteasy
.. _`bioconductor-proteasy/tags`: https://quay.io/repository/biocontainers/bioconductor-proteasy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteasy";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteasy/README.html