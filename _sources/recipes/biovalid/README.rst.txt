:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biovalid'
.. highlight: bash

biovalid
========

.. conda:recipe:: biovalid
   :replaces_section_title:
   :noindex:

   Quick validation of common bioinformatics files in pure Python

   :homepage: https://github.com/RIVM-bioinformatics/biovalid
   :license: AGPL-3.0-or-later
   :recipe: /`biovalid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biovalid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biovalid/meta.yaml>`_

   


.. conda:package:: biovalid

   |downloads_biovalid| |docker_biovalid|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends python: ``>=3.10``
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

      mamba install biovalid

   and update with::

      mamba update biovalid

  To create a new environment, run::

      mamba create --name myenvname biovalid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biovalid:<tag>

   (see `biovalid/tags`_ for valid values for ``<tag>``)


.. |downloads_biovalid| image:: https://img.shields.io/conda/dn/bioconda/biovalid.svg?style=flat
   :target: https://anaconda.org/bioconda/biovalid
   :alt:   (downloads)
.. |docker_biovalid| image:: https://quay.io/repository/biocontainers/biovalid/status
   :target: https://quay.io/repository/biocontainers/biovalid
.. _`biovalid/tags`: https://quay.io/repository/biocontainers/biovalid?tab=tags


.. raw:: html

    <script>
        var package = "biovalid";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biovalid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biovalid/README.html