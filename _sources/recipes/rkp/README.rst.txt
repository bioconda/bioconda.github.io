:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rkp'
.. highlight: bash

rkp
===

.. conda:recipe:: rkp
   :replaces_section_title:
   :noindex:

   Relative K\-mer Project

   :homepage: https://gitlab.com/microbial_genomics/relative-kmer-project
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`rkp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rkp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rkp/meta.yaml>`_

   


.. conda:package:: rkp

   |downloads_rkp| |docker_rkp|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on argparse: ``>=1.4.0``
   :depends on bedops: ``>=2.4.37``
   :depends on bedtools: ``>=2.29.2``
   :depends on biopython: ``>=1.76``
   :depends on blast: ``>=2.9.0``
   :depends on bowtie2: ``>=2.3.5``
   :depends on kmc: ``>=3.1.1``
   :depends on matplotlib-base: ``>=3.1.2``
   :depends on numpy: ``>=1.17.3``
   :depends on pandas: ``>=0.25.3``
   :depends on python: ``>=3.6``
   :depends on r: ``>=3.6``
   :depends on r-gplots: ``>=3.0.1.1``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on samtools: ``>=1.10``
   :depends on seqkit: ``>=0.11.0``
   :depends on tqdm: ``>=4.41.1``

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

    pixi global install rkp

to add into an existing workspace instead, run::

    pixi add rkp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rkp

Alternatively, to install into a new environment, run::

    conda create -n envname rkp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rkp:<tag>

(see `rkp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rkp| image:: https://img.shields.io/conda/dn/bioconda/rkp.svg?style=flat
   :target: https://anaconda.org/bioconda/rkp
   :alt:   (downloads)
.. |docker_rkp| image:: https://quay.io/repository/biocontainers/rkp/status
   :target: https://quay.io/repository/biocontainers/rkp
.. _`rkp/tags`: https://quay.io/repository/biocontainers/rkp?tab=tags


.. raw:: html

    <script>
        var package = "rkp";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rkp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rkp/README.html