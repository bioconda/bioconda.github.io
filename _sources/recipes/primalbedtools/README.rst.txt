:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primalbedtools'
.. highlight: bash

primalbedtools
==============

.. conda:recipe:: primalbedtools
   :replaces_section_title:
   :noindex:

   A collection of tools for working with primer.bed files.

   :homepage: https://github.com/ChrisgKent/primalbedtools
   :license: MPL-2.0
   :recipe: /`primalbedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalbedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalbedtools/meta.yaml>`_

   


.. conda:package:: primalbedtools

   |downloads_primalbedtools| |docker_primalbedtools|

   :versions:
      
      

      ``0.9-0``,  ``0.8.1-0``,  ``0.6.2-0``

      

   
   :depends python: ``>=3.9,<4``
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

      mamba install primalbedtools

   and update with::

      mamba update primalbedtools

  To create a new environment, run::

      mamba create --name myenvname primalbedtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primalbedtools:<tag>

   (see `primalbedtools/tags`_ for valid values for ``<tag>``)


.. |downloads_primalbedtools| image:: https://img.shields.io/conda/dn/bioconda/primalbedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/primalbedtools
   :alt:   (downloads)
.. |docker_primalbedtools| image:: https://quay.io/repository/biocontainers/primalbedtools/status
   :target: https://quay.io/repository/biocontainers/primalbedtools
.. _`primalbedtools/tags`: https://quay.io/repository/biocontainers/primalbedtools?tab=tags


.. raw:: html

    <script>
        var package = "primalbedtools";
        var versions = ["0.9","0.8.1","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primalbedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primalbedtools/README.html