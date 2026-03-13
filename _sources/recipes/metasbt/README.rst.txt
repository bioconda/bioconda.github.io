:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasbt'
.. highlight: bash

metasbt
=======

.. conda:recipe:: metasbt
   :replaces_section_title:
   :noindex:

   Microbial genomes characterization with Sequence Bloom Trees.

   :homepage: https://github.com/cumbof/MetaSBT
   :license: MIT / MIT
   :recipe: /`metasbt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasbt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasbt/meta.yaml>`_

   A scalable framework for automatically indexing microbial genomes and accurately 
   characterizing metagenome\-assembled genomes with Sequence Bloom Trees



.. conda:package:: metasbt

   |downloads_metasbt| |docker_metasbt|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4.post1-0``

      

   
   :depends on biopython: ``>=1.85``
   :depends on busco: ``>=5.8.3``
   :depends on checkm-genome: ``>=1.2.4``
   :depends on checkv: ``>=1.0.3``
   :depends on fastcluster: ``<1.3.0``
   :depends on howdesbt: ``>=2.00.15``
   :depends on kitsune: ``>=1.3.5``
   :depends on kraken2: ``>=2.1.3``
   :depends on ncbitax2lin: ``>=2.4.1``
   :depends on ntcard: ``>=1.2.2``
   :depends on numpy: ``1.26.4.*``
   :depends on packaging: ``>=25.0``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.32.4``
   :depends on scipy: ``>=1.13.1``
   :depends on tabulate: ``>=0.9.0``
   :depends on tqdm: ``>=4.67.1``

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

    pixi global install metasbt

to add into an existing workspace instead, run::

    pixi add metasbt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metasbt

Alternatively, to install into a new environment, run::

    conda create -n envname metasbt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metasbt:<tag>

(see `metasbt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metasbt| image:: https://img.shields.io/conda/dn/bioconda/metasbt.svg?style=flat
   :target: https://anaconda.org/bioconda/metasbt
   :alt:   (downloads)
.. |docker_metasbt| image:: https://quay.io/repository/biocontainers/metasbt/status
   :target: https://quay.io/repository/biocontainers/metasbt
.. _`metasbt/tags`: https://quay.io/repository/biocontainers/metasbt?tab=tags


.. raw:: html

    <script>
        var package = "metasbt";
        var versions = ["0.1.5","0.1.4.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasbt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasbt/README.html