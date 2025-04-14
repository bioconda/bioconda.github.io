:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimi'
.. highlight: bash

mimi
====

.. conda:recipe:: mimi
   :replaces_section_title:
   :noindex:

   Molecular Isotope Mass Identifier.

   :homepage: https://github.com/NYUAD-Core-Bioinformatics/MIMI
   :license: Academic and Non-Commercial Research Use
   :recipe: /`mimi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimi/meta.yaml>`_

   MIMI \(Molecular Isotope Mass Identifier\) is a tool for analyzing mass 
   spectrometry data to identify molecular compounds based on their isotopic 
   patterns.



.. conda:package:: mimi

   |downloads_mimi| |docker_mimi|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends json5: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.11``
   :depends setuptools: 
   :depends tqdm: 
   :depends urllib3: 
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

      mamba install mimi

   and update with::

      mamba update mimi

  To create a new environment, run::

      mamba create --name myenvname mimi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimi:<tag>

   (see `mimi/tags`_ for valid values for ``<tag>``)


.. |downloads_mimi| image:: https://img.shields.io/conda/dn/bioconda/mimi.svg?style=flat
   :target: https://anaconda.org/bioconda/mimi
   :alt:   (downloads)
.. |docker_mimi| image:: https://quay.io/repository/biocontainers/mimi/status
   :target: https://quay.io/repository/biocontainers/mimi
.. _`mimi/tags`: https://quay.io/repository/biocontainers/mimi?tab=tags


.. raw:: html

    <script>
        var package = "mimi";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimi/README.html