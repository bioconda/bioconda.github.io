:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plinder'
.. highlight: bash

plinder
=======

.. conda:recipe:: plinder
   :replaces_section_title:
   :noindex:

   PLINDER\: The Protein\-Ligand INteraction Dataset and Evaluation Resource.

   :homepage: https://www.plinder.sh
   :documentation: https://plinder-org.github.io/plinder
   
   :developer docs: https://github.com/plinder-org/plinder
   :license: MIT AND Apache-2.0
   :recipe: /`plinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinder/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.07.17.603955`

   Protein\-ligand interactions are foundational to the understanding of science and discovery of therapies.
   However\, to this date\, no large\, high quality datasets with real\-life relevant evaluations exist.

   PLINDER is an academic\-industry collaboration to address this\, driven by VantAI\, NVIDIA\, the Computational Structural Biology group at the University of Basel \& SIB Swiss Institute of Bioinformatics \- co\-organizers of CASP\, and MIT.
   We aim to provide a gold standard dataset and evaluations to push the field of computational protein\-ligand interactions prediction forward.



.. conda:package:: plinder

   |downloads_plinder| |docker_plinder|

   :versions:
      
      

      ``0.2.26-0``,  ``0.2.25-3``,  ``0.2.25-2``,  ``0.2.25-1``,  ``0.2.25-0``

      

   
   :depends on biotite: ``>=1.0``
   :depends on cloudpathlib: 
   :depends on eval-type-backport: 
   :depends on foldseek: 
   :depends on gcsfs: 
   :depends on gemmi: 
   :depends on google-cloud-storage: 
   :depends on keyrings.google-artifactregistry-auth: 
   :depends on ligand-validation: 
   :depends on mmcif: 
   :depends on mmpdb: 
   :depends on mmseqs2: 
   :depends on mols2grid: 
   :depends on nbformat: 
   :depends on networkit: ``>=11.0``
   :depends on numpy: ``<2``
   :depends on omegaconf: 
   :depends on openbabel: 
   :depends on openstructure: 
   :depends on pandas: 
   :depends on plip: ``2.3.0``
   :depends on plotly: 
   :depends on posebusters: 
   :depends on pyarrow: 
   :depends on pydantic: 
   :depends on python: ``>=3.10``
   :depends on python-duckdb: 
   :depends on pytorch-cpu: 
   :depends on rdkit: ``>=2024.03.6``
   :depends on reduce: 
   :depends on six: 
   :depends on tabulate: 
   :depends on tqdm: 
   :depends on typing_extensions: 

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

    pixi global install plinder

to add into an existing workspace instead, run::

    pixi add plinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plinder

Alternatively, to install into a new environment, run::

    conda create -n envname plinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plinder:<tag>

(see `plinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plinder| image:: https://img.shields.io/conda/dn/bioconda/plinder.svg?style=flat
   :target: https://anaconda.org/bioconda/plinder
   :alt:   (downloads)
.. |docker_plinder| image:: https://quay.io/repository/biocontainers/plinder/status
   :target: https://quay.io/repository/biocontainers/plinder
.. _`plinder/tags`: https://quay.io/repository/biocontainers/plinder?tab=tags


.. raw:: html

    <script>
        var package = "plinder";
        var versions = ["0.2.26","0.2.25","0.2.25","0.2.25","0.2.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plinder/README.html