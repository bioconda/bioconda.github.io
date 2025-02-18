:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutalyzer_hgvs_parser'
.. highlight: bash

mutalyzer_hgvs_parser
=====================

.. conda:recipe:: mutalyzer_hgvs_parser
   :replaces_section_title:
   :noindex:

   Mutalyzer HGVS variant description parser

   :homepage: The package home page
   :documentation: https://mutalyzer-hgvs-parser.readthedocs.io
   
   :developer docs: https://github.com/mutalyzer/hgvs-parser
   :license: MIT / MIT
   :recipe: /`mutalyzer_hgvs_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutalyzer_hgvs_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutalyzer_hgvs_parser/meta.yaml>`_

   


.. conda:package:: mutalyzer_hgvs_parser

   |downloads_mutalyzer_hgvs_parser| |docker_mutalyzer_hgvs_parser|

   :versions:
      
      

      ``0.3.7-0``

      

   
   :depends lark: ``>=1.0.0``
   :depends python: 
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

      mamba install mutalyzer_hgvs_parser

   and update with::

      mamba update mutalyzer_hgvs_parser

  To create a new environment, run::

      mamba create --name myenvname mutalyzer_hgvs_parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutalyzer_hgvs_parser:<tag>

   (see `mutalyzer_hgvs_parser/tags`_ for valid values for ``<tag>``)


.. |downloads_mutalyzer_hgvs_parser| image:: https://img.shields.io/conda/dn/bioconda/mutalyzer_hgvs_parser.svg?style=flat
   :target: https://anaconda.org/bioconda/mutalyzer_hgvs_parser
   :alt:   (downloads)
.. |docker_mutalyzer_hgvs_parser| image:: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser/status
   :target: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser
.. _`mutalyzer_hgvs_parser/tags`: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser?tab=tags


.. raw:: html

    <script>
        var package = "mutalyzer_hgvs_parser";
        var versions = ["0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutalyzer_hgvs_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutalyzer_hgvs_parser/README.html