:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predicthaplo'
.. highlight: bash

predicthaplo
============

.. conda:recipe:: predicthaplo
   :replaces_section_title:
   :noindex:

   This software aims at reconstructing haplotypes from next\-generation sequencing data.

   :homepage: https://github.com/cbg-ethz/PredictHaplo
   :license: GPLv3
   :recipe: /`predicthaplo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predicthaplo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predicthaplo/meta.yaml>`_
   :links: biotools: :biotools:`PredictHaplo`

   


.. conda:package:: predicthaplo

   |downloads_predicthaplo| |docker_predicthaplo|

   :versions:
      
      

      ``2.1.4-5``,  ``2.1.4-4``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install predicthaplo

   and update with::

      mamba update predicthaplo

  To create a new environment, run::

      mamba create --name myenvname predicthaplo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/predicthaplo:<tag>

   (see `predicthaplo/tags`_ for valid values for ``<tag>``)


.. |downloads_predicthaplo| image:: https://img.shields.io/conda/dn/bioconda/predicthaplo.svg?style=flat
   :target: https://anaconda.org/bioconda/predicthaplo
   :alt:   (downloads)
.. |docker_predicthaplo| image:: https://quay.io/repository/biocontainers/predicthaplo/status
   :target: https://quay.io/repository/biocontainers/predicthaplo
.. _`predicthaplo/tags`: https://quay.io/repository/biocontainers/predicthaplo?tab=tags


.. raw:: html

    <script>
        var package = "predicthaplo";
        var versions = ["2.1.4","2.1.4","2.1.4","2.1.4","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predicthaplo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predicthaplo/README.html