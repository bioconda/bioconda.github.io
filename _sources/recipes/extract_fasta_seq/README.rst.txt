:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_fasta_seq'
.. highlight: bash

extract_fasta_seq
=================

.. conda:recipe:: extract_fasta_seq
   :replaces_section_title:
   :noindex:

   To extract specific fasta sequences from a fasta file.

   :homepage: https://github.com/linzhi2013/extract_fasta_seq
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`extract_fasta_seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq/meta.yaml>`_
   :links: biotools: :biotools:`extract_fasta_seq`

   


.. conda:package:: extract_fasta_seq

   |downloads_extract_fasta_seq| |docker_extract_fasta_seq|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on python: ``>=2.7.15``

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

    pixi global install extract_fasta_seq

to add into an existing workspace instead, run::

    pixi add extract_fasta_seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install extract_fasta_seq

Alternatively, to install into a new environment, run::

    conda create -n envname extract_fasta_seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/extract_fasta_seq:<tag>

(see `extract_fasta_seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_extract_fasta_seq| image:: https://img.shields.io/conda/dn/bioconda/extract_fasta_seq.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_fasta_seq
   :alt:   (downloads)
.. |docker_extract_fasta_seq| image:: https://quay.io/repository/biocontainers/extract_fasta_seq/status
   :target: https://quay.io/repository/biocontainers/extract_fasta_seq
.. _`extract_fasta_seq/tags`: https://quay.io/repository/biocontainers/extract_fasta_seq?tab=tags


.. raw:: html

    <script>
        var package = "extract_fasta_seq";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_fasta_seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_fasta_seq/README.html