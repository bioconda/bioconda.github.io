:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'accusnv'
.. highlight: bash

accusnv
=======

.. conda:recipe:: accusnv
   :replaces_section_title:
   :noindex:

   High\-accuracy SNV calling for bacterial isolates using AccuSNV.

   :homepage: https://github.com/liaoherui/AccuSNV
   :documentation: https://github.com/liaoherui/AccuSNV/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`accusnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/accusnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/accusnv/meta.yaml>`_

   


.. conda:package:: accusnv

   |downloads_accusnv| |docker_accusnv|

   :versions:
      
      

      ``1.0.0.5-0``,  ``1.0.0.4-0``,  ``1.0.0.3-0``

      

   
   :depends on bcbio-gff: ``0.6.9``
   :depends on bcftools: 
   :depends on biopython: ``1.78``
   :depends on bwa: 
   :depends on cutadapt: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on phylip: 
   :depends on pulp: ``2.7.0``
   :depends on python: ``>=3.9,<3.10``
   :depends on pytorch: ``>=2.6,<2.7``
   :depends on samtools: 
   :depends on scipy: 
   :depends on sickle-trim: 
   :depends on snakemake: ``7.32.3``
   :depends on statsmodels: 
   :depends on tabix: 
   :depends on tqdm: 

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

    pixi global install accusnv

to add into an existing workspace instead, run::

    pixi add accusnv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install accusnv

Alternatively, to install into a new environment, run::

    conda create -n envname accusnv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/accusnv:<tag>

(see `accusnv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_accusnv| image:: https://img.shields.io/conda/dn/bioconda/accusnv.svg?style=flat
   :target: https://anaconda.org/bioconda/accusnv
   :alt:   (downloads)
.. |docker_accusnv| image:: https://quay.io/repository/biocontainers/accusnv/status
   :target: https://quay.io/repository/biocontainers/accusnv
.. _`accusnv/tags`: https://quay.io/repository/biocontainers/accusnv?tab=tags


.. raw:: html

    <script>
        var package = "accusnv";
        var versions = ["1.0.0.5","1.0.0.4","1.0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/accusnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/accusnv/README.html