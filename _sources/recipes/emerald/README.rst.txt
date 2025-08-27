:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emerald'
.. highlight: bash

emerald
=======

.. conda:recipe:: emerald
   :replaces_section_title:
   :noindex:

   Unlocking the suboptimal pairwise alignment space for protein sequences

   :homepage: https://github.com/algbio/emerald
   :license: AGPL / AGPL-3.0
   :recipe: /`emerald <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emerald>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emerald/meta.yaml>`_
   :links: biotools: :biotools:`Emerald`

   


.. conda:package:: emerald

   |downloads_emerald| |docker_emerald|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libcxx: ``>=18``
   :depends openmp: 
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

      mamba install emerald

   and update with::

      mamba update emerald

  To create a new environment, run::

      mamba create --name myenvname emerald

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emerald:<tag>

   (see `emerald/tags`_ for valid values for ``<tag>``)


.. |downloads_emerald| image:: https://img.shields.io/conda/dn/bioconda/emerald.svg?style=flat
   :target: https://anaconda.org/bioconda/emerald
   :alt:   (downloads)
.. |docker_emerald| image:: https://quay.io/repository/biocontainers/emerald/status
   :target: https://quay.io/repository/biocontainers/emerald
.. _`emerald/tags`: https://quay.io/repository/biocontainers/emerald?tab=tags


.. raw:: html

    <script>
        var package = "emerald";
        var versions = ["1.2.1","1.2.1","1.2.1","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emerald/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emerald/README.html