:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neffy'
.. highlight: bash

neffy
=====

.. conda:recipe:: neffy
   :replaces_section_title:
   :noindex:

   A Python interface of NEFFy C\+\+ tool\: NEFF Calculator and MSA File Converter

   :homepage: https://github.com/Maryam-Haghani/NEFFy
   :documentation: https://maryam-haghani.github.io/NEFFy
   
   :license: GPL-3.0-only
   :recipe: /`neffy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neffy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neffy/meta.yaml>`_

   


.. conda:package:: neffy

   |downloads_neffy| |docker_neffy|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install neffy

   and update with::

      mamba update neffy

  To create a new environment, run::

      mamba create --name myenvname neffy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neffy:<tag>

   (see `neffy/tags`_ for valid values for ``<tag>``)


.. |downloads_neffy| image:: https://img.shields.io/conda/dn/bioconda/neffy.svg?style=flat
   :target: https://anaconda.org/bioconda/neffy
   :alt:   (downloads)
.. |docker_neffy| image:: https://quay.io/repository/biocontainers/neffy/status
   :target: https://quay.io/repository/biocontainers/neffy
.. _`neffy/tags`: https://quay.io/repository/biocontainers/neffy?tab=tags


.. raw:: html

    <script>
        var package = "neffy";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neffy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neffy/README.html