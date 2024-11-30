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

      

   
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install barcode_splitter

   and update with::

      mamba update barcode_splitter

  To create a new environment, run::

      mamba create --name myenvname barcode_splitter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barcode_splitter:<tag>

   (see `barcode_splitter/tags`_ for valid values for ``<tag>``)


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