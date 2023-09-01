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
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.1.1-0``

      

   
   :depends bcbio-gff: ``>=0.6.6``
   :depends biopython: ``>=1.75``
   :depends pysam: 
   :depends python: 
   :depends samtools: 
   :depends toml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gff3toddbj

   and update with::

      mamba update gff3toddbj

  To create a new environment, run::

      mamba create --name myenvname gff3toddbj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gff3toddbj:<tag>

   (see `gff3toddbj/tags`_ for valid values for ``<tag>``)


.. |downloads_gff3toddbj| image:: https://img.shields.io/conda/dn/bioconda/gff3toddbj.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3toddbj
   :alt:   (downloads)
.. |docker_gff3toddbj| image:: https://quay.io/repository/biocontainers/gff3toddbj/status
   :target: https://quay.io/repository/biocontainers/gff3toddbj
.. _`gff3toddbj/tags`: https://quay.io/repository/biocontainers/gff3toddbj?tab=tags


.. raw:: html

    <script>
        var package = "gff3toddbj";
        var versions = ["0.4.0","0.3.0","0.2.4","0.2.3","0.2.1"];
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