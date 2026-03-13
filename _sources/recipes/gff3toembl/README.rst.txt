:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff3toembl'
.. highlight: bash

gff3toembl
==========

.. conda:recipe:: gff3toembl
   :replaces_section_title:
   :noindex:

   Submitting annotated genomes to EMBL is a very difficult and time consuming process. This software converts GFF3 files from the most commonly use prokaryote annotation tool Prokka into a format that is suitable for submission to EMBL. It has been used to prepare more than 30\% of all annotated genomes in EMBL\/GenBank.

   :homepage: https://github.com/sanger-pathogens/gff3toembl/
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`gff3toembl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toembl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toembl/meta.yaml>`_

   


.. conda:package:: gff3toembl

   |downloads_gff3toembl| |docker_gff3toembl|

   :versions:
      
      

      ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends on genometools-genometools: 
   :depends on python: 
   :depends on six: 

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

    pixi global install gff3toembl

to add into an existing workspace instead, run::

    pixi add gff3toembl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gff3toembl

Alternatively, to install into a new environment, run::

    conda create -n envname gff3toembl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gff3toembl:<tag>

(see `gff3toembl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gff3toembl| image:: https://img.shields.io/conda/dn/bioconda/gff3toembl.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3toembl
   :alt:   (downloads)
.. |docker_gff3toembl| image:: https://quay.io/repository/biocontainers/gff3toembl/status
   :target: https://quay.io/repository/biocontainers/gff3toembl
.. _`gff3toembl/tags`: https://quay.io/repository/biocontainers/gff3toembl?tab=tags


.. raw:: html

    <script>
        var package = "gff3toembl";
        var versions = ["1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3toembl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3toembl/README.html