:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itbins'
.. highlight: bash

itbins
======

.. conda:recipe:: itbins
   :replaces_section_title:
   :noindex:

   itBins is a superfast cli\-tool for the automated refinement of metagenome\-assembled genomes \(MAGs\).

   :homepage: https://codeberg.org/JMK/itBins
   :license: EUPL-1.2
   :recipe: /`itbins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itbins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itbins/meta.yaml>`_

   


.. conda:package:: itbins

   |downloads_itbins| |docker_itbins|

   :versions:
      
      

      ``0.8.4-0``

      

   
   :depends numpy: ``>=1.21.5,<2``
   :depends pandas: ``>=1.4.2,<2``
   :depends python: ``>=3.10,<3.11``
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

      mamba install itbins

   and update with::

      mamba update itbins

  To create a new environment, run::

      mamba create --name myenvname itbins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/itbins:<tag>

   (see `itbins/tags`_ for valid values for ``<tag>``)


.. |downloads_itbins| image:: https://img.shields.io/conda/dn/bioconda/itbins.svg?style=flat
   :target: https://anaconda.org/bioconda/itbins
   :alt:   (downloads)
.. |docker_itbins| image:: https://quay.io/repository/biocontainers/itbins/status
   :target: https://quay.io/repository/biocontainers/itbins
.. _`itbins/tags`: https://quay.io/repository/biocontainers/itbins?tab=tags


.. raw:: html

    <script>
        var package = "itbins";
        var versions = ["0.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itbins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itbins/README.html