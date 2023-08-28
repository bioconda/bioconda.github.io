:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fatovcf'
.. highlight: bash

ucsc-fatovcf
============

.. conda:recipe:: ucsc-fatovcf
   :replaces_section_title:
   :noindex:

   Extract VCF from a multi\-sequence FASTA alignment

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatovcf/meta.yaml>`_

   


.. conda:package:: ucsc-fatovcf

   |downloads_ucsc-fatovcf| |docker_ucsc-fatovcf|

   :versions:
      
      

      ``448-0``,  ``426-0``,  ``407-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: 
   :depends openssl: ``>=3.1.1,<4.0a0``
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

      mamba install ucsc-fatovcf

   and update with::

      mamba update ucsc-fatovcf

  To create a new environment, run::

      mamba create --name myenvname ucsc-fatovcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-fatovcf:<tag>

   (see `ucsc-fatovcf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fatovcf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatovcf.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fatovcf
   :alt:   (downloads)
.. |docker_ucsc-fatovcf| image:: https://quay.io/repository/biocontainers/ucsc-fatovcf/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatovcf
.. _`ucsc-fatovcf/tags`: https://quay.io/repository/biocontainers/ucsc-fatovcf?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-fatovcf";
        var versions = ["448","426","407"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatovcf/README.html