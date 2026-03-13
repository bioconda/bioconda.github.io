:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp2cell'
.. highlight: bash

snp2cell
========

.. conda:recipe:: snp2cell
   :replaces_section_title:
   :noindex:

   A package for finding enriched regulatory networks from GWAS and single cell data.

   :homepage: https://github.com/Teichlab/snp2cell
   :license: BSD / BSD-3-Clause
   :recipe: /`snp2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp2cell/meta.yaml>`_

   A package for identifying gene regulation involved in specific traits and cell types. It combines three elements\: \(i\) GWAS summary statistics\, \(ii\) single cell data and \(iii\) a base gene regulatory network.


.. conda:package:: snp2cell

   |downloads_snp2cell| |docker_snp2cell|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on dill: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybiomart: 
   :depends on pyranges: 
   :depends on python: ``>=3.8,<3.12``
   :depends on rich: 
   :depends on scanpy: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on typer: 
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

    pixi global install snp2cell

to add into an existing workspace instead, run::

    pixi add snp2cell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snp2cell

Alternatively, to install into a new environment, run::

    conda create -n envname snp2cell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snp2cell:<tag>

(see `snp2cell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snp2cell| image:: https://img.shields.io/conda/dn/bioconda/snp2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/snp2cell
   :alt:   (downloads)
.. |docker_snp2cell| image:: https://quay.io/repository/biocontainers/snp2cell/status
   :target: https://quay.io/repository/biocontainers/snp2cell
.. _`snp2cell/tags`: https://quay.io/repository/biocontainers/snp2cell?tab=tags


.. raw:: html

    <script>
        var package = "snp2cell";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp2cell/README.html