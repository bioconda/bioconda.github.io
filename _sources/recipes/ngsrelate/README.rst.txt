:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsrelate'
.. highlight: bash

ngsrelate
=========

.. conda:recipe:: ngsrelate
   :replaces_section_title:
   :noindex:

   Software tool for estimating pairwise relatedness from next\-generation sequencing data.

   :homepage: https://github.com/ANGSD/NgsRelate
   :license: GPL / GPL-2.0-only
   :recipe: /`ngsrelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsrelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsrelate/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv509`, doi: :doi:`10.1093/gigascience/giz034`

   


.. conda:package:: ngsrelate

   |downloads_ngsrelate| |docker_ngsrelate|

   :versions:
      
      

      ``2.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xz: 
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

      mamba install ngsrelate

   and update with::

      mamba update ngsrelate

  To create a new environment, run::

      mamba create --name myenvname ngsrelate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsrelate:<tag>

   (see `ngsrelate/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsrelate| image:: https://img.shields.io/conda/dn/bioconda/ngsrelate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsrelate
   :alt:   (downloads)
.. |docker_ngsrelate| image:: https://quay.io/repository/biocontainers/ngsrelate/status
   :target: https://quay.io/repository/biocontainers/ngsrelate
.. _`ngsrelate/tags`: https://quay.io/repository/biocontainers/ngsrelate?tab=tags


.. raw:: html

    <script>
        var package = "ngsrelate";
        var versions = ["2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsrelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsrelate/README.html