:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfs_code'
.. highlight: bash

sfs_code
========

.. conda:recipe:: sfs_code
   :replaces_section_title:
   :noindex:

   This article introduces a new forward population genetic simulation program that can efficiently generate samples from populations with complex demographic histories under various models of natural selection. The program \(SFS\_CODE\) is highly flexible\, allowing the user to simulate realistic genomic regions with several loci evolving according to a variety of mutation models \(from simple to context\-dependent\)\, and allows for insertions and deletions. Each locus can be annotated as either coding or non\-coding\, sex\-linked or autosomal\, selected or neutral\, and have an arbitrary linkage structure \(from completely linked to independent\). © The Author 2008. Published by Oxford University Press. All rights reserved.

   :homepage: http://sfscode.sourceforge.net/SFS_CODE/index/index.html
   :license: file
   :recipe: /`sfs_code <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs_code>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs_code/meta.yaml>`_
   :links: biotools: :biotools:`sfs_code`, doi: :doi:`10.1093/bioinformatics/btn522`

   


.. conda:package:: sfs_code

   |downloads_sfs_code| |docker_sfs_code|

   :versions:
      
      

      ``20150910-6``,  ``20150910-5``,  ``20150910-4``,  ``20150910-3``,  ``20150910-2``,  ``20150910-1``,  ``20150910-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install sfs_code

   and update with::

      mamba update sfs_code

  To create a new environment, run::

      mamba create --name myenvname sfs_code

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sfs_code:<tag>

   (see `sfs_code/tags`_ for valid values for ``<tag>``)


.. |downloads_sfs_code| image:: https://img.shields.io/conda/dn/bioconda/sfs_code.svg?style=flat
   :target: https://anaconda.org/bioconda/sfs_code
   :alt:   (downloads)
.. |docker_sfs_code| image:: https://quay.io/repository/biocontainers/sfs_code/status
   :target: https://quay.io/repository/biocontainers/sfs_code
.. _`sfs_code/tags`: https://quay.io/repository/biocontainers/sfs_code?tab=tags


.. raw:: html

    <script>
        var package = "sfs_code";
        var versions = ["20150910","20150910","20150910","20150910","20150910"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfs_code/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfs_code/README.html