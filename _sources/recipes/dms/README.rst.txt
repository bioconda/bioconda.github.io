:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dms'
.. highlight: bash

dms
===

.. conda:recipe:: dms
   :replaces_section_title:
   :noindex:

   Comprehensive taxonomic and phylogenetic comparison of shotgun metagenomes at the species level

   :homepage: https://github.com/qibebt-bioinfo/dynamic-meta-storms
   :license: GPL3
   :recipe: /`dms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz910`

   


.. conda:package:: dms

   |downloads_dms| |docker_dms|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openmp: 
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

      mamba install dms

   and update with::

      mamba update dms

  To create a new environment, run::

      mamba create --name myenvname dms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dms:<tag>

   (see `dms/tags`_ for valid values for ``<tag>``)


.. |downloads_dms| image:: https://img.shields.io/conda/dn/bioconda/dms.svg?style=flat
   :target: https://anaconda.org/bioconda/dms
   :alt:   (downloads)
.. |docker_dms| image:: https://quay.io/repository/biocontainers/dms/status
   :target: https://quay.io/repository/biocontainers/dms
.. _`dms/tags`: https://quay.io/repository/biocontainers/dms?tab=tags


.. raw:: html

    <script>
        var package = "dms";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dms/README.html