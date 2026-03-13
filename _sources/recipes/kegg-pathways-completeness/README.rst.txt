:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kegg-pathways-completeness'
.. highlight: bash

kegg-pathways-completeness
==========================

.. conda:recipe:: kegg-pathways-completeness
   :replaces_section_title:
   :noindex:

   The tool counts completeness of each KEGG pathway for protein sequences.

   :homepage: https://github.com/EBI-Metagenomics/kegg-pathways-completeness-tool
   :license: Apache-2.0
   :recipe: /`kegg-pathways-completeness <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegg-pathways-completeness>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegg-pathways-completeness/meta.yaml>`_

   


.. conda:package:: kegg-pathways-completeness

   |downloads_kegg-pathways-completeness| |docker_kegg-pathways-completeness|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on biopython: ``>=1.83``
   :depends on networkx: ``>=3.3``
   :depends on pydot: ``>=3.0.3``
   :depends on python: ``>=3.10``
   :depends on python-graphviz: ``>=0.20.3``

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

    pixi global install kegg-pathways-completeness

to add into an existing workspace instead, run::

    pixi add kegg-pathways-completeness

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kegg-pathways-completeness

Alternatively, to install into a new environment, run::

    conda create -n envname kegg-pathways-completeness

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kegg-pathways-completeness:<tag>

(see `kegg-pathways-completeness/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kegg-pathways-completeness| image:: https://img.shields.io/conda/dn/bioconda/kegg-pathways-completeness.svg?style=flat
   :target: https://anaconda.org/bioconda/kegg-pathways-completeness
   :alt:   (downloads)
.. |docker_kegg-pathways-completeness| image:: https://quay.io/repository/biocontainers/kegg-pathways-completeness/status
   :target: https://quay.io/repository/biocontainers/kegg-pathways-completeness
.. _`kegg-pathways-completeness/tags`: https://quay.io/repository/biocontainers/kegg-pathways-completeness?tab=tags


.. raw:: html

    <script>
        var package = "kegg-pathways-completeness";
        var versions = ["1.3.0","1.2.1","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kegg-pathways-completeness/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kegg-pathways-completeness/README.html