:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svision-pro'
.. highlight: bash

svision-pro
===========

.. conda:recipe:: svision-pro
   :replaces_section_title:
   :noindex:

   Neural\-network\-based long\-read SV caller.

   :homepage: https://github.com/songbowang125/SVision-pro
   :documentation: https://github.com/songbowang125/SVision-pro/blob/v2.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`svision-pro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svision-pro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svision-pro/meta.yaml>`_

   A neural\-network\-based instance segmentation framework that represents genome\-to\-genome\-level sequencing differences visually and discovers SV comparatively between genomes without any prerequisite for inference models.



.. conda:package:: svision-pro

   |downloads_svision-pro| |docker_svision-pro|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``

      

   
   :depends numpy: ``1.21.6``
   :depends pillow: ``9.2.0``
   :depends py-opencv: ``>=4.5.3``
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.7.9``
   :depends pytorch: ``1.10.1``
   :depends scipy: ``1.7.3``
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

      mamba install svision-pro

   and update with::

      mamba update svision-pro

  To create a new environment, run::

      mamba create --name myenvname svision-pro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svision-pro:<tag>

   (see `svision-pro/tags`_ for valid values for ``<tag>``)


.. |downloads_svision-pro| image:: https://img.shields.io/conda/dn/bioconda/svision-pro.svg?style=flat
   :target: https://anaconda.org/bioconda/svision-pro
   :alt:   (downloads)
.. |docker_svision-pro| image:: https://quay.io/repository/biocontainers/svision-pro/status
   :target: https://quay.io/repository/biocontainers/svision-pro
.. _`svision-pro/tags`: https://quay.io/repository/biocontainers/svision-pro?tab=tags


.. raw:: html

    <script>
        var package = "svision-pro";
        var versions = ["2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svision-pro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svision-pro/README.html