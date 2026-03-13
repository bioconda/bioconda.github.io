:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hymet2'
.. highlight: bash

hymet2
======

.. conda:recipe:: hymet2
   :replaces_section_title:
   :noindex:

   HYMET \(Hybrid Metagenomic Tool\) for taxonomic identification of metagenomic sequences.

   :homepage: https://github.com/inesbmartins02/HYMET2
   :license: MIT / MIT
   :recipe: /`hymet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet2/meta.yaml>`_

   HYMET is a taxonomic identification tool designed for metagenomic sequence analysis. 
   It uses a combination of tools including Mash\, Mashmap\, Minimap2\, and custom classification 
   algorithms to identify the taxonomic origin of metagenomic sequences with high accuracy.



.. conda:package:: hymet2

   |downloads_hymet2| |docker_hymet2|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on csvkit: 
   :depends on mash: 
   :depends on mashmap: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl: 
   :depends on python: ``>=3.8``
   :depends on tqdm: 
   :depends on wget: 

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

    pixi global install hymet2

to add into an existing workspace instead, run::

    pixi add hymet2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hymet2

Alternatively, to install into a new environment, run::

    conda create -n envname hymet2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hymet2:<tag>

(see `hymet2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hymet2| image:: https://img.shields.io/conda/dn/bioconda/hymet2.svg?style=flat
   :target: https://anaconda.org/bioconda/hymet2
   :alt:   (downloads)
.. |docker_hymet2| image:: https://quay.io/repository/biocontainers/hymet2/status
   :target: https://quay.io/repository/biocontainers/hymet2
.. _`hymet2/tags`: https://quay.io/repository/biocontainers/hymet2?tab=tags


.. raw:: html

    <script>
        var package = "hymet2";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hymet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hymet2/README.html