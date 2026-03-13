:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvip'
.. highlight: bash

mvip
====

.. conda:recipe:: mvip
   :replaces_section_title:
   :noindex:

   MVP v.1.0\, a user\-friendly pipeline written in Python and providing a simple framework to perform standard viromics analyses. MVP combines multiple tools to enable viral genome identification\, characterization of genome quality\, filtering\, clustering\, taxonomic and functional annotation\, genome binning\, and comprehensive summaries of results that can be used for downstream ecological analyses. Overall\, MVP provides a standardized and reproducible pipeline for both extensive and robust characterization of viruses from large\-scale sequencing data including metagenomes\, metatranscriptomes\, viromes and isolate genomes.

   :homepage: https://gitlab.com/ccoclet/mvp
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`mvip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvip/meta.yaml>`_

   


.. conda:package:: mvip

   |downloads_mvip| |docker_mvip|

   :versions:
      
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on bowtie2: 
   :depends on checkv: 
   :depends on coverm: 
   :depends on dos2unix: 
   :depends on fasttree: 
   :depends on flit: 
   :depends on genomad: ``1.7.4``
   :depends on importlib_resources: 
   :depends on mafft: 
   :depends on minimap2: 
   :depends on mmseqs2: 
   :depends on numpy: ``1.23``
   :depends on pandas: 
   :depends on parallel: 
   :depends on python: ``>=3.7``
   :depends on rpy2: 
   :depends on samtools: 
   :depends on scikit-learn: ``0.23``
   :depends on seqtk: 
   :depends on table2asn: 
   :depends on taxopy: 
   :depends on tqdm: 
   :depends on trimal: 
   :depends on vrhyme: 

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

    pixi global install mvip

to add into an existing workspace instead, run::

    pixi add mvip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mvip

Alternatively, to install into a new environment, run::

    conda create -n envname mvip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mvip:<tag>

(see `mvip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mvip| image:: https://img.shields.io/conda/dn/bioconda/mvip.svg?style=flat
   :target: https://anaconda.org/bioconda/mvip
   :alt:   (downloads)
.. |docker_mvip| image:: https://quay.io/repository/biocontainers/mvip/status
   :target: https://quay.io/repository/biocontainers/mvip
.. _`mvip/tags`: https://quay.io/repository/biocontainers/mvip?tab=tags


.. raw:: html

    <script>
        var package = "mvip";
        var versions = ["1.1.5","1.1.5","1.1.4","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvip/README.html