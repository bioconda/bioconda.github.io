:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amira'
.. highlight: bash

amira
=====

.. conda:recipe:: amira
   :replaces_section_title:
   :noindex:

   A tool to detect acquired AMR genes directly from long read sequencing data.

   :homepage: https://github.com/Danderson123/Amira
   :documentation: https://github.com/Danderson123/Amira/blob/main/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`amira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amira/meta.yaml>`_

   


.. conda:package:: amira

   |downloads_amira| |docker_amira|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      

   
   :depends on flye: ``2.9.3``
   :depends on joblib: ``1.2.0``
   :depends on kmer-jellyfish: ``2.3.0``
   :depends on matplotlib-base: ``3.6.2``
   :depends on minimap2: ``2.17``
   :depends on numpy: ``1.26.4``
   :depends on pandas: ``2.2.2``
   :depends on pyfastaq: ``3.17.0``
   :depends on pysam: ``0.22.0``
   :depends on pytest: ``7.2.0``
   :depends on python: ``3.10``
   :depends on racon: ``1.4.10``
   :depends on samtools: ``1.18``
   :depends on scipy: ``1.12.0``
   :depends on sourmash: ``4.8.4``
   :depends on suffix-tree: ``0.1.2``
   :depends on tqdm: ``4.67.1``

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

    pixi global install amira

to add into an existing workspace instead, run::

    pixi add amira

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amira

Alternatively, to install into a new environment, run::

    conda create -n envname amira

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amira:<tag>

(see `amira/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amira| image:: https://img.shields.io/conda/dn/bioconda/amira.svg?style=flat
   :target: https://anaconda.org/bioconda/amira
   :alt:   (downloads)
.. |docker_amira| image:: https://quay.io/repository/biocontainers/amira/status
   :target: https://quay.io/repository/biocontainers/amira
.. _`amira/tags`: https://quay.io/repository/biocontainers/amira?tab=tags


.. raw:: html

    <script>
        var package = "amira";
        var versions = ["0.11.0","0.10.0","0.9.3","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amira/README.html