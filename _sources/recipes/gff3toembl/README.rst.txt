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

      

   
   :depends genometools-genometools: 
   :depends python: 
   :depends six: 
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

      mamba install gff3toembl

   and update with::

      mamba update gff3toembl

  To create a new environment, run::

      mamba create --name myenvname gff3toembl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gff3toembl:<tag>

   (see `gff3toembl/tags`_ for valid values for ``<tag>``)


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