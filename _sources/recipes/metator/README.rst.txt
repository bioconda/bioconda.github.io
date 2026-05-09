:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metator'
.. highlight: bash

metator
=======

.. conda:recipe:: metator
   :replaces_section_title:
   :noindex:

   Metagenomic binning based on Hi\-C data.

   :homepage: https://github.com/koszullab/metator
   :documentation: https://github.com/koszullab/metaTOR/blob/v1.3.10/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator/meta.yaml>`_
   :links: doi: :doi:`10.3389/fgene.2019.00753`

   


.. conda:package:: metator

   |downloads_metator| |docker_metator|

   :versions:
      
      

      ``1.3.10-1``,  ``1.3.10-0``,  ``1.3.7-0``

      

   
   :depends on biopython: ``<=1.80``
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on checkv: 
   :depends on cooler: 
   :depends on hicstuff: 
   :depends on hmmer: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on looseversion: 
   :depends on micomplete: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openjdk: 
   :depends on pairix: 
   :depends on pairtools: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on pyfastx: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 

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

    pixi global install metator

to add into an existing workspace instead, run::

    pixi add metator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metator

Alternatively, to install into a new environment, run::

    conda create -n envname metator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metator:<tag>

(see `metator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metator| image:: https://img.shields.io/conda/dn/bioconda/metator.svg?style=flat
   :target: https://anaconda.org/bioconda/metator
   :alt:   (downloads)
.. |docker_metator| image:: https://quay.io/repository/biocontainers/metator/status
   :target: https://quay.io/repository/biocontainers/metator
.. _`metator/tags`: https://quay.io/repository/biocontainers/metator?tab=tags


.. raw:: html

    <script>
        var package = "metator";
        var versions = ["1.3.10","1.3.10","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metator/README.html