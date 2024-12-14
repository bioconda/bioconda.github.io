:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thesias'
.. highlight: bash

thesias
=======

.. conda:recipe:: thesias
   :replaces_section_title:
   :noindex:

   Testing Haplotype Effects In Association Studies

   :homepage: https://github.com/daissi/thesias
   :license: GPL-3+
   :recipe: /`thesias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thesias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thesias/meta.yaml>`_
   :links: biotools: :biotools:`THESIAS`, doi: :doi:`10.1093/bioinformatics/btm058`

   


.. conda:package:: thesias

   |downloads_thesias| |docker_thesias|

   :versions:
      
      

      ``3.1.1-6``,  ``3.1.1-5``,  ``3.1.1-4``,  ``3.1.1-3``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends openjdk: ``>=11``
   :depends python: 
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

      mamba install thesias

   and update with::

      mamba update thesias

  To create a new environment, run::

      mamba create --name myenvname thesias

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/thesias:<tag>

   (see `thesias/tags`_ for valid values for ``<tag>``)


.. |downloads_thesias| image:: https://img.shields.io/conda/dn/bioconda/thesias.svg?style=flat
   :target: https://anaconda.org/bioconda/thesias
   :alt:   (downloads)
.. |docker_thesias| image:: https://quay.io/repository/biocontainers/thesias/status
   :target: https://quay.io/repository/biocontainers/thesias
.. _`thesias/tags`: https://quay.io/repository/biocontainers/thesias?tab=tags


.. raw:: html

    <script>
        var package = "thesias";
        var versions = ["3.1.1","3.1.1","3.1.1","3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thesias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thesias/README.html