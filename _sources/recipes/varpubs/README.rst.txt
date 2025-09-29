:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varpubs'
.. highlight: bash

varpubs
=======

.. conda:recipe:: varpubs
   :replaces_section_title:
   :noindex:

   Tool for finding PubMed evidence on genetic variants and generating LLM\-based summaries

   :homepage: https://github.com/koesterlab/varpubs
   :license: MIT
   :recipe: /`varpubs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varpubs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varpubs/meta.yaml>`_

   


.. conda:package:: varpubs

   |downloads_varpubs| |docker_varpubs|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.85,<2``
   :depends cyvcf2: ``>=0.31.1,<0.32``
   :depends duckdb: ``>=1.2.1,<2``
   :depends duckdb-engine: ``>=0.15.0,<0.16``
   :depends openai: ``>=1.97.0,<2``
   :depends python: ``>=3.11``
   :depends simple-parsing: 
   :depends sqlalchemy: ``>=2.0.39,<3``
   :depends sqlmodel: ``>=0.0.24,<0.0.25``
   :depends typed-argument-parser: ``>=1.10.1,<2``
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

      mamba install varpubs

   and update with::

      mamba update varpubs

  To create a new environment, run::

      mamba create --name myenvname varpubs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varpubs:<tag>

   (see `varpubs/tags`_ for valid values for ``<tag>``)


.. |downloads_varpubs| image:: https://img.shields.io/conda/dn/bioconda/varpubs.svg?style=flat
   :target: https://anaconda.org/bioconda/varpubs
   :alt:   (downloads)
.. |docker_varpubs| image:: https://quay.io/repository/biocontainers/varpubs/status
   :target: https://quay.io/repository/biocontainers/varpubs
.. _`varpubs/tags`: https://quay.io/repository/biocontainers/varpubs?tab=tags


.. raw:: html

    <script>
        var package = "varpubs";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varpubs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varpubs/README.html