:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawatt'
.. highlight: bash

metawatt
========

.. conda:recipe:: metawatt
   :replaces_section_title:
   :noindex:

   MetaWatt is a metagenomic binning tool

   :homepage: https://sourceforge.net/projects/metawatt/
   :license: AFL
   :recipe: /`metawatt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawatt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawatt/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2012.00410`

   The Metawatt binner is a graphical binning tool that makes use of
   multivariate statistics of tetranucleotide frequencies and differential
   coverage based binning. It also performs taxonomic assessment of binning
   quality \(via diamond BLASTx\). Created bins can be edited and exported as
   fasta. The Metawatt is implemented in Java SWING and minimally depends on
   Diamond\, HMMer3.1\, BBMap\, Prodigal and the Batik library for the export of
   SVG graphics.



.. conda:package:: metawatt

   |downloads_metawatt| |docker_metawatt|

   :versions:
      
      

      ``3.5.3-3``,  ``3.5.3-2``,  ``3.5.3-1``,  ``3.5.3-0``

      

   
   :depends aragorn: 
   :depends bbmap: 
   :depends blast: 
   :depends diamond: ``0.7.*``
   :depends fasttree: 
   :depends hmmer: 
   :depends mafft: 
   :depends openjdk: 
   :depends prodigal: 
   :depends samtools: 
   :depends wget: 
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

      mamba install metawatt

   and update with::

      mamba update metawatt

  To create a new environment, run::

      mamba create --name myenvname metawatt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawatt:<tag>

   (see `metawatt/tags`_ for valid values for ``<tag>``)


.. |downloads_metawatt| image:: https://img.shields.io/conda/dn/bioconda/metawatt.svg?style=flat
   :target: https://anaconda.org/bioconda/metawatt
   :alt:   (downloads)
.. |docker_metawatt| image:: https://quay.io/repository/biocontainers/metawatt/status
   :target: https://quay.io/repository/biocontainers/metawatt
.. _`metawatt/tags`: https://quay.io/repository/biocontainers/metawatt?tab=tags


.. raw:: html

    <script>
        var package = "metawatt";
        var versions = ["3.5.3","3.5.3","3.5.3","3.5.3"];
    </script>





Notes
-----
metawatt \-\-help


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawatt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawatt/README.html