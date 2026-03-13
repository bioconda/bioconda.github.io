:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakelines'
.. highlight: bash

snakelines
==========

.. conda:recipe:: snakelines
   :replaces_section_title:
   :noindex:

   Computational pipelines for processing of paired\-end sequencing reads.

   :homepage: https://snakelines.readthedocs.io/en/latest/
   :license: CC BY-NC-SA
   :recipe: /`snakelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines/meta.yaml>`_

   


.. conda:package:: snakelines

   |downloads_snakelines| |docker_snakelines|

   :versions:
      
      

      ``1.1.8-0``,  ``1.1.4-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``

      

   
   :depends on bs4: ``>=4.9,<4.10``
   :depends on jinja2: ``>=3.1.2,<3.2``
   :depends on multiqc: ``>=1.10,<1.11``
   :depends on numpy: ``>=1.19,<1.20``
   :depends on oyaml: ``>=0.9,<1.0``
   :depends on pandas: ``>=1.1,<1.2``
   :depends on parse: ``>=1.19.0,<1.20``
   :depends on pygraphviz: ``>=1.7,<1.8``
   :depends on python: ``>=3.9,<3.10``
   :depends on seaborn: ``>=0.11,<0.12``
   :depends on snakemake-minimal: ``>=7.18,<7.19``
   :depends on tk: ``>=8.6,<8.7``
   :depends on weasyprint: ``>=51,<52``

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

    pixi global install snakelines

to add into an existing workspace instead, run::

    pixi add snakelines

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakelines

Alternatively, to install into a new environment, run::

    conda create -n envname snakelines

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakelines:<tag>

(see `snakelines/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakelines| image:: https://img.shields.io/conda/dn/bioconda/snakelines.svg?style=flat
   :target: https://anaconda.org/bioconda/snakelines
   :alt:   (downloads)
.. |docker_snakelines| image:: https://quay.io/repository/biocontainers/snakelines/status
   :target: https://quay.io/repository/biocontainers/snakelines
.. _`snakelines/tags`: https://quay.io/repository/biocontainers/snakelines?tab=tags


.. raw:: html

    <script>
        var package = "snakelines";
        var versions = ["1.1.8","1.1.4","1.1.0","1.0.4","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakelines/README.html