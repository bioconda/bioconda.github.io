:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnafusion'
.. highlight: bash

bioconductor-dnafusion
======================

.. conda:recipe:: bioconductor-dnafusion
   :replaces_section_title:
   :noindex:

   Identification of gene fusions using paired\-end sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DNAfusion.html
   :license: GPL-3
   :recipe: /`bioconductor-dnafusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnafusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnafusion/meta.yaml>`_

   DNAfusion can identify gene fusions such as EML4\-ALK based on paired\-end sequencing results. This package was developed using position deduplicated BAM files generated with the AVENIO Oncology Analysis Software. These files are made using the AVENIO ctDNA surveillance kit and Illumina Nextseq 500 sequencing. This is a targeted hybridization NGS approach and includes ALK\-specific but not EML4\-specific probes.


.. conda:package:: bioconductor-dnafusion

   |downloads_bioconductor-dnafusion| |docker_bioconductor-dnafusion|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-dnafusion

to add into an existing workspace instead, run::

    pixi add bioconductor-dnafusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dnafusion

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dnafusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dnafusion:<tag>

(see `bioconductor-dnafusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dnafusion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnafusion.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnafusion
   :alt:   (downloads)
.. |docker_bioconductor-dnafusion| image:: https://quay.io/repository/biocontainers/bioconductor-dnafusion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnafusion
.. _`bioconductor-dnafusion/tags`: https://quay.io/repository/biocontainers/bioconductor-dnafusion?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnafusion";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnafusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnafusion/README.html