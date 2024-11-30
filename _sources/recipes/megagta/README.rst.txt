:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megagta'
.. highlight: bash

megagta
=======

.. conda:recipe:: megagta
   :replaces_section_title:
   :noindex:

   HMM\-guided metagenomic gene\-targeted assembler using iterative de Bruijn graphs

   :homepage: https://github.com/HKU-BAL/megagta
   :license: GNU General Public License v3 (GPLv3
   :recipe: /`megagta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta/meta.yaml>`_

   


.. conda:package:: megagta

   |downloads_megagta| |docker_megagta|

   :versions:
      
      

      ``0.1_alpha-0``

      

   
   :depends hmmer: ``>=3.1b2``
   :depends libgcc: 
   :depends python: ``>=2.7,<3``
   :depends zlib: 
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

      mamba install megagta

   and update with::

      mamba update megagta

  To create a new environment, run::

      mamba create --name myenvname megagta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megagta:<tag>

   (see `megagta/tags`_ for valid values for ``<tag>``)


.. |downloads_megagta| image:: https://img.shields.io/conda/dn/bioconda/megagta.svg?style=flat
   :target: https://anaconda.org/bioconda/megagta
   :alt:   (downloads)
.. |docker_megagta| image:: https://quay.io/repository/biocontainers/megagta/status
   :target: https://quay.io/repository/biocontainers/megagta
.. _`megagta/tags`: https://quay.io/repository/biocontainers/megagta?tab=tags


.. raw:: html

    <script>
        var package = "megagta";
        var versions = ["0.1_alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megagta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megagta/README.html