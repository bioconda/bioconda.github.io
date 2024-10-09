:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmercamel'
.. highlight: bash

kmercamel
=========

.. conda:recipe:: kmercamel
   :replaces_section_title:
   :noindex:

   KmerCamel🐫 \- compressing k\-mer sets using masked superstrings

   :homepage: https://github.com/OndrejSladky/kmercamel/
   :license: MIT
   :recipe: /`kmercamel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmercamel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmercamel/meta.yaml>`_

   


.. conda:package:: kmercamel

   |downloads_kmercamel| |docker_kmercamel|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends glpk: ``>=5.0,<6.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install kmercamel

   and update with::

      mamba update kmercamel

  To create a new environment, run::

      mamba create --name myenvname kmercamel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmercamel:<tag>

   (see `kmercamel/tags`_ for valid values for ``<tag>``)


.. |downloads_kmercamel| image:: https://img.shields.io/conda/dn/bioconda/kmercamel.svg?style=flat
   :target: https://anaconda.org/bioconda/kmercamel
   :alt:   (downloads)
.. |docker_kmercamel| image:: https://quay.io/repository/biocontainers/kmercamel/status
   :target: https://quay.io/repository/biocontainers/kmercamel
.. _`kmercamel/tags`: https://quay.io/repository/biocontainers/kmercamel?tab=tags


.. raw:: html

    <script>
        var package = "kmercamel";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmercamel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmercamel/README.html