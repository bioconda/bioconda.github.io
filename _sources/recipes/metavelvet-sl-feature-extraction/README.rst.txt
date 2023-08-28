:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-sl-feature-extraction'
.. highlight: bash

metavelvet-sl-feature-extraction
================================

.. conda:recipe:: metavelvet-sl-feature-extraction
   :replaces_section_title:
   :noindex:

   Perl libraries that do feature extraction for metavelvet\-sl

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl-feature-extraction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-feature-extraction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-feature-extraction/meta.yaml>`_

   


.. conda:package:: metavelvet-sl-feature-extraction

   |downloads_metavelvet-sl-feature-extraction| |docker_metavelvet-sl-feature-extraction|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-app-cpanminus: 
   :depends perl-module-build: 
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

      mamba install metavelvet-sl-feature-extraction

   and update with::

      mamba update metavelvet-sl-feature-extraction

  To create a new environment, run::

      mamba create --name myenvname metavelvet-sl-feature-extraction

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metavelvet-sl-feature-extraction:<tag>

   (see `metavelvet-sl-feature-extraction/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-sl-feature-extraction| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-feature-extraction.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-sl-feature-extraction
   :alt:   (downloads)
.. |docker_metavelvet-sl-feature-extraction| image:: https://quay.io/repository/biocontainers/metavelvet-sl-feature-extraction/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-feature-extraction
.. _`metavelvet-sl-feature-extraction/tags`: https://quay.io/repository/biocontainers/metavelvet-sl-feature-extraction?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-sl-feature-extraction";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-feature-extraction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-feature-extraction/README.html