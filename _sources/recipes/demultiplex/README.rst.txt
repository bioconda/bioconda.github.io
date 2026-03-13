:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplex'
.. highlight: bash

demultiplex
===========

.. conda:recipe:: demultiplex
   :replaces_section_title:
   :noindex:

   Demultiplex any number of FASTA or a FASTQ files based on a list of barcodes

   :homepage: https://github.com/jfjlaros/demultiplex
   :documentation: https://demultiplex.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`demultiplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex/meta.yaml>`_

   


.. conda:package:: demultiplex

   |downloads_demultiplex| |docker_demultiplex|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``

      

   
   :depends on biopython: ``>=1.72``
   :depends on dict-trie: ``>=1.0.1``
   :depends on fastools: ``>=1.1.0``
   :depends on jit-open: ``>=1.0.1``
   :depends on poetry: 
   :depends on python: ``>=3.6``
   :depends on tssv: ``>=1.1.0``

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

    pixi global install demultiplex

to add into an existing workspace instead, run::

    pixi add demultiplex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install demultiplex

Alternatively, to install into a new environment, run::

    conda create -n envname demultiplex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/demultiplex:<tag>

(see `demultiplex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_demultiplex| image:: https://img.shields.io/conda/dn/bioconda/demultiplex.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplex
   :alt:   (downloads)
.. |docker_demultiplex| image:: https://quay.io/repository/biocontainers/demultiplex/status
   :target: https://quay.io/repository/biocontainers/demultiplex
.. _`demultiplex/tags`: https://quay.io/repository/biocontainers/demultiplex?tab=tags


.. raw:: html

    <script>
        var package = "demultiplex";
        var versions = ["1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplex/README.html