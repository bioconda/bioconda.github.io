:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lotus3'
.. highlight: bash

lotus3
======

.. conda:recipe:: lotus3
   :replaces_section_title:
   :noindex:

   LotuS3 is a lightweight amplicon sequencing pipeline supporting 16S\/18S\/ITS

   :homepage: https://lotus3.earlham.ac.uk/
   :developer docs: https://github.com/hildebra/LotuS3/
   :license: GPL-2.0-only
   :recipe: /`lotus3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus3/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01365-1`, biotools: :biotools:`lotus3`

   


.. conda:package:: lotus3

   |downloads_lotus3| |docker_lotus3|

   :versions:
      
      

      ``3.03-1``,  ``3.03-0``

      

   
   :depends on bioconductor-dada2: 
   :depends on bioconductor-phyloseq: 
   :depends on blast: 
   :depends on cd-hit: 
   :depends on clustalo: 
   :depends on fasttree: 
   :depends on hmmer: ``>=3.1``
   :depends on infernal: 
   :depends on iqtree: 
   :depends on itsx: 
   :depends on lambda: ``>=3,<4``
   :depends on lca: ``>=0.25``
   :depends on mafft: 
   :depends on minimap2: 
   :depends on perl: 
   :depends on perl-getopt-long: 
   :depends on pigz: 
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on rdp_classifier: 
   :depends on rtk: 
   :depends on sdm: ``2.18``
   :depends on swarm: 
   :depends on unzip: 
   :depends on usearch: ``>=12.0_beta,<13``
   :depends on vsearch: 
   :depends on wget: 
   :depends on zip: 

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

    pixi global install lotus3

to add into an existing workspace instead, run::

    pixi add lotus3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lotus3

Alternatively, to install into a new environment, run::

    conda create -n envname lotus3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lotus3:<tag>

(see `lotus3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lotus3| image:: https://img.shields.io/conda/dn/bioconda/lotus3.svg?style=flat
   :target: https://anaconda.org/bioconda/lotus3
   :alt:   (downloads)
.. |docker_lotus3| image:: https://quay.io/repository/biocontainers/lotus3/status
   :target: https://quay.io/repository/biocontainers/lotus3
.. _`lotus3/tags`: https://quay.io/repository/biocontainers/lotus3?tab=tags


.. raw:: html

    <script>
        var package = "lotus3";
        var versions = ["3.03","3.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lotus3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lotus3/README.html