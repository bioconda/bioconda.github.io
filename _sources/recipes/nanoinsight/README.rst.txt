:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoinsight'
.. highlight: bash

nanoinsight
===========

.. conda:recipe:: nanoinsight
   :replaces_section_title:
   :noindex:

   Repeat annotation tool for insertions called by NanoVar

   :homepage: https://github.com/AsmaaSamyMohamedMahmoud/nanoinsight
   :license: GPL-3.0-or-later
   :recipe: /`nanoinsight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoinsight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoinsight/meta.yaml>`_

   


.. conda:package:: nanoinsight

   |downloads_nanoinsight| |docker_nanoinsight|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends biopython: ``>=1.82``
   :depends mafft: 
   :depends pandas: ``>=1.5.3``
   :depends python: ``>=3.8``
   :depends repeatmasker: 
   :depends scikit-allel: ``>=1.3.7``
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

      mamba install nanoinsight

   and update with::

      mamba update nanoinsight

  To create a new environment, run::

      mamba create --name myenvname nanoinsight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoinsight:<tag>

   (see `nanoinsight/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoinsight| image:: https://img.shields.io/conda/dn/bioconda/nanoinsight.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoinsight
   :alt:   (downloads)
.. |docker_nanoinsight| image:: https://quay.io/repository/biocontainers/nanoinsight/status
   :target: https://quay.io/repository/biocontainers/nanoinsight
.. _`nanoinsight/tags`: https://quay.io/repository/biocontainers/nanoinsight?tab=tags


.. raw:: html

    <script>
        var package = "nanoinsight";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoinsight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoinsight/README.html