:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svdss'
.. highlight: bash

svdss
=====

.. conda:recipe:: svdss
   :replaces_section_title:
   :noindex:

   Structural Variant Discovery from Sample\-specific Strings

   :homepage: https://github.com/Parsoa/SVDSS
   :license: MIT
   :recipe: /`svdss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdss/meta.yaml>`_
   :links: biotools: :biotools:`svdss`

   


.. conda:package:: svdss

   |downloads_svdss| |docker_svdss|

   :versions:
      
      

      ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bcftools: ``>=1.9``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends samtools: ``>=1.9``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install svdss

   and update with::

      mamba update svdss

  To create a new environment, run::

      mamba create --name myenvname svdss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svdss:<tag>

   (see `svdss/tags`_ for valid values for ``<tag>``)


.. |downloads_svdss| image:: https://img.shields.io/conda/dn/bioconda/svdss.svg?style=flat
   :target: https://anaconda.org/bioconda/svdss
   :alt:   (downloads)
.. |docker_svdss| image:: https://quay.io/repository/biocontainers/svdss/status
   :target: https://quay.io/repository/biocontainers/svdss
.. _`svdss/tags`: https://quay.io/repository/biocontainers/svdss?tab=tags


.. raw:: html

    <script>
        var package = "svdss";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdss/README.html