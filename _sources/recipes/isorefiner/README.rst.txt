:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isorefiner'
.. highlight: bash

isorefiner
==========

.. conda:recipe:: isorefiner
   :replaces_section_title:
   :noindex:

   A refinement tool to identify exon\-intron structures of transcript \(RNA\) isoforms using long reads

   :homepage: https://github.com/rkajitani/IsoRefiner
   :license: MIT / MIT
   :recipe: /`isorefiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isorefiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isorefiner/meta.yaml>`_

   


.. conda:package:: isorefiner

   |downloads_isorefiner| |docker_isorefiner|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on bedtools: ``>=2.31.0``
   :depends on bioconductor-bambu: ``>=3.4.0``
   :depends on espresso: ``>=1.3.2``
   :depends on gffcompare: ``>=0.12.6``
   :depends on gffread: ``>=0.12.7``
   :depends on gmap: ``>=2023.07.20``
   :depends on isoquant: ``>=3.3.1``
   :depends on perl: ``>=5.22.0.1``
   :depends on polars: ``>=0.19.18``
   :depends on porechop_abi: ``>=0.5.0``
   :depends on pysam: 
   :depends on python: 
   :depends on r-biocmanager: 
   :depends on r-xgboost: ``<=1.7.6``
   :depends on rnabloom: ``>=2.0.1``
   :depends on samtools: ``>=1.17``
   :depends on seqkit: ``>=2.4.0``
   :depends on stringtie: ``>=2.2.1``

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

    pixi global install isorefiner

to add into an existing workspace instead, run::

    pixi add isorefiner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isorefiner

Alternatively, to install into a new environment, run::

    conda create -n envname isorefiner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isorefiner:<tag>

(see `isorefiner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isorefiner| image:: https://img.shields.io/conda/dn/bioconda/isorefiner.svg?style=flat
   :target: https://anaconda.org/bioconda/isorefiner
   :alt:   (downloads)
.. |docker_isorefiner| image:: https://quay.io/repository/biocontainers/isorefiner/status
   :target: https://quay.io/repository/biocontainers/isorefiner
.. _`isorefiner/tags`: https://quay.io/repository/biocontainers/isorefiner?tab=tags


.. raw:: html

    <script>
        var package = "isorefiner";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isorefiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isorefiner/README.html