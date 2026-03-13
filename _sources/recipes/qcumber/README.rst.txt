:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcumber'
.. highlight: bash

qcumber
=======

.. conda:recipe:: qcumber
   :replaces_section_title:
   :noindex:

   Quality control\, quality trimming\, adapter removal and sequence content check of NGS data.

   :homepage: https://gitlab.com/RKIBioinformaticsPipelines/QCumber
   :license: LGPL3
   :recipe: /`qcumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber/meta.yaml>`_

   


.. conda:package:: qcumber

   |downloads_qcumber| |docker_qcumber|

   :versions:
      
      

      ``2.0.4-0``

      

   
   :depends on bioconductor-savr: 
   :depends on bitstring: 
   :depends on bowtie2: ``2.3.*``
   :depends on docopt: 
   :depends on fastqc: ``0.11.*``
   :depends on jinja2: 
   :depends on kraken: ``0.10.*``
   :depends on krona: 
   :depends on matplotlib: ``2.0.*``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``3.6.*``
   :depends on pyyaml: ``3.12.*``
   :depends on r: ``3.3.*``
   :depends on r-ggplot2: ``2.2.*``
   :depends on r-quantreg: 
   :depends on r-reshape2: 
   :depends on r-stringi: 
   :depends on samtools: ``1.3.*``
   :depends on seaborn: 
   :depends on setuptools: 
   :depends on snakemake: ``3.12.*``
   :depends on trimmomatic: ``0.36.*``
   :depends on xmltodict: 

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

    pixi global install qcumber

to add into an existing workspace instead, run::

    pixi add qcumber

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qcumber

Alternatively, to install into a new environment, run::

    conda create -n envname qcumber

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qcumber:<tag>

(see `qcumber/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qcumber| image:: https://img.shields.io/conda/dn/bioconda/qcumber.svg?style=flat
   :target: https://anaconda.org/bioconda/qcumber
   :alt:   (downloads)
.. |docker_qcumber| image:: https://quay.io/repository/biocontainers/qcumber/status
   :target: https://quay.io/repository/biocontainers/qcumber
.. _`qcumber/tags`: https://quay.io/repository/biocontainers/qcumber?tab=tags


.. raw:: html

    <script>
        var package = "qcumber";
        var versions = ["2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcumber/README.html