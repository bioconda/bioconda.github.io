:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cured'
.. highlight: bash

cured
=====

.. conda:recipe:: cured
   :replaces_section_title:
   :noindex:

   Classification Using Restriction Enzyme Diagnostics

   :homepage: https://github.com/microbialARC/CURED
   :license: GPL / GPLv3
   :recipe: /`cured <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cured>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cured/meta.yaml>`_

   


.. conda:package:: cured

   |downloads_cured| |docker_cured|

   :versions:
      
      

      ``1.05-0``

      

   
   :depends biopython: ``1.82``
   :depends blast: ``2.15.0``
   :depends bwa: ``0.7.17``
   :depends mlst: ``2.23.0``
   :depends ncbi-datasets-cli: ``15.28.0``
   :depends python: ``3.10.13``
   :depends samtools: ``1.18``
   :depends unitig-caller: ``1.3.0``
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

      mamba install cured

   and update with::

      mamba update cured

  To create a new environment, run::

      mamba create --name myenvname cured

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cured:<tag>

   (see `cured/tags`_ for valid values for ``<tag>``)


.. |downloads_cured| image:: https://img.shields.io/conda/dn/bioconda/cured.svg?style=flat
   :target: https://anaconda.org/bioconda/cured
   :alt:   (downloads)
.. |docker_cured| image:: https://quay.io/repository/biocontainers/cured/status
   :target: https://quay.io/repository/biocontainers/cured
.. _`cured/tags`: https://quay.io/repository/biocontainers/cured?tab=tags


.. raw:: html

    <script>
        var package = "cured";
        var versions = ["1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cured/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cured/README.html