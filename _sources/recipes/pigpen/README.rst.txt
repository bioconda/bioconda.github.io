:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pigpen'
.. highlight: bash

pigpen
======

.. conda:recipe:: pigpen
   :replaces_section_title:
   :noindex:

   A package to quantify RNA localization using OINC\-seq data.

   :homepage: https://github.com/TaliaferroLab/OINC-seq
   :documentation: https://github.com/TaliaferroLab/OINC-seq/blob/v0.0.9/README.md
   
   :license: MIT / MIT
   :recipe: /`pigpen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pigpen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pigpen/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2024.11.12.623278`

   


.. conda:package:: pigpen

   |downloads_pigpen| |docker_pigpen|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends on bamtools: ``>=2.5.2``
   :depends on bcftools: ``>=1.15``
   :depends on gffutils: ``>=0.11.0``
   :depends on numpy: ``>=1.21``
   :depends on pandas: ``>=1.3.5``
   :depends on postmaster: ``>=0.1.0``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.19``
   :depends on python: ``>=3.5,<3.11``
   :depends on r-base: ``>=4.1``
   :depends on r-lme4: ``>=1.1``
   :depends on rpy2: ``>=3.4.5``
   :depends on salmon: ``>=1.9.0``
   :depends on samtools: ``>=1.15``
   :depends on star: ``>=2.7.10``
   :depends on statsmodels: ``>=0.13.2``
   :depends on umi_tools: ``>=1.1.0``
   :depends on varscan: ``>=2.4.4``

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

    pixi global install pigpen

to add into an existing workspace instead, run::

    pixi add pigpen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pigpen

Alternatively, to install into a new environment, run::

    conda create -n envname pigpen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pigpen:<tag>

(see `pigpen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pigpen| image:: https://img.shields.io/conda/dn/bioconda/pigpen.svg?style=flat
   :target: https://anaconda.org/bioconda/pigpen
   :alt:   (downloads)
.. |docker_pigpen| image:: https://quay.io/repository/biocontainers/pigpen/status
   :target: https://quay.io/repository/biocontainers/pigpen
.. _`pigpen/tags`: https://quay.io/repository/biocontainers/pigpen?tab=tags


.. raw:: html

    <script>
        var package = "pigpen";
        var versions = ["0.0.9","0.0.8","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pigpen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pigpen/README.html