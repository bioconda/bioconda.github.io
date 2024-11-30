:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repenrich'
.. highlight: bash

repenrich
=========

.. conda:recipe:: repenrich
   :replaces_section_title:
   :noindex:

   RepEnrich is a method to estimate repetitive element enrichment using high\-throughput sequencing data.

   :homepage: https://github.com/nskvir/RepEnrich
   :license: Custom OSS
   :recipe: /`repenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich/meta.yaml>`_

   


.. conda:package:: repenrich

   |downloads_repenrich| |docker_repenrich|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bedtools: ``<2.24.0``
   :depends biopython: 
   :depends bowtie: 
   :depends python: ``<3``
   :depends samtools: 
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

      mamba install repenrich

   and update with::

      mamba update repenrich

  To create a new environment, run::

      mamba create --name myenvname repenrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repenrich:<tag>

   (see `repenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_repenrich| image:: https://img.shields.io/conda/dn/bioconda/repenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/repenrich
   :alt:   (downloads)
.. |docker_repenrich| image:: https://quay.io/repository/biocontainers/repenrich/status
   :target: https://quay.io/repository/biocontainers/repenrich
.. _`repenrich/tags`: https://quay.io/repository/biocontainers/repenrich?tab=tags


.. raw:: html

    <script>
        var package = "repenrich";
        var versions = ["1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repenrich/README.html