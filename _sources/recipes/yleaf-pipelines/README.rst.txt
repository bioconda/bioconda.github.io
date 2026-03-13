:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yleaf-pipelines'
.. highlight: bash

yleaf-pipelines
===============

.. conda:recipe:: yleaf-pipelines
   :replaces_section_title:
   :noindex:

   Yleaf\-pipelines \- A pipeline\-optimized version of Yleaf\, a tool for Y\-chromosome haplogroup prediction.

   :homepage: https://github.com/trianglegrrl/Yleaf-pipelines
   :license: MIT / MIT
   :recipe: /`yleaf-pipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf-pipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf-pipelines/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msy032`

   Yleaf\-pipelines is a pipeline\-optimized version of Yleaf\, a tool for Y\-chromosome haplogroup prediction from next\-generation sequencing data.
   It provides a comprehensive solution for analyzing Y\-chromosome genetic data and determining
   haplogroup assignments.



.. conda:package:: yleaf-pipelines

   |downloads_yleaf-pipelines| |docker_yleaf-pipelines|

   :versions:
      
      

      ``3.3.0-0``

      

   
   :depends on graphviz: ``>=2.40``
   :depends on networkx: ``>=2.6``
   :depends on numpy: 
   :depends on pandas: ``>=1.3``
   :depends on pip: 
   :depends on python: 
   :depends on python-dateutil: ``>=2.8``
   :depends on pytz: ``>=2021``
   :depends on six: ``>=1.16``

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

    pixi global install yleaf-pipelines

to add into an existing workspace instead, run::

    pixi add yleaf-pipelines

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yleaf-pipelines

Alternatively, to install into a new environment, run::

    conda create -n envname yleaf-pipelines

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yleaf-pipelines:<tag>

(see `yleaf-pipelines/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yleaf-pipelines| image:: https://img.shields.io/conda/dn/bioconda/yleaf-pipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/yleaf-pipelines
   :alt:   (downloads)
.. |docker_yleaf-pipelines| image:: https://quay.io/repository/biocontainers/yleaf-pipelines/status
   :target: https://quay.io/repository/biocontainers/yleaf-pipelines
.. _`yleaf-pipelines/tags`: https://quay.io/repository/biocontainers/yleaf-pipelines?tab=tags


.. raw:: html

    <script>
        var package = "yleaf-pipelines";
        var versions = ["3.3.0"];
    </script>





Notes
-----
Yleaf requires reference genome files for analysis. These will be downloaded automatically
when needed\, or you can specify their location in the config.txt file.
Basic usage\:
  Yleaf \-fastq input.fastq \-rg hg38 \-o output\_dir \-fg \/path\/to\/full\-genome.fa \-yr \/path\/to\/ychr.fa\"
For more information\, see the documentation at\:
  https\:\/\/github.com\/trianglegrrl\/Yleaf\-pipelines


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yleaf-pipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yleaf-pipelines/README.html