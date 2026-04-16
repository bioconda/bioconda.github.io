:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainify'
.. highlight: bash

strainify
=========

.. conda:recipe:: strainify
   :replaces_section_title:
   :noindex:

   Strain\-level abundance analysis tool for short\-read metagenomics

   :homepage: https://github.com/treangenlab/Strainify
   :license: MIT
   :recipe: /`strainify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainify/meta.yaml>`_

   


.. conda:package:: strainify

   |downloads_strainify| |docker_strainify|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bcftools: ``>=1.21``
   :depends on biopython: ``>=1.85``
   :depends on bwa: ``>=0.7.18``
   :depends on clarabel: ``>=0.10.0``
   :depends on coincbc: 
   :depends on configargparse: ``>=1.7.1``
   :depends on cvxpy: ``>=1.6.5``
   :depends on ecos: ``>=2.0.14``
   :depends on fastani: ``>=1.34``
   :depends on fasttree: ``>=2.1.11``
   :depends on git-filter-repo: ``>=2.47.0``
   :depends on gitpython: ``>=3.1``
   :depends on harvesttools: ``>=1.2``
   :depends on htslib: ``>=1.21``
   :depends on jinja2: ``>=3.1``
   :depends on joblib: ``>=1.5.0``
   :depends on jsonschema: ``>=4.23``
   :depends on mash: ``>=2.3``
   :depends on numpy: ``>=2.2``
   :depends on osqp: ``>=1.0.4``
   :depends on pandas: ``>=2.2``
   :depends on parallel: 
   :depends on parsnp: ``>=2.1.4``
   :depends on phipack: ``>=1.1``
   :depends on psutil: ``>=7.0``
   :depends on pulp: ``>=2.8``
   :depends on pysam: ``>=0.23.0``
   :depends on pyspoa: ``>=0.2.1``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=6.0``
   :depends on raxml: ``>=8.2.13``
   :depends on samtools: ``>=1.21``
   :depends on scikit-learn: ``>=1.6.1``
   :depends on scipy: ``>=1.15.3``
   :depends on scs: ``>=3.2.7``
   :depends on snakemake: ``>=9.3``
   :depends on tabulate: ``>=0.9``
   :depends on threadpoolctl: ``>=3.6.0``
   :depends on tqdm: ``>=4.67``
   :depends on typer: ``>=0.15``
   :depends on wgatools: ``>=1.1.0``

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

    pixi global install strainify

to add into an existing workspace instead, run::

    pixi add strainify

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strainify

Alternatively, to install into a new environment, run::

    conda create -n envname strainify

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strainify:<tag>

(see `strainify/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strainify| image:: https://img.shields.io/conda/dn/bioconda/strainify.svg?style=flat
   :target: https://anaconda.org/bioconda/strainify
   :alt:   (downloads)
.. |docker_strainify| image:: https://quay.io/repository/biocontainers/strainify/status
   :target: https://quay.io/repository/biocontainers/strainify
.. _`strainify/tags`: https://quay.io/repository/biocontainers/strainify?tab=tags


.. raw:: html

    <script>
        var package = "strainify";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainify/README.html