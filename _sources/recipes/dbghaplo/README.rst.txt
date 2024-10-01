:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbghaplo'
.. highlight: bash

dbghaplo
========

.. conda:recipe:: dbghaplo
   :replaces_section_title:
   :noindex:

   Haplotyping small sequences from heterogeneous long\-read sequencing samples with a SNP\-encoded positional de Bruijn Graph.

   :homepage: https://github.com/bluenote-1577/dbghaplo
   :license: MIT
   :recipe: /`dbghaplo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbghaplo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbghaplo/meta.yaml>`_

   


.. conda:package:: dbghaplo

   |downloads_dbghaplo| |docker_dbghaplo|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends lofreq: ``>=2.1.5``
   :depends minimap2: 
   :depends pysam: ``>=0.16``
   :depends python: 
   :depends samtools: 
   :depends tabix: 
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

      mamba install dbghaplo

   and update with::

      mamba update dbghaplo

  To create a new environment, run::

      mamba create --name myenvname dbghaplo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dbghaplo:<tag>

   (see `dbghaplo/tags`_ for valid values for ``<tag>``)


.. |downloads_dbghaplo| image:: https://img.shields.io/conda/dn/bioconda/dbghaplo.svg?style=flat
   :target: https://anaconda.org/bioconda/dbghaplo
   :alt:   (downloads)
.. |docker_dbghaplo| image:: https://quay.io/repository/biocontainers/dbghaplo/status
   :target: https://quay.io/repository/biocontainers/dbghaplo
.. _`dbghaplo/tags`: https://quay.io/repository/biocontainers/dbghaplo?tab=tags


.. raw:: html

    <script>
        var package = "dbghaplo";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbghaplo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbghaplo/README.html