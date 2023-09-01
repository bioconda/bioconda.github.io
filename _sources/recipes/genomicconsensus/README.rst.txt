:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomicconsensus'
.. highlight: bash

genomicconsensus
================

.. conda:recipe:: genomicconsensus
   :replaces_section_title:
   :noindex:

   PacBio genomic consensus and variant caller for RSII and Sequel

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`genomicconsensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus/meta.yaml>`_

   


.. conda:package:: genomicconsensus

   |downloads_genomicconsensus| |docker_genomicconsensus|

   :versions:
      
      

      ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``

      

   
   :depends numpy: ``>=1.16.2``
   :depends pbcommand: ``>=1.1.1``
   :depends pbcore: ``>=1.6.5``
   :depends python: ``<3``
   :depends python-consensuscore: ``>=1.1.1``
   :depends python-consensuscore2: ``>=3.4.1``
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

      mamba install genomicconsensus

   and update with::

      mamba update genomicconsensus

  To create a new environment, run::

      mamba create --name myenvname genomicconsensus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomicconsensus:<tag>

   (see `genomicconsensus/tags`_ for valid values for ``<tag>``)


.. |downloads_genomicconsensus| image:: https://img.shields.io/conda/dn/bioconda/genomicconsensus.svg?style=flat
   :target: https://anaconda.org/bioconda/genomicconsensus
   :alt:   (downloads)
.. |docker_genomicconsensus| image:: https://quay.io/repository/biocontainers/genomicconsensus/status
   :target: https://quay.io/repository/biocontainers/genomicconsensus
.. _`genomicconsensus/tags`: https://quay.io/repository/biocontainers/genomicconsensus?tab=tags


.. raw:: html

    <script>
        var package = "genomicconsensus";
        var versions = ["2.3.3","2.3.3","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicconsensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicconsensus/README.html