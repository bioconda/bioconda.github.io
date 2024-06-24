:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genbank'
.. highlight: bash

genbank
=======

.. conda:recipe:: genbank
   :replaces_section_title:
   :noindex:

   Code to work with Genbank files

   :homepage: https://github.com/deprekate/genbank
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`genbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank/meta.yaml>`_

   


.. conda:package:: genbank

   |downloads_genbank| |docker_genbank|

   :versions:
      
      

      ``0.110-1``,  ``0.110-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install genbank

   and update with::

      mamba update genbank

  To create a new environment, run::

      mamba create --name myenvname genbank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genbank:<tag>

   (see `genbank/tags`_ for valid values for ``<tag>``)


.. |downloads_genbank| image:: https://img.shields.io/conda/dn/bioconda/genbank.svg?style=flat
   :target: https://anaconda.org/bioconda/genbank
   :alt:   (downloads)
.. |docker_genbank| image:: https://quay.io/repository/biocontainers/genbank/status
   :target: https://quay.io/repository/biocontainers/genbank
.. _`genbank/tags`: https://quay.io/repository/biocontainers/genbank?tab=tags


.. raw:: html

    <script>
        var package = "genbank";
        var versions = ["0.110","0.110"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genbank/README.html