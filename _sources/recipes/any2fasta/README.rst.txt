:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'any2fasta'
.. highlight: bash

any2fasta
=========

.. conda:recipe:: any2fasta
   :replaces_section_title:
   :noindex:

   Convert various sequence formats to FASTA

   :homepage: https://github.com/tseemann/any2fasta
   :license: GPL / GPL-3.0
   :recipe: /`any2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta/meta.yaml>`_
   :links: biotools: :biotools:`any2fasta`

   


.. conda:package:: any2fasta

   |downloads_any2fasta| |docker_any2fasta|

   :versions:
      
      

      ``0.8.1-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.4.2-3``,  ``0.4.2-2``,  ``0.4.2-1``

      

   
   :depends on bzip2: 
   :depends on gzip: 
   :depends on perl: ``>=5.18.0``
   :depends on unzip: 
   :depends on xz: 

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

    pixi global install any2fasta

to add into an existing workspace instead, run::

    pixi add any2fasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install any2fasta

Alternatively, to install into a new environment, run::

    conda create -n envname any2fasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/any2fasta:<tag>

(see `any2fasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_any2fasta| image:: https://img.shields.io/conda/dn/bioconda/any2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/any2fasta
   :alt:   (downloads)
.. |docker_any2fasta| image:: https://quay.io/repository/biocontainers/any2fasta/status
   :target: https://quay.io/repository/biocontainers/any2fasta
.. _`any2fasta/tags`: https://quay.io/repository/biocontainers/any2fasta?tab=tags


.. raw:: html

    <script>
        var package = "any2fasta";
        var versions = ["0.8.1","0.6.2","0.6.0","0.4.2","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/any2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/any2fasta/README.html