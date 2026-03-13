:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genotypy'
.. highlight: bash

genotypy
========

.. conda:recipe:: genotypy
   :replaces_section_title:
   :noindex:

   Automatically detect genomic barcodes integrated into loci of interest from sequencing data

   :homepage: https://gitbio.ens-lyon.fr/LBMC/yvertlab/vortex/plasticity_mutation/colony_rnaseq_bioinformatics/genotypy
   :license: CeCiLL 2.1
   :recipe: /`genotypy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotypy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotypy/meta.yaml>`_

   


.. conda:package:: genotypy

   |downloads_genotypy| |docker_genotypy|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``

      

   
   :depends on bowtie2: ``>=2.5.4``
   :depends on levenshtein: ``>=0.26``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.10,<3.12``
   :depends on samtools: ``>=1.21``

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

    pixi global install genotypy

to add into an existing workspace instead, run::

    pixi add genotypy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genotypy

Alternatively, to install into a new environment, run::

    conda create -n envname genotypy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genotypy:<tag>

(see `genotypy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genotypy| image:: https://img.shields.io/conda/dn/bioconda/genotypy.svg?style=flat
   :target: https://anaconda.org/bioconda/genotypy
   :alt:   (downloads)
.. |docker_genotypy| image:: https://quay.io/repository/biocontainers/genotypy/status
   :target: https://quay.io/repository/biocontainers/genotypy
.. _`genotypy/tags`: https://quay.io/repository/biocontainers/genotypy?tab=tags


.. raw:: html

    <script>
        var package = "genotypy";
        var versions = ["0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genotypy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genotypy/README.html