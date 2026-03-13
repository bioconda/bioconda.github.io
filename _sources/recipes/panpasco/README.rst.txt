:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panpasco'
.. highlight: bash

panpasco
========

.. conda:recipe:: panpasco
   :replaces_section_title:
   :noindex:

   Pipeline for pangenome mapping and pairwise SNP distance

   :homepage: https://gitlab.com/rki_bioinformatics/panpasco
   :license: MIT
   :recipe: /`panpasco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco/meta.yaml>`_

   PANPASCO uses linear computational pan\-genomes 
   and pairwise SNP distance calculation to improve
   distance matrix analyses


.. conda:package:: panpasco

   |downloads_panpasco| |docker_panpasco|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bedtools: ``2.27.*``
   :depends on bioconductor-genomicranges: 
   :depends on bwa: ``0.7.17.*``
   :depends on flash: ``1.2.11.*``
   :depends on gatk: ``3.8.*``
   :depends on picard: ``2.18.*``
   :depends on python: ``>3``
   :depends on r-argparse: 
   :depends on r-base: ``>=4.0,<4.1.0a0``
   :depends on samtools: 
   :depends on seqtk: 
   :depends on snakemake: 
   :depends on tabix: 
   :depends on trimmomatic: ``0.36.*``

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

    pixi global install panpasco

to add into an existing workspace instead, run::

    pixi add panpasco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panpasco

Alternatively, to install into a new environment, run::

    conda create -n envname panpasco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panpasco:<tag>

(see `panpasco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panpasco| image:: https://img.shields.io/conda/dn/bioconda/panpasco.svg?style=flat
   :target: https://anaconda.org/bioconda/panpasco
   :alt:   (downloads)
.. |docker_panpasco| image:: https://quay.io/repository/biocontainers/panpasco/status
   :target: https://quay.io/repository/biocontainers/panpasco
.. _`panpasco/tags`: https://quay.io/repository/biocontainers/panpasco?tab=tags


.. raw:: html

    <script>
        var package = "panpasco";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panpasco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panpasco/README.html