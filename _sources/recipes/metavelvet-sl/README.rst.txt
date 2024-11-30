:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-sl'
.. highlight: bash

metavelvet-sl
=============

.. conda:recipe:: metavelvet-sl
   :replaces_section_title:
   :noindex:

   MetaVelvet\-SL \: An extension of Velvet assembler to de novo metagenomic assembler utilizing supervised learning

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl/meta.yaml>`_

   


.. conda:package:: metavelvet-sl

   |downloads_metavelvet-sl| |docker_metavelvet-sl|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends dwgsim: 
   :depends libgcc: 
   :depends libsvm: 
   :depends metaphlan2: 
   :depends metavelvet-sl-feature-extraction: 
   :depends perl: ``5.22.0*``
   :depends perl-app-cpanminus: 
   :depends perl-module-build: 
   :depends velvet: 
   :depends zlib: ``1.2.11*``
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

      mamba install metavelvet-sl

   and update with::

      mamba update metavelvet-sl

  To create a new environment, run::

      mamba create --name myenvname metavelvet-sl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metavelvet-sl:<tag>

   (see `metavelvet-sl/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-sl| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-sl
   :alt:   (downloads)
.. |docker_metavelvet-sl| image:: https://quay.io/repository/biocontainers/metavelvet-sl/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl
.. _`metavelvet-sl/tags`: https://quay.io/repository/biocontainers/metavelvet-sl?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-sl";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl/README.html