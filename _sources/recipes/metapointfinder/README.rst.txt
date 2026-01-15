:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapointfinder'
.. highlight: bash

metapointfinder
===============

.. conda:recipe:: metapointfinder
   :replaces_section_title:
   :noindex:

   MetaPointFinder is a tool for detecting and scoring resistance\- associated point mutations directly from long\-read and short\-read metagenomics sequencing data\, using the AMRFinder database as reference.

   :homepage: https://github.com/aldertzomer/metapointfinder
   :license: Apache / Apache-2.0
   :recipe: /`metapointfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapointfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapointfinder/meta.yaml>`_

   


.. conda:package:: metapointfinder

   |downloads_metapointfinder| |docker_metapointfinder|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends bioconductor-biostrings: ``2.74.0.*``
   :depends bioconductor-pwalign: ``1.2.0.*``
   :depends diamond: ``2.1.14.*``
   :depends kma: ``1.4.15.*``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends wget: ``1.21.4.*``
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

      mamba install metapointfinder

   and update with::

      mamba update metapointfinder

  To create a new environment, run::

      mamba create --name myenvname metapointfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metapointfinder:<tag>

   (see `metapointfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_metapointfinder| image:: https://img.shields.io/conda/dn/bioconda/metapointfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/metapointfinder
   :alt:   (downloads)
.. |docker_metapointfinder| image:: https://quay.io/repository/biocontainers/metapointfinder/status
   :target: https://quay.io/repository/biocontainers/metapointfinder
.. _`metapointfinder/tags`: https://quay.io/repository/biocontainers/metapointfinder?tab=tags


.. raw:: html

    <script>
        var package = "metapointfinder";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapointfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapointfinder/README.html