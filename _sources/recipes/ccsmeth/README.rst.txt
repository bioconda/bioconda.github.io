:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccsmeth'
.. highlight: bash

ccsmeth
=======

.. conda:recipe:: ccsmeth
   :replaces_section_title:
   :noindex:

   Detecting DNA methylation from PacBio CCS read

   :homepage: https://github.com/PengNi/ccsmeth
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`ccsmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth/meta.yaml>`_

   


.. conda:package:: ccsmeth

   |downloads_ccsmeth| |docker_ccsmeth|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends bedtools: ``2.30.0.*``
   :depends numpy: ``>=1.20.0``
   :depends pbccs: ``>=6.4.0``
   :depends pbmm2: ``>=1.9.0``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.19.0``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=1.2.0,<=2.1.0``
   :depends samtools: ``>=1.12``
   :depends scikit-learn: ``>=1.0.2``
   :depends setuptools: 
   :depends statsmodels: ``>=0.13.2``
   :depends tqdm: ``>=4.64.0``
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

      mamba install ccsmeth

   and update with::

      mamba update ccsmeth

  To create a new environment, run::

      mamba create --name myenvname ccsmeth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ccsmeth:<tag>

   (see `ccsmeth/tags`_ for valid values for ``<tag>``)


.. |downloads_ccsmeth| image:: https://img.shields.io/conda/dn/bioconda/ccsmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/ccsmeth
   :alt:   (downloads)
.. |docker_ccsmeth| image:: https://quay.io/repository/biocontainers/ccsmeth/status
   :target: https://quay.io/repository/biocontainers/ccsmeth
.. _`ccsmeth/tags`: https://quay.io/repository/biocontainers/ccsmeth?tab=tags


.. raw:: html

    <script>
        var package = "ccsmeth";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.4","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccsmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccsmeth/README.html