:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-bwa-plus'
.. highlight: bash

hmftools-bwa-plus
=================

.. conda:recipe:: hmftools-bwa-plus
   :replaces_section_title:
   :noindex:

   bwa\-mem with extensions for WiGiTS

   :homepage: https://github.com/hartwigmedical/bwa-plus
   :license: MIT
   :recipe: /`hmftools-bwa-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bwa-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bwa-plus/meta.yaml>`_

   


.. conda:package:: hmftools-bwa-plus

   |downloads_hmftools-bwa-plus| |docker_hmftools-bwa-plus|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends sambamba: ``>=1.0.1``
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

      mamba install hmftools-bwa-plus

   and update with::

      mamba update hmftools-bwa-plus

  To create a new environment, run::

      mamba create --name myenvname hmftools-bwa-plus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-bwa-plus:<tag>

   (see `hmftools-bwa-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-bwa-plus| image:: https://img.shields.io/conda/dn/bioconda/hmftools-bwa-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-bwa-plus
   :alt:   (downloads)
.. |docker_hmftools-bwa-plus| image:: https://quay.io/repository/biocontainers/hmftools-bwa-plus/status
   :target: https://quay.io/repository/biocontainers/hmftools-bwa-plus
.. _`hmftools-bwa-plus/tags`: https://quay.io/repository/biocontainers/hmftools-bwa-plus?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-bwa-plus";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-bwa-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-bwa-plus/README.html