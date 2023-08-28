:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgdspider'
.. highlight: bash

pgdspider
=========

.. conda:recipe:: pgdspider
   :replaces_section_title:
   :noindex:

   An automated data conversion tool for connecting population genetics and genomics programs

   :homepage: http://www.cmpg.unibe.ch/software/PGDSpider/
   :license: BSD / BSD-3-clause
   :recipe: /`pgdspider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgdspider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgdspider/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btr642`

   PGDSpider is a powerful automated data conversion tool for population genetic and genomics programs.
   It facilitates the data exchange possibilities between programs for a vast range of data types
   \(e.g. DNA\, RNA\, NGS\, microsatellite\, SNP\, RFLP\, AFLP\, multi\-allelic data\, allele frequency or genetic distances\).



.. conda:package:: pgdspider

   |downloads_pgdspider| |docker_pgdspider|

   :versions:
      
      

      ``2.1.1.5-1``,  ``2.1.1.5-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
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

      mamba install pgdspider

   and update with::

      mamba update pgdspider

  To create a new environment, run::

      mamba create --name myenvname pgdspider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgdspider:<tag>

   (see `pgdspider/tags`_ for valid values for ``<tag>``)


.. |downloads_pgdspider| image:: https://img.shields.io/conda/dn/bioconda/pgdspider.svg?style=flat
   :target: https://anaconda.org/bioconda/pgdspider
   :alt:   (downloads)
.. |docker_pgdspider| image:: https://quay.io/repository/biocontainers/pgdspider/status
   :target: https://quay.io/repository/biocontainers/pgdspider
.. _`pgdspider/tags`: https://quay.io/repository/biocontainers/pgdspider?tab=tags


.. raw:: html

    <script>
        var package = "pgdspider";
        var versions = ["2.1.1.5","2.1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgdspider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgdspider/README.html