:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alloshp'
.. highlight: bash

alloshp
=======

.. conda:recipe:: alloshp
   :replaces_section_title:
   :noindex:

   From mapped reads to Single Homeologous Polymorphisms \(SHPs\)\: pipeline for phylogenetic studies of allopolyploids

   :homepage: https://github.com/eead-csic-compbio/AlloSHP
   :license: APACHE / Apache-2.0
   :recipe: /`alloshp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alloshp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alloshp/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.07.17.665301`

   This 3\-step protocol computes Whole Genome Alignments \(WGA\) to discover Single Homeologous Polymorphisms \(SHPs\) out of reads mapped to concatenated genome sequeces. It requires FASTA and VCF input files and produces multiple sequence alignments of subgenomes that make up allopolyploids.


.. conda:package:: alloshp

   |downloads_alloshp| |docker_alloshp|

   :versions:
      
      

      ``2025.09.12-0``,  ``2025.09.08-0``,  ``2025.09.08d-0``

      

   
   :depends on bzip2: 
   :depends on coreutils: 
   :depends on gnuplot: 
   :depends on grep: 
   :depends on gsalign: 
   :depends on gzip: 
   :depends on libgcc: ``>=13``
   :depends on make: 
   :depends on perl: 
   :depends on perl-db_file: 
   :depends on red: 

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

    pixi global install alloshp

to add into an existing workspace instead, run::

    pixi add alloshp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alloshp

Alternatively, to install into a new environment, run::

    conda create -n envname alloshp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alloshp:<tag>

(see `alloshp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alloshp| image:: https://img.shields.io/conda/dn/bioconda/alloshp.svg?style=flat
   :target: https://anaconda.org/bioconda/alloshp
   :alt:   (downloads)
.. |docker_alloshp| image:: https://quay.io/repository/biocontainers/alloshp/status
   :target: https://quay.io/repository/biocontainers/alloshp
.. _`alloshp/tags`: https://quay.io/repository/biocontainers/alloshp?tab=tags


.. raw:: html

    <script>
        var package = "alloshp";
        var versions = ["2025.09.12","2025.09.08","2025.09.08d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alloshp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alloshp/README.html