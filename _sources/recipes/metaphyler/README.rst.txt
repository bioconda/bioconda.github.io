:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphyler'
.. highlight: bash

metaphyler
==========

.. conda:recipe:: metaphyler
   :replaces_section_title:
   :noindex:

   Estimating Bacterial Composition from Metagenomic Sequences

   :homepage: http://metaphyler.cbcb.umd.edu/
   :license: Artistic License 2.0
   :recipe: /`metaphyler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler/meta.yaml>`_

   


.. conda:package:: metaphyler

   |downloads_metaphyler| |docker_metaphyler|

   :versions:
      
      

      ``1.25-7``,  ``1.25-6``,  ``1.25-5``,  ``1.25-4``,  ``1.25-3``,  ``1.25-2``,  ``1.25-1``,  ``1.25-0``

      

   
   :depends blast-legacy: 
   :depends libgcc-ng: ``>=12``
   :depends perl: 
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

      mamba install metaphyler

   and update with::

      mamba update metaphyler

  To create a new environment, run::

      mamba create --name myenvname metaphyler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaphyler:<tag>

   (see `metaphyler/tags`_ for valid values for ``<tag>``)


.. |downloads_metaphyler| image:: https://img.shields.io/conda/dn/bioconda/metaphyler.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphyler
   :alt:   (downloads)
.. |docker_metaphyler| image:: https://quay.io/repository/biocontainers/metaphyler/status
   :target: https://quay.io/repository/biocontainers/metaphyler
.. _`metaphyler/tags`: https://quay.io/repository/biocontainers/metaphyler?tab=tags


.. raw:: html

    <script>
        var package = "metaphyler";
        var versions = ["1.25","1.25","1.25","1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphyler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphyler/README.html