:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpsplit'
.. highlight: bash

snpsplit
========

.. conda:recipe:: snpsplit
   :replaces_section_title:
   :noindex:

   SNPsplit is an allele\-specific alignment sorter which is designed to read in alignment files in SAM\/BAM format and determine the allelic origin of reads that cover known SNP positions.

   :homepage: https://github.com/FelixKrueger/SNPsplit
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snpsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.9037.2`

   


.. conda:package:: snpsplit

   |downloads_snpsplit| |docker_snpsplit|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``

      

   
   :depends perl: 
   :depends samtools: ``>=1.7``
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

      mamba install snpsplit

   and update with::

      mamba update snpsplit

  To create a new environment, run::

      mamba create --name myenvname snpsplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpsplit:<tag>

   (see `snpsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_snpsplit| image:: https://img.shields.io/conda/dn/bioconda/snpsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/snpsplit
   :alt:   (downloads)
.. |docker_snpsplit| image:: https://quay.io/repository/biocontainers/snpsplit/status
   :target: https://quay.io/repository/biocontainers/snpsplit
.. _`snpsplit/tags`: https://quay.io/repository/biocontainers/snpsplit?tab=tags


.. raw:: html

    <script>
        var package = "snpsplit";
        var versions = ["0.6.0","0.5.0","0.4.0","0.4.0","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsplit/README.html