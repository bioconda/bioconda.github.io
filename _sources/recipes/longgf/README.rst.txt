:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longgf'
.. highlight: bash

longgf
======

.. conda:recipe:: longgf
   :replaces_section_title:
   :noindex:

   A fast tool to detect gene fusion from long\-read RNA\-seq data.

   :homepage: https://github.com/WGLab/LongGF
   :license: GPL3
   :recipe: /`longgf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longgf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longgf/meta.yaml>`_

   


.. conda:package:: longgf

   |downloads_longgf| |docker_longgf|

   :versions:
      
      

      ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install longgf

   and update with::

      mamba update longgf

  To create a new environment, run::

      mamba create --name myenvname longgf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longgf:<tag>

   (see `longgf/tags`_ for valid values for ``<tag>``)


.. |downloads_longgf| image:: https://img.shields.io/conda/dn/bioconda/longgf.svg?style=flat
   :target: https://anaconda.org/bioconda/longgf
   :alt:   (downloads)
.. |docker_longgf| image:: https://quay.io/repository/biocontainers/longgf/status
   :target: https://quay.io/repository/biocontainers/longgf
.. _`longgf/tags`: https://quay.io/repository/biocontainers/longgf?tab=tags


.. raw:: html

    <script>
        var package = "longgf";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longgf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longgf/README.html