:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctseq'
.. highlight: bash

ctseq
=====

.. conda:recipe:: ctseq
   :replaces_section_title:
   :noindex:

   ctSeq is a pipeline to analyze methylation patch PCR data

   :homepage: https://github.com/ryanhmiller/ctseq
   :license: MIT / MIT
   :recipe: /`ctseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq/meta.yaml>`_

   


.. conda:package:: ctseq

   |downloads_ctseq| |docker_ctseq|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends on bismark: 
   :depends on cutadapt: 
   :depends on ncurses: ``6.1 he6710b0_1``
   :depends on numpy: 
   :depends on openssl: ``1.0.2p h14c3975_1002``
   :depends on python: ``>=3.7``
   :depends on r-base: ``3.5.1.*``
   :depends on r-ggplot2: 
   :depends on r-pheatmap: 
   :depends on r-reshape: 
   :depends on samtools: ``1.9.*``
   :depends on simplesam: ``0.1.3.1.*``
   :depends on umi_tools: 

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

    pixi global install ctseq

to add into an existing workspace instead, run::

    pixi add ctseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ctseq

Alternatively, to install into a new environment, run::

    conda create -n envname ctseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ctseq:<tag>

(see `ctseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ctseq| image:: https://img.shields.io/conda/dn/bioconda/ctseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ctseq
   :alt:   (downloads)
.. |docker_ctseq| image:: https://quay.io/repository/biocontainers/ctseq/status
   :target: https://quay.io/repository/biocontainers/ctseq
.. _`ctseq/tags`: https://quay.io/repository/biocontainers/ctseq?tab=tags


.. raw:: html

    <script>
        var package = "ctseq";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctseq/README.html