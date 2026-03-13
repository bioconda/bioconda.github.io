:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schemarefinery'
.. highlight: bash

schemarefinery
==============

.. conda:recipe:: schemarefinery
   :replaces_section_title:
   :noindex:

   Tool to refine cg\/wgMLST Schemas.

   :homepage: https://github.com/B-UMMI/Schema_Refinery
   :documentation: https://schema-refinery.readthedocs.io/en/latest/index.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`schemarefinery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schemarefinery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schemarefinery/meta.yaml>`_

   The SchemaRefinery is a comprehensive toolkit designed for refining and managing genomic schemas. It provides a suite of modules for various tasks such as identifying paralogous loci\, downloading genomic assemblies\, and adapting loci into standardized schemas.


.. conda:package:: schemarefinery

   |downloads_schemarefinery| |docker_schemarefinery|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.3.1-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.9.0``
   :depends on chewbbaca: ``>=3.3.10``
   :depends on ncbi-datasets-cli: ``>=18.3.1``
   :depends on networkx: ``>=2.6.0,<3.0.0``
   :depends on numpy: ``>=1.24.3,<2.0.0``
   :depends on pandas: ``>=1.5.1,<2.0.0``
   :depends on plotly: ``>=5.8.0``
   :depends on psutil: ``>=5.1.1``
   :depends on python: ``>=3.9,<3.14``
   :depends on requests: ``>=2.27.1``
   :depends on scipy: ``>=1.10.1``
   :depends on tqdm: ``>=4.62.0``

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

    pixi global install schemarefinery

to add into an existing workspace instead, run::

    pixi add schemarefinery

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install schemarefinery

Alternatively, to install into a new environment, run::

    conda create -n envname schemarefinery

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/schemarefinery:<tag>

(see `schemarefinery/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_schemarefinery| image:: https://img.shields.io/conda/dn/bioconda/schemarefinery.svg?style=flat
   :target: https://anaconda.org/bioconda/schemarefinery
   :alt:   (downloads)
.. |docker_schemarefinery| image:: https://quay.io/repository/biocontainers/schemarefinery/status
   :target: https://quay.io/repository/biocontainers/schemarefinery
.. _`schemarefinery/tags`: https://quay.io/repository/biocontainers/schemarefinery?tab=tags


.. raw:: html

    <script>
        var package = "schemarefinery";
        var versions = ["0.5.0","0.4.0","0.3.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schemarefinery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schemarefinery/README.html