:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plant_tribes_gene_family_aligner'
.. highlight: bash

plant_tribes_gene_family_aligner
================================

.. conda:recipe:: plant_tribes_gene_family_aligner
   :replaces_section_title:
   :noindex:

   Gene family aligner pipeline

   :homepage: https://github.com/dePamphilis/PlantTribes
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plant_tribes_gene_family_aligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_aligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_aligner/meta.yaml>`_

   


.. conda:package:: plant_tribes_gene_family_aligner

   |downloads_plant_tribes_gene_family_aligner| |docker_plant_tribes_gene_family_aligner|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on mafft: ``>=7,<8``
   :depends on pasta: ``>=1.7.8``
   :depends on perl: 
   :depends on python: ``<3``
   :depends on trimal: ``>=1.4,<2``

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

    pixi global install plant_tribes_gene_family_aligner

to add into an existing workspace instead, run::

    pixi add plant_tribes_gene_family_aligner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plant_tribes_gene_family_aligner

Alternatively, to install into a new environment, run::

    conda create -n envname plant_tribes_gene_family_aligner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plant_tribes_gene_family_aligner:<tag>

(see `plant_tribes_gene_family_aligner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plant_tribes_gene_family_aligner| image:: https://img.shields.io/conda/dn/bioconda/plant_tribes_gene_family_aligner.svg?style=flat
   :target: https://anaconda.org/bioconda/plant_tribes_gene_family_aligner
   :alt:   (downloads)
.. |docker_plant_tribes_gene_family_aligner| image:: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner/status
   :target: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner
.. _`plant_tribes_gene_family_aligner/tags`: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner?tab=tags


.. raw:: html

    <script>
        var package = "plant_tribes_gene_family_aligner";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plant_tribes_gene_family_aligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plant_tribes_gene_family_aligner/README.html