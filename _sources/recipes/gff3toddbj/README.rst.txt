:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff3toddbj'
.. highlight: bash

gff3toddbj
==========

.. conda:recipe:: gff3toddbj
   :replaces_section_title:
   :noindex:

   Create a DDBJ annotation file from GFF3 and FASTA files

   :homepage: https://github.com/yamaton/gff3toddbj
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gff3toddbj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toddbj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toddbj/meta.yaml>`_

   


.. conda:package:: gff3toddbj

   |downloads_gff3toddbj| |docker_gff3toddbj|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.1.1-0``

      

   
   :depends on bcbio-gff: ``<=0.7.1``
   :depends on biopython: ``<=1.86``
   :depends on pysam: 
   :depends on python: ``>=3.9,<3.14``
   :depends on samtools: 
   :depends on toml: 

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

    pixi global install gff3toddbj

to add into an existing workspace instead, run::

    pixi add gff3toddbj

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gff3toddbj

Alternatively, to install into a new environment, run::

    conda create -n envname gff3toddbj

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gff3toddbj:<tag>

(see `gff3toddbj/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gff3toddbj| image:: https://img.shields.io/conda/dn/bioconda/gff3toddbj.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3toddbj
   :alt:   (downloads)
.. |docker_gff3toddbj| image:: https://quay.io/repository/biocontainers/gff3toddbj/status
   :target: https://quay.io/repository/biocontainers/gff3toddbj
.. _`gff3toddbj/tags`: https://quay.io/repository/biocontainers/gff3toddbj?tab=tags


.. raw:: html

    <script>
        var package = "gff3toddbj";
        var versions = ["0.4.3","0.4.0","0.3.0","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3toddbj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3toddbj/README.html