:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fscanr'
.. highlight: bash

bioconductor-fscanr
===================

.. conda:recipe:: bioconductor-fscanr
   :replaces_section_title:
   :noindex:

   Detect Programmed Ribosomal Frameshifting Events from mRNA\/cDNA BLASTX Output

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FScanR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fscanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fscanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fscanr/meta.yaml>`_

   \'FScanR\' identifies Programmed Ribosomal Frameshifting \(PRF\) events from BLASTX homolog sequence alignment between targeted genomic\/cDNA\/mRNA sequences against the peptide library of the same species or a close relative. The output by BLASTX or diamond BLASTX will be used as input of \'FScanR\' and should be in a tabular format with 14 columns. For BLASTX\, the output parameter should be\: \-outfmt \'6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qframe sframe\'. For diamond BLASTX\, the output parameter should be\: \-outfmt 6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qframe qframe.


.. conda:package:: bioconductor-fscanr

   |downloads_bioconductor-fscanr| |docker_bioconductor-fscanr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-fscanr

   and update with::

      mamba update bioconductor-fscanr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fscanr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fscanr:<tag>

   (see `bioconductor-fscanr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fscanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fscanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fscanr
   :alt:   (downloads)
.. |docker_bioconductor-fscanr| image:: https://quay.io/repository/biocontainers/bioconductor-fscanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fscanr
.. _`bioconductor-fscanr/tags`: https://quay.io/repository/biocontainers/bioconductor-fscanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fscanr";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fscanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fscanr/README.html