:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomextract'
.. highlight: bash

genomextract
============

.. conda:recipe:: genomextract
   :replaces_section_title:
   :noindex:

   GenomeXtract \- A toolkit to easily find\, compare\, and assemble NCBI genomes.

   :homepage: https://github.com/kevinkarbstein/GenomeXtract
   :license: GPL-3.0-only
   :recipe: /`genomextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomextract/meta.yaml>`_

   


.. conda:package:: genomextract

   |downloads_genomextract| |docker_genomextract|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.2-0``

      

   
   :depends on astral-tree: ``5.7.8``
   :depends on biopython: 
   :depends on iqtree: ``3.0.1``
   :depends on mafft: ``7.525``
   :depends on ncbi-datasets-cli: ``18.9.0``
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on raxml-ng: ``1.2.2``
   :depends on requests: 

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

    pixi global install genomextract

to add into an existing workspace instead, run::

    pixi add genomextract

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomextract

Alternatively, to install into a new environment, run::

    conda create -n envname genomextract

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomextract:<tag>

(see `genomextract/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomextract| image:: https://img.shields.io/conda/dn/bioconda/genomextract.svg?style=flat
   :target: https://anaconda.org/bioconda/genomextract
   :alt:   (downloads)
.. |docker_genomextract| image:: https://quay.io/repository/biocontainers/genomextract/status
   :target: https://quay.io/repository/biocontainers/genomextract
.. _`genomextract/tags`: https://quay.io/repository/biocontainers/genomextract?tab=tags


.. raw:: html

    <script>
        var package = "genomextract";
        var versions = ["0.1.7","0.1.5","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomextract/README.html