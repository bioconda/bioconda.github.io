:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megapath'
.. highlight: bash

megapath
========

.. conda:recipe:: megapath
   :replaces_section_title:
   :noindex:

   MegaPath\: sensitive and rapid pathogen detection using metagenomic NGS data\; MegaPath\-Amplicon\: filtering module for metagenomic amplicon data

   :homepage: https://github.com/HKU-BAL/MegaPath
   :license: BSD-3-Clause
   :recipe: /`megapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath/meta.yaml>`_

   


.. conda:package:: megapath

   |downloads_megapath| |docker_megapath|

   :versions:
      
      

      ``2-4``,  ``2-3``,  ``2-2``,  ``2-1``,  ``2-0``,  ``1.0-0``

      

   
   :depends bedtools: 
   :depends bwa: ``0.7.12.*``
   :depends gatk4: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends megahit: ``1.1.*``
   :depends minimap2: 
   :depends pandas: 
   :depends parallel: ``20191122.*``
   :depends pypy3.6: 
   :depends pysam: ``0.16.0.1.*``
   :depends python: ``3.6.*``
   :depends samtools: ``1.10.*``
   :depends seqtk: 
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

      mamba install megapath

   and update with::

      mamba update megapath

  To create a new environment, run::

      mamba create --name myenvname megapath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megapath:<tag>

   (see `megapath/tags`_ for valid values for ``<tag>``)


.. |downloads_megapath| image:: https://img.shields.io/conda/dn/bioconda/megapath.svg?style=flat
   :target: https://anaconda.org/bioconda/megapath
   :alt:   (downloads)
.. |docker_megapath| image:: https://quay.io/repository/biocontainers/megapath/status
   :target: https://quay.io/repository/biocontainers/megapath
.. _`megapath/tags`: https://quay.io/repository/biocontainers/megapath?tab=tags


.. raw:: html

    <script>
        var package = "megapath";
        var versions = ["2","2","2","2","2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megapath/README.html