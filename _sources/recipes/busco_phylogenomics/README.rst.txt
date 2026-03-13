:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'busco_phylogenomics'
.. highlight: bash

busco_phylogenomics
===================

.. conda:recipe:: busco_phylogenomics
   :replaces_section_title:
   :noindex:

   Utility script to construct species phylogenies using BUSCO proteins.

   :homepage: https://github.com/jamiemcg/BUSCO_phylogenomics
   :license: MIT / MIT
   :recipe: /`busco_phylogenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco_phylogenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco_phylogenomics/meta.yaml>`_

   


.. conda:package:: busco_phylogenomics

   |downloads_busco_phylogenomics| |docker_busco_phylogenomics|

   :versions:
      
      

      ``20260305-0``,  ``20240919-0``

      

   
   :depends on biopython: 
   :depends on fasttree: 
   :depends on iqtree: 
   :depends on mafft: 
   :depends on muscle: ``>=5.1``
   :depends on python: ``>=3.8``
   :depends on tqdm: 
   :depends on trimal: 

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

    pixi global install busco_phylogenomics

to add into an existing workspace instead, run::

    pixi add busco_phylogenomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install busco_phylogenomics

Alternatively, to install into a new environment, run::

    conda create -n envname busco_phylogenomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/busco_phylogenomics:<tag>

(see `busco_phylogenomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_busco_phylogenomics| image:: https://img.shields.io/conda/dn/bioconda/busco_phylogenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/busco_phylogenomics
   :alt:   (downloads)
.. |docker_busco_phylogenomics| image:: https://quay.io/repository/biocontainers/busco_phylogenomics/status
   :target: https://quay.io/repository/biocontainers/busco_phylogenomics
.. _`busco_phylogenomics/tags`: https://quay.io/repository/biocontainers/busco_phylogenomics?tab=tags


.. raw:: html

    <script>
        var package = "busco_phylogenomics";
        var versions = ["20260305","20240919"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/busco_phylogenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/busco_phylogenomics/README.html