:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'erne'
.. highlight: bash

erne
====

.. conda:recipe:: erne
   :replaces_section_title:
   :noindex:

   ERNE \- Extended Randomized Numerical alignEr

   :homepage: http://erne.sourceforge.net
   :license: GPLv3
   :recipe: /`erne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne/meta.yaml>`_
   :links: biotools: :biotools:`erne`

   


.. conda:package:: erne

   |downloads_erne| |docker_erne|

   :versions:
      
      

      ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends boost: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install erne

   and update with::

      mamba update erne

  To create a new environment, run::

      mamba create --name myenvname erne

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/erne:<tag>

   (see `erne/tags`_ for valid values for ``<tag>``)


.. |downloads_erne| image:: https://img.shields.io/conda/dn/bioconda/erne.svg?style=flat
   :target: https://anaconda.org/bioconda/erne
   :alt:   (downloads)
.. |docker_erne| image:: https://quay.io/repository/biocontainers/erne/status
   :target: https://quay.io/repository/biocontainers/erne
.. _`erne/tags`: https://quay.io/repository/biocontainers/erne?tab=tags


.. raw:: html

    <script>
        var package = "erne";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/erne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/erne/README.html