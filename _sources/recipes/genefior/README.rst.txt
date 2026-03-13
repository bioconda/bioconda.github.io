:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genefior'
.. highlight: bash

genefior
========

.. conda:recipe:: genefior
   :replaces_section_title:
   :noindex:

   Genefíor\: A customisable and multi\-tool approach for gene detection

   :homepage: https://github.com/NickJD/Genefior
   :license: GPL-3.0-only
   :recipe: /`genefior <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefior>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefior/meta.yaml>`_

   Genefíor orchestrates multiple alignment tools \(BLAST\, DIAMOND\, Bowtie2\, BWA\, Minimap2 and MMseqs2\) 
   to search DNA and protein sequences against AMR and user\-provided databases with transparent\, 
   coverage\-based validation.



.. conda:package:: genefior

   |downloads_genefior| |docker_genefior|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends on blast: ``>=2.17.0``
   :depends on bowtie2: ``>=2.5.4``
   :depends on bwa: ``>=0.7.19``
   :depends on diamond: ``>=2.1.13``
   :depends on minimap2: ``>=2.30``
   :depends on mmseqs2: 
   :depends on python: ``>=3.10``
   :depends on samtools: ``>=1.19.2``
   :depends on seqtk: ``>=1.4``

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

    pixi global install genefior

to add into an existing workspace instead, run::

    pixi add genefior

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genefior

Alternatively, to install into a new environment, run::

    conda create -n envname genefior

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genefior:<tag>

(see `genefior/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genefior| image:: https://img.shields.io/conda/dn/bioconda/genefior.svg?style=flat
   :target: https://anaconda.org/bioconda/genefior
   :alt:   (downloads)
.. |docker_genefior| image:: https://quay.io/repository/biocontainers/genefior/status
   :target: https://quay.io/repository/biocontainers/genefior
.. _`genefior/tags`: https://quay.io/repository/biocontainers/genefior?tab=tags


.. raw:: html

    <script>
        var package = "genefior";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genefior/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genefior/README.html