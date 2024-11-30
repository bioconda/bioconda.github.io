:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydpi'
.. highlight: bash

pydpi
=====

.. conda:recipe:: pydpi
   :replaces_section_title:
   :noindex:

   A powerful tool for chemoinformatics\, bioinforamtics and chemogenomics study

   :homepage: http://cbdd.csu.edu.cn/index
   :license: GPL / GPL
   :recipe: /`pydpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydpi/meta.yaml>`_

   


.. conda:package:: pydpi

   |downloads_pydpi| |docker_pydpi|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends python: 
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

      mamba install pydpi

   and update with::

      mamba update pydpi

  To create a new environment, run::

      mamba create --name myenvname pydpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydpi:<tag>

   (see `pydpi/tags`_ for valid values for ``<tag>``)


.. |downloads_pydpi| image:: https://img.shields.io/conda/dn/bioconda/pydpi.svg?style=flat
   :target: https://anaconda.org/bioconda/pydpi
   :alt:   (downloads)
.. |docker_pydpi| image:: https://quay.io/repository/biocontainers/pydpi/status
   :target: https://quay.io/repository/biocontainers/pydpi
.. _`pydpi/tags`: https://quay.io/repository/biocontainers/pydpi?tab=tags


.. raw:: html

    <script>
        var package = "pydpi";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydpi/README.html