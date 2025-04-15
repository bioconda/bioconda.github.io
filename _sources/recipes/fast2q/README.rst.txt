:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast2q'
.. highlight: bash

fast2q
======

.. conda:recipe:: fast2q
   :replaces_section_title:
   :noindex:

   A Python3 program that counts sequence occurrences in FASTQ files.

   :homepage: https://github.com/afombravo/2FAST2Q
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fast2q <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast2q>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast2q/meta.yaml>`_

   


.. conda:package:: fast2q

   |downloads_fast2q| |docker_fast2q|

   :versions:
      
      

      ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.4-0``,  ``2.7.2-0``

      

   
   :depends colorama: 
   :depends dataclasses: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends psutil: 
   :depends python: 
   :depends tqdm: 
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

      mamba install fast2q

   and update with::

      mamba update fast2q

  To create a new environment, run::

      mamba create --name myenvname fast2q

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fast2q:<tag>

   (see `fast2q/tags`_ for valid values for ``<tag>``)


.. |downloads_fast2q| image:: https://img.shields.io/conda/dn/bioconda/fast2q.svg?style=flat
   :target: https://anaconda.org/bioconda/fast2q
   :alt:   (downloads)
.. |docker_fast2q| image:: https://quay.io/repository/biocontainers/fast2q/status
   :target: https://quay.io/repository/biocontainers/fast2q
.. _`fast2q/tags`: https://quay.io/repository/biocontainers/fast2q?tab=tags


.. raw:: html

    <script>
        var package = "fast2q";
        var versions = ["2.7.8","2.7.7","2.7.4","2.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast2q/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast2q/README.html