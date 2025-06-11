:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakrep-cli'
.. highlight: bash

bakrep-cli
==========

.. conda:recipe:: bakrep-cli
   :replaces_section_title:
   :noindex:

   BakRep\-CLI\: a commandline tool for the batch download of BakRep datasets

   :homepage: https://github.com/oschwengers/bakrep-cli
   :documentation: https://github.com/ag-computational-bio/bakrep-cli/blob/v1.1.0/README.md
   
   :developer docs: https://github.com/ag-computational-bio/bakrep-cli
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bakrep-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakrep-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakrep-cli/meta.yaml>`_
   :links: biotools: :biotools:`bakrep-cli`, doi: :doi:`10.1099/mgen.0.001305`

   


.. conda:package:: bakrep-cli

   |downloads_bakrep-cli| |docker_bakrep-cli|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32``
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

      mamba install bakrep-cli

   and update with::

      mamba update bakrep-cli

  To create a new environment, run::

      mamba create --name myenvname bakrep-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bakrep-cli:<tag>

   (see `bakrep-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_bakrep-cli| image:: https://img.shields.io/conda/dn/bioconda/bakrep-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/bakrep-cli
   :alt:   (downloads)
.. |docker_bakrep-cli| image:: https://quay.io/repository/biocontainers/bakrep-cli/status
   :target: https://quay.io/repository/biocontainers/bakrep-cli
.. _`bakrep-cli/tags`: https://quay.io/repository/biocontainers/bakrep-cli?tab=tags


.. raw:: html

    <script>
        var package = "bakrep-cli";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakrep-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakrep-cli/README.html