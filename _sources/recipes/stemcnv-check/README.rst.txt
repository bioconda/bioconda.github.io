:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stemcnv-check'
.. highlight: bash

stemcnv-check
=============

.. conda:recipe:: stemcnv-check
   :replaces_section_title:
   :noindex:

   StemCNV\-check\: CNV Based Quality Control Workflow for Stem Cell SNP Array Data.

   :homepage: https://github.com/bihealth/StemCNV-check
   :documentation: https://stemcnv-check.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`stemcnv-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemcnv-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemcnv-check/meta.yaml>`_

   


.. conda:package:: stemcnv-check

   |downloads_stemcnv-check| |docker_stemcnv-check|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends on apptainer: ``>=1.4``
   :depends on bcftools-gtc2vcf-plugin: ``1.22.*``
   :depends on deepdiff: ``>=8.0``
   :depends on loguru: ``>=0.7.2``
   :depends on openpyxl: ``>=3.1``
   :depends on pandas: ``>=2.2``
   :depends on psutil: ``>=7.0.0``
   :depends on pydantic: ``>=2.8``
   :depends on python: ``>=3.12``
   :depends on ruamel.yaml: ``>=0.18.6``
   :depends on snakemake-minimal: ``>=8.28.0,<9``
   :depends on xlsxwriter: ``>=3.2``

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

    pixi global install stemcnv-check

to add into an existing workspace instead, run::

    pixi add stemcnv-check

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stemcnv-check

Alternatively, to install into a new environment, run::

    conda create -n envname stemcnv-check

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stemcnv-check:<tag>

(see `stemcnv-check/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stemcnv-check| image:: https://img.shields.io/conda/dn/bioconda/stemcnv-check.svg?style=flat
   :target: https://anaconda.org/bioconda/stemcnv-check
   :alt:   (downloads)
.. |docker_stemcnv-check| image:: https://quay.io/repository/biocontainers/stemcnv-check/status
   :target: https://quay.io/repository/biocontainers/stemcnv-check
.. _`stemcnv-check/tags`: https://quay.io/repository/biocontainers/stemcnv-check?tab=tags


.. raw:: html

    <script>
        var package = "stemcnv-check";
        var versions = ["1.0.0","0.5.4","0.5.3","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stemcnv-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stemcnv-check/README.html