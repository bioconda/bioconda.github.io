:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barcode_splitter'
.. highlight: bash

barcode_splitter
================

.. conda:recipe:: barcode_splitter
   :replaces_section_title:
   :noindex:

   Split multiple fastq files by matching barcodes in one or more of the sequence files. Barcodes in the tab\-delimited barcodes.txt file are matched against the beginning \(or end\) of the specified index read\(s\). By default\, barcodes must match exactly\, but \-\-mistmatches can be set higher if desired. Compressed input is read \(from all files\) if the first input file name ends in .gz. Reading of compressed input can be forced with the gzipin option.

   :homepage: https://bitbucket.org/princeton_genomics/barcode_splitter
   :license: GNU
   :recipe: /`barcode_splitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode_splitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode_splitter/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.2566616`

   


.. conda:package:: barcode_splitter

   |downloads_barcode_splitter| |docker_barcode_splitter|

   :versions:
      
      

      ``0.18.6-0``,  ``0.18.5-0``,  ``0.18.4-0``

      

   
   :depends on python: 

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

    pixi global install barcode_splitter

to add into an existing workspace instead, run::

    pixi add barcode_splitter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install barcode_splitter

Alternatively, to install into a new environment, run::

    conda create -n envname barcode_splitter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/barcode_splitter:<tag>

(see `barcode_splitter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_barcode_splitter| image:: https://img.shields.io/conda/dn/bioconda/barcode_splitter.svg?style=flat
   :target: https://anaconda.org/bioconda/barcode_splitter
   :alt:   (downloads)
.. |docker_barcode_splitter| image:: https://quay.io/repository/biocontainers/barcode_splitter/status
   :target: https://quay.io/repository/biocontainers/barcode_splitter
.. _`barcode_splitter/tags`: https://quay.io/repository/biocontainers/barcode_splitter?tab=tags


.. raw:: html

    <script>
        var package = "barcode_splitter";
        var versions = ["0.18.6","0.18.5","0.18.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barcode_splitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barcode_splitter/README.html