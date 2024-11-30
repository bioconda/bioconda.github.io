:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sctools'
.. highlight: bash

sctools
=======

.. conda:recipe:: sctools
   :replaces_section_title:
   :noindex:

   SCTools is a suite of tools performing utility operations over single\-cell samples

   :homepage: https://github.com/bioinformatics-polito/SCTools
   :license: AGPL-3.0
   :recipe: /`sctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctools/meta.yaml>`_

   


.. conda:package:: sctools

   |downloads_sctools| |docker_sctools|

   :versions:
      
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install sctools

   and update with::

      mamba update sctools

  To create a new environment, run::

      mamba create --name myenvname sctools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sctools:<tag>

   (see `sctools/tags`_ for valid values for ``<tag>``)


.. |downloads_sctools| image:: https://img.shields.io/conda/dn/bioconda/sctools.svg?style=flat
   :target: https://anaconda.org/bioconda/sctools
   :alt:   (downloads)
.. |docker_sctools| image:: https://quay.io/repository/biocontainers/sctools/status
   :target: https://quay.io/repository/biocontainers/sctools
.. _`sctools/tags`: https://quay.io/repository/biocontainers/sctools?tab=tags


.. raw:: html

    <script>
        var package = "sctools";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sctools/README.html