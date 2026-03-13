:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagem'
.. highlight: bash

metagem
=======

.. conda:recipe:: metagem
   :replaces_section_title:
   :noindex:

   Generate context specific genome\-scale metabolic models and predict metabolic interactions directly from metagenomic data

   :homepage: https://github.com/franciscozorrilla/metaGEM
   :license: MIT
   :recipe: /`metagem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagem/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkab815`, biotools: :biotools:`metagem`

   


.. conda:package:: metagem

   |downloads_metagem| |docker_metagem|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends on bedtools: ``>=2.29.2``
   :depends on bwa: ``>=0.7.17``
   :depends on concoct: ``>=1.1.0``
   :depends on diamond: ``>=2.0.6``
   :depends on fastp: ``>=0.20.1``
   :depends on gtdbtk: ``>=1.4.0``
   :depends on maxbin2: ``>=2.2.7``
   :depends on megahit: ``>=1.2.9``
   :depends on metabat2: ``>=2.15``
   :depends on python: ``>=3.7``
   :depends on r-base: ``>=3.5.1``
   :depends on r-gridextra: ``>=2.2.1``
   :depends on r-tidytext: 
   :depends on r-tidyverse: 
   :depends on samtools: ``>=1.9``
   :depends on snakemake: ``>=5.10.0,<5.31.1``

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

    pixi global install metagem

to add into an existing workspace instead, run::

    pixi add metagem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metagem

Alternatively, to install into a new environment, run::

    conda create -n envname metagem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metagem:<tag>

(see `metagem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metagem| image:: https://img.shields.io/conda/dn/bioconda/metagem.svg?style=flat
   :target: https://anaconda.org/bioconda/metagem
   :alt:   (downloads)
.. |docker_metagem| image:: https://quay.io/repository/biocontainers/metagem/status
   :target: https://quay.io/repository/biocontainers/metagem
.. _`metagem/tags`: https://quay.io/repository/biocontainers/metagem?tab=tags


.. raw:: html

    <script>
        var package = "metagem";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagem/README.html