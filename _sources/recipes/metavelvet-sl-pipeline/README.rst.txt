:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-sl-pipeline'
.. highlight: bash

metavelvet-sl-pipeline
======================

.. conda:recipe:: metavelvet-sl-pipeline
   :replaces_section_title:
   :noindex:

   Perl libraries that run the full pipeline for metavelvet\-sl

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline/meta.yaml>`_

   


.. conda:package:: metavelvet-sl-pipeline

   |downloads_metavelvet-sl-pipeline| |docker_metavelvet-sl-pipeline|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends dwgsim: 
   :depends libgcc: 
   :depends libsvm: 
   :depends metaphlan2: 
   :depends metavelvet-sl: 
   :depends metavelvet-sl-feature-extraction: 
   :depends perl: ``5.22.0*``
   :depends perl-app-cpanminus: 
   :depends perl-module-build: 
   :depends velvet: 
   :depends zlib: 
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

      mamba install metavelvet-sl-pipeline

   and update with::

      mamba update metavelvet-sl-pipeline

  To create a new environment, run::

      mamba create --name myenvname metavelvet-sl-pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metavelvet-sl-pipeline:<tag>

   (see `metavelvet-sl-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-sl-pipeline| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-sl-pipeline
   :alt:   (downloads)
.. |docker_metavelvet-sl-pipeline| image:: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline
.. _`metavelvet-sl-pipeline/tags`: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-sl-pipeline";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html