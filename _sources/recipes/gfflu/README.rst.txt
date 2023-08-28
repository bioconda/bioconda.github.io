:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfflu'
.. highlight: bash

gfflu
=====

.. conda:recipe:: gfflu
   :replaces_section_title:
   :noindex:

   Annotate Influenza A virus gene segment sequences and output GFF3 files.

   :homepage: https://github.com/CFIA-NCFAD/gfflu
   :license: MIT
   :recipe: /`gfflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu/meta.yaml>`_

   


.. conda:package:: gfflu

   |downloads_gfflu| |docker_gfflu|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends blast: 
   :depends miniprot: 
   :depends polars: 
   :depends python: ``>=3.8``
   :depends rich: 
   :depends typer: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gfflu

   and update with::

      mamba update gfflu

  To create a new environment, run::

      mamba create --name myenvname gfflu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfflu:<tag>

   (see `gfflu/tags`_ for valid values for ``<tag>``)


.. |downloads_gfflu| image:: https://img.shields.io/conda/dn/bioconda/gfflu.svg?style=flat
   :target: https://anaconda.org/bioconda/gfflu
   :alt:   (downloads)
.. |docker_gfflu| image:: https://quay.io/repository/biocontainers/gfflu/status
   :target: https://quay.io/repository/biocontainers/gfflu
.. _`gfflu/tags`: https://quay.io/repository/biocontainers/gfflu?tab=tags


.. raw:: html

    <script>
        var package = "gfflu";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfflu/README.html