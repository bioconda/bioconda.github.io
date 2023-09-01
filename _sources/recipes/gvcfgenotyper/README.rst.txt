:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcfgenotyper'
.. highlight: bash

gvcfgenotyper
=============

.. conda:recipe:: gvcfgenotyper
   :replaces_section_title:
   :noindex:

   A utility for merging and genotyping Illumina\-style GVCFs.

   :homepage: https://github.com/Illumina/gvcfgenotyper
   :license: Apache 2.0
   :recipe: /`gvcfgenotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcfgenotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcfgenotyper/meta.yaml>`_

   


.. conda:package:: gvcfgenotyper

   |downloads_gvcfgenotyper| |docker_gvcfgenotyper|

   :versions:
      
      

      ``2019.02.26-4``,  ``2019.02.26-3``,  ``2019.02.26-2``,  ``2019.02.26-1``,  ``2019.02.26-0``,  ``2018.10.15-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gvcfgenotyper

   and update with::

      mamba update gvcfgenotyper

  To create a new environment, run::

      mamba create --name myenvname gvcfgenotyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gvcfgenotyper:<tag>

   (see `gvcfgenotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcfgenotyper| image:: https://img.shields.io/conda/dn/bioconda/gvcfgenotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcfgenotyper
   :alt:   (downloads)
.. |docker_gvcfgenotyper| image:: https://quay.io/repository/biocontainers/gvcfgenotyper/status
   :target: https://quay.io/repository/biocontainers/gvcfgenotyper
.. _`gvcfgenotyper/tags`: https://quay.io/repository/biocontainers/gvcfgenotyper?tab=tags


.. raw:: html

    <script>
        var package = "gvcfgenotyper";
        var versions = ["2019.02.26","2019.02.26","2019.02.26","2019.02.26","2019.02.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcfgenotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcfgenotyper/README.html