:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ismapper'
.. highlight: bash

ismapper
========

.. conda:recipe:: ismapper
   :replaces_section_title:
   :noindex:

   A mapping\-based tool for identification of the site and orientation of IS insertions in bacterial genomes.

   :homepage: https://github.com/jhawkey/IS_mapper/
   :license: BSD
   :recipe: /`ismapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1860-2`

   


.. conda:package:: ismapper

   |downloads_ismapper| |docker_ismapper|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-1``

      

   
   :depends bedtools: ``>=2.20``
   :depends biopython: ``>=1.63``
   :depends blast: ``>=2.2.28``
   :depends bwa: ``>=0.7.5a``
   :depends python: ``>=3.6``
   :depends samtools: ``>=0.1.19``
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

      mamba install ismapper

   and update with::

      mamba update ismapper

  To create a new environment, run::

      mamba create --name myenvname ismapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ismapper:<tag>

   (see `ismapper/tags`_ for valid values for ``<tag>``)


.. |downloads_ismapper| image:: https://img.shields.io/conda/dn/bioconda/ismapper.svg?style=flat
   :target: https://anaconda.org/bioconda/ismapper
   :alt:   (downloads)
.. |docker_ismapper| image:: https://quay.io/repository/biocontainers/ismapper/status
   :target: https://quay.io/repository/biocontainers/ismapper
.. _`ismapper/tags`: https://quay.io/repository/biocontainers/ismapper?tab=tags


.. raw:: html

    <script>
        var package = "ismapper";
        var versions = ["2.0.2","2.0.2","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ismapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ismapper/README.html