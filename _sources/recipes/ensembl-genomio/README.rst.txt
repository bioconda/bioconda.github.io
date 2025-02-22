:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-genomio'
.. highlight: bash

ensembl-genomio
===============

.. conda:recipe:: ensembl-genomio
   :replaces_section_title:
   :noindex:

   Ensembl GenomIO \- tools to convert basic genomic data into Ensembl cores and back to flatfile

   :homepage: https://www.ensembl.org/
   :documentation: https://ensembl.github.io/ensembl-genomio/
   
   :developer docs: https://github.com/Ensembl/ensembl-genomio
   :license: APACHE / Apache-2.0
   :recipe: /`ensembl-genomio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-genomio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-genomio/meta.yaml>`_
   :links: biotools: :biotools:`Ensembl`

   


.. conda:package:: ensembl-genomio

   |downloads_ensembl-genomio| |docker_ensembl-genomio|

   :versions:
      
      

      ``1.6.1-0``

      

   
   :depends bcbio-gff: ``0.7.1``
   :depends biopython: ``>=1.81``
   :depends ensembl-py: ``>=2.1.2``
   :depends ensembl-utils: ``>=0.5.1``
   :depends intervaltree: ``>=3.1.0``
   :depends jsonschema: ``>=4.6.0``
   :depends mysql-connector-python: ``>=8.0.29``
   :depends python: ``>=3.10``
   :depends python-redmine: ``>=2.3.0``
   :depends requests: ``>=2.28.0``
   :depends spython: ``>=0.3.13``
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

      mamba install ensembl-genomio

   and update with::

      mamba update ensembl-genomio

  To create a new environment, run::

      mamba create --name myenvname ensembl-genomio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ensembl-genomio:<tag>

   (see `ensembl-genomio/tags`_ for valid values for ``<tag>``)


.. |downloads_ensembl-genomio| image:: https://img.shields.io/conda/dn/bioconda/ensembl-genomio.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-genomio
   :alt:   (downloads)
.. |docker_ensembl-genomio| image:: https://quay.io/repository/biocontainers/ensembl-genomio/status
   :target: https://quay.io/repository/biocontainers/ensembl-genomio
.. _`ensembl-genomio/tags`: https://quay.io/repository/biocontainers/ensembl-genomio?tab=tags


.. raw:: html

    <script>
        var package = "ensembl-genomio";
        var versions = ["1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-genomio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-genomio/README.html