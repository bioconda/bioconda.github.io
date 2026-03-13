:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'read2tree'
.. highlight: bash

read2tree
=========

.. conda:recipe:: read2tree
   :replaces_section_title:
   :noindex:

   Building phylogenetic trees directly from sequencing reads.

   :homepage: https://github.com/DessimozLab/read2tree
   :license: MIT / MIT
   :recipe: /`read2tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01753-4`

   


.. conda:package:: read2tree

   |downloads_read2tree| |docker_read2tree|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``0.1.5-0``

      

   
   :depends on biopython: 
   :depends on dendropy: 
   :depends on filelock: 
   :depends on iqtree: 
   :depends on lxml: 
   :depends on mafft: 
   :depends on minimap2: 
   :depends on natsort: 
   :depends on nextgenmap: 
   :depends on ngmlr: 
   :depends on numpy: 
   :depends on pyham: 
   :depends on pyparsing: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on samtools: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install read2tree

to add into an existing workspace instead, run::

    pixi add read2tree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install read2tree

Alternatively, to install into a new environment, run::

    conda create -n envname read2tree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/read2tree:<tag>

(see `read2tree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_read2tree| image:: https://img.shields.io/conda/dn/bioconda/read2tree.svg?style=flat
   :target: https://anaconda.org/bioconda/read2tree
   :alt:   (downloads)
.. |docker_read2tree| image:: https://quay.io/repository/biocontainers/read2tree/status
   :target: https://quay.io/repository/biocontainers/read2tree
.. _`read2tree/tags`: https://quay.io/repository/biocontainers/read2tree?tab=tags


.. raw:: html

    <script>
        var package = "read2tree";
        var versions = ["2.0.1","2.0.0","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/read2tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/read2tree/README.html