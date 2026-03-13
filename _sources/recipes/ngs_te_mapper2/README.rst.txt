:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs_te_mapper2'
.. highlight: bash

ngs_te_mapper2
==============

.. conda:recipe:: ngs_te_mapper2
   :replaces_section_title:
   :noindex:

   A program to identify transposable element insertions using next generation sequencing data.

   :homepage: https://github.com/bergmanlab/ngs_te_mapper2
   :license: BSD
   :recipe: /`ngs_te_mapper2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2/meta.yaml>`_

   


.. conda:package:: ngs_te_mapper2

   |downloads_ngs_te_mapper2| |docker_ngs_te_mapper2|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pip: 
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on repeatmasker: ``4.0.7.*``
   :depends on samtools: ``>=1.9``
   :depends on seqtk: 

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

    pixi global install ngs_te_mapper2

to add into an existing workspace instead, run::

    pixi add ngs_te_mapper2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs_te_mapper2

Alternatively, to install into a new environment, run::

    conda create -n envname ngs_te_mapper2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs_te_mapper2:<tag>

(see `ngs_te_mapper2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs_te_mapper2| image:: https://img.shields.io/conda/dn/bioconda/ngs_te_mapper2.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs_te_mapper2
   :alt:   (downloads)
.. |docker_ngs_te_mapper2| image:: https://quay.io/repository/biocontainers/ngs_te_mapper2/status
   :target: https://quay.io/repository/biocontainers/ngs_te_mapper2
.. _`ngs_te_mapper2/tags`: https://quay.io/repository/biocontainers/ngs_te_mapper2?tab=tags


.. raw:: html

    <script>
        var package = "ngs_te_mapper2";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs_te_mapper2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs_te_mapper2/README.html