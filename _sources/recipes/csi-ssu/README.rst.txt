:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csi-ssu'
.. highlight: bash

csi-ssu
=======

.. conda:recipe:: csi-ssu
   :replaces_section_title:
   :noindex:

   CSI SSU screening tool for genomic and transcriptomic data

   :homepage: https://github.com/AlexTiceLab/CSI-SSU
   :documentation: https://github.com/AlexTiceLab/CSI-SSU/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`csi-ssu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csi-ssu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csi-ssu/meta.yaml>`_

   A command\-line tool for screening SSU \(Small Subunit ribosomal RNA\) sequences 
   in genomic and transcriptomic data. This tool helps identify and classify SSU 
   sequences using phylogenetic placement in SSU reference packages built from PR2 
   via pplacer.

   Features include automated SSU screening using BLAST\, MAFFT\, and pplacer\, 
   phylogenetic placement for contamination screening and approximate taxonomic 
   classification\, and a command\-line interface for easy integration into pipelines.



.. conda:package:: csi-ssu

   |downloads_csi-ssu| |docker_csi-ssu|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.12``
   :depends on busco: ``>=5.0``
   :depends on ete3: ``>=3.1``
   :depends on mafft: ``>=7.0``
   :depends on matplotlib-base: ``>=3.4``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.3``
   :depends on pplacer: ``>=1.0``
   :depends on python: ``>=3.8``
   :depends on scipy: ``>=1.7``
   :depends on snakemake-minimal: ``>=7.0``

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

    pixi global install csi-ssu

to add into an existing workspace instead, run::

    pixi add csi-ssu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install csi-ssu

Alternatively, to install into a new environment, run::

    conda create -n envname csi-ssu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/csi-ssu:<tag>

(see `csi-ssu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_csi-ssu| image:: https://img.shields.io/conda/dn/bioconda/csi-ssu.svg?style=flat
   :target: https://anaconda.org/bioconda/csi-ssu
   :alt:   (downloads)
.. |docker_csi-ssu| image:: https://quay.io/repository/biocontainers/csi-ssu/status
   :target: https://quay.io/repository/biocontainers/csi-ssu
.. _`csi-ssu/tags`: https://quay.io/repository/biocontainers/csi-ssu?tab=tags


.. raw:: html

    <script>
        var package = "csi-ssu";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csi-ssu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csi-ssu/README.html