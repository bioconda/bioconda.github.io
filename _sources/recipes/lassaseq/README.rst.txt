:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lassaseq'
.. highlight: bash

lassaseq
========

.. conda:recipe:: lassaseq
   :replaces_section_title:
   :noindex:

   Tool for downloading Lassa virus sequences

   :homepage: https://github.com/DaanJansen94/LassaSeq
   :documentation: https://github.com/DaanJansen94/LassaSeq/blob/master/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`lassaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassaseq/meta.yaml>`_

   LassaSeq is a command\-line tool that simplifies the process of analyzing Lassa virus sequences. 
   It automates the complete workflow from downloading sequences to creating phylogenetic trees\, 
   with special handling for Lassa\'s bi\-segmented genome.



.. conda:package:: lassaseq

   |downloads_lassaseq| |docker_lassaseq|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on iqtree: 
   :depends on mafft: 
   :depends on numpy: ``>=1.20.0``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.25.0``
   :depends on tqdm: ``>=4.50.0``
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

    pixi global install lassaseq

to add into an existing workspace instead, run::

    pixi add lassaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lassaseq

Alternatively, to install into a new environment, run::

    conda create -n envname lassaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lassaseq:<tag>

(see `lassaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lassaseq| image:: https://img.shields.io/conda/dn/bioconda/lassaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/lassaseq
   :alt:   (downloads)
.. |docker_lassaseq| image:: https://quay.io/repository/biocontainers/lassaseq/status
   :target: https://quay.io/repository/biocontainers/lassaseq
.. _`lassaseq/tags`: https://quay.io/repository/biocontainers/lassaseq?tab=tags


.. raw:: html

    <script>
        var package = "lassaseq";
        var versions = ["0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lassaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lassaseq/README.html