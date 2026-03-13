:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacota'
.. highlight: bash

panacota
========

.. conda:recipe:: panacota
   :replaces_section_title:
   :noindex:

   Large scale comparative genomics tools\: annotate genomes\, do pangenome\, core\/persistent genome\, align core\/persistent families\, infer phylogenetic tree.

   :homepage: https://github.com/gem-pasteur/PanACoTA
   :documentation: https://aperrin.pages.pasteur.fr/pipeline_annotation/html-doc/
   
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`panacota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota/meta.yaml>`_

   


.. conda:package:: panacota

   |downloads_panacota| |docker_panacota|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1.2-0``

      

   
   :depends on biopython: ``>=1.60``
   :depends on colorlog: 
   :depends on fastme: 
   :depends on fasttree: ``>=2.1.10``
   :depends on iqtree: ``>=1.6.12``
   :depends on mafft: 
   :depends on mash: 
   :depends on matplotlib-base: ``>=2.0.0``
   :depends on mmseqs2: 
   :depends on ncbi-genome-download: ``>=0.3.0``
   :depends on numpy: ``>=1.11``
   :depends on prodigal: ``>=2.6.2``
   :depends on progressbar2: ``>=3.18.0``
   :depends on prokka: ``1.14.5``
   :depends on python: ``>=3.6``
   :depends on quicktree: 
   :depends on scipy: 
   :depends on termcolor: 

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

    pixi global install panacota

to add into an existing workspace instead, run::

    pixi add panacota

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panacota

Alternatively, to install into a new environment, run::

    conda create -n envname panacota

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panacota:<tag>

(see `panacota/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panacota| image:: https://img.shields.io/conda/dn/bioconda/panacota.svg?style=flat
   :target: https://anaconda.org/bioconda/panacota
   :alt:   (downloads)
.. |docker_panacota| image:: https://quay.io/repository/biocontainers/panacota/status
   :target: https://quay.io/repository/biocontainers/panacota
.. _`panacota/tags`: https://quay.io/repository/biocontainers/panacota?tab=tags


.. raw:: html

    <script>
        var package = "panacota";
        var versions = ["1.4.0","1.3.1","1.2.0","1.1.0","1.0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacota/README.html