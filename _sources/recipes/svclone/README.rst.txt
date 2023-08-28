:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svclone'
.. highlight: bash

svclone
=======

.. conda:recipe:: svclone
   :replaces_section_title:
   :noindex:

   Computational method for inferring cancer cell fraction of tumour SVs from WGS

   :homepage: https://github.com/mcmero/SVclone
   :license: BSD / BSD-3-Clause
   :recipe: /`svclone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svclone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svclone/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-020-14351-8`

   A computational method for inferring the cancer cell
   fraction of tumour structural variation from whole\-genome
   sequencing data. 



.. conda:package:: svclone

   |downloads_svclone| |docker_svclone|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``v1.1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ccube: 
   :depends r-doparallel: 
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

      mamba install svclone

   and update with::

      mamba update svclone

  To create a new environment, run::

      mamba create --name myenvname svclone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svclone:<tag>

   (see `svclone/tags`_ for valid values for ``<tag>``)


.. |downloads_svclone| image:: https://img.shields.io/conda/dn/bioconda/svclone.svg?style=flat
   :target: https://anaconda.org/bioconda/svclone
   :alt:   (downloads)
.. |docker_svclone| image:: https://quay.io/repository/biocontainers/svclone/status
   :target: https://quay.io/repository/biocontainers/svclone
.. _`svclone/tags`: https://quay.io/repository/biocontainers/svclone?tab=tags


.. raw:: html

    <script>
        var package = "svclone";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.0","v1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svclone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svclone/README.html