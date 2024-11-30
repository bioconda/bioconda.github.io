:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expansionhunterdenovo'
.. highlight: bash

expansionhunterdenovo
=====================

.. conda:recipe:: expansionhunterdenovo
   :replaces_section_title:
   :noindex:

   ExpansionHunter Denovo \(EHdn\) is a suite of tools for detecting novel expansions of short tandem repeats \(STRs\).

   :homepage: https://github.com/Illumina/ExpansionHunterDenovo
   :license: Apache License 2.0
   :recipe: /`expansionhunterdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunterdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunterdenovo/meta.yaml>`_

   


.. conda:package:: expansionhunterdenovo

   |downloads_expansionhunterdenovo| |docker_expansionhunterdenovo|

   :versions:
      
      

      ``0.9.0-8``,  ``0.9.0-7``,  ``0.9.0-6``,  ``0.9.0-5``,  ``0.9.0-4``,  ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends backports.lzma: 
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cmake: 
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends spdlog: ``1.4.2.*``
   :depends zlib: 
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

      mamba install expansionhunterdenovo

   and update with::

      mamba update expansionhunterdenovo

  To create a new environment, run::

      mamba create --name myenvname expansionhunterdenovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/expansionhunterdenovo:<tag>

   (see `expansionhunterdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_expansionhunterdenovo| image:: https://img.shields.io/conda/dn/bioconda/expansionhunterdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/expansionhunterdenovo
   :alt:   (downloads)
.. |docker_expansionhunterdenovo| image:: https://quay.io/repository/biocontainers/expansionhunterdenovo/status
   :target: https://quay.io/repository/biocontainers/expansionhunterdenovo
.. _`expansionhunterdenovo/tags`: https://quay.io/repository/biocontainers/expansionhunterdenovo?tab=tags


.. raw:: html

    <script>
        var package = "expansionhunterdenovo";
        var versions = ["0.9.0","0.9.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunterdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunterdenovo/README.html