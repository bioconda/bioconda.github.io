:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafh5.gnomad.v3.1.1.grch38'
.. highlight: bash

bioconductor-mafh5.gnomad.v3.1.1.grch38
=======================================

.. conda:recipe:: bioconductor-mafh5.gnomad.v3.1.1.grch38
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from gnomAD version 3.1.1 for GRCh38

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/MafH5.gnomAD.v3.1.1.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafh5.gnomad.v3.1.1.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafh5.gnomad.v3.1.1.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafh5.gnomad.v3.1.1.grch38/meta.yaml>`_

   Store minor allele frequency data from the Genome Aggregation Database \(gnomAD version 3.1.1\) for the human genome version GRCh38.


.. conda:package:: bioconductor-mafh5.gnomad.v3.1.1.grch38

   |downloads_bioconductor-mafh5.gnomad.v3.1.1.grch38| |docker_bioconductor-mafh5.gnomad.v3.1.1.grch38|

   :versions:
      
      

      ``3.13.1-1``,  ``3.13.1-0``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``

      

   
   :depends on bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-data-packages: ``>=20230706``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicscores: ``>=2.12.0,<2.13.0``
   :depends on bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-mafh5.gnomad.v3.1.1.grch38

to add into an existing workspace instead, run::

    pixi add bioconductor-mafh5.gnomad.v3.1.1.grch38

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mafh5.gnomad.v3.1.1.grch38

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mafh5.gnomad.v3.1.1.grch38

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mafh5.gnomad.v3.1.1.grch38:<tag>

(see `bioconductor-mafh5.gnomad.v3.1.1.grch38/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mafh5.gnomad.v3.1.1.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafh5.gnomad.v3.1.1.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafh5.gnomad.v3.1.1.grch38
   :alt:   (downloads)
.. |docker_bioconductor-mafh5.gnomad.v3.1.1.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.v3.1.1.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.v3.1.1.grch38
.. _`bioconductor-mafh5.gnomad.v3.1.1.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.v3.1.1.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafh5.gnomad.v3.1.1.grch38";
        var versions = ["3.13.1","3.13.1","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafh5.gnomad.v3.1.1.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafh5.gnomad.v3.1.1.grch38/README.html