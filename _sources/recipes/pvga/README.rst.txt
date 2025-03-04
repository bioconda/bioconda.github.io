:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pvga'
.. highlight: bash

pvga
====

.. conda:recipe:: pvga
   :replaces_section_title:
   :noindex:

   PVGA is a powerful virus\-focused assembler that does both assembly and polishing.

   :homepage: https://github.com/SoSongzhi/PVGA
   :license: MIT
   :recipe: /`pvga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvga/meta.yaml>`_

   


.. conda:package:: pvga

   |downloads_pvga| |docker_pvga|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``>=1.85``
   :depends networkx: ``>=3.1``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.5``
   :depends python: ``3.10.*``
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

      mamba install pvga

   and update with::

      mamba update pvga

  To create a new environment, run::

      mamba create --name myenvname pvga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pvga:<tag>

   (see `pvga/tags`_ for valid values for ``<tag>``)


.. |downloads_pvga| image:: https://img.shields.io/conda/dn/bioconda/pvga.svg?style=flat
   :target: https://anaconda.org/bioconda/pvga
   :alt:   (downloads)
.. |docker_pvga| image:: https://quay.io/repository/biocontainers/pvga/status
   :target: https://quay.io/repository/biocontainers/pvga
.. _`pvga/tags`: https://quay.io/repository/biocontainers/pvga?tab=tags


.. raw:: html

    <script>
        var package = "pvga";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pvga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pvga/README.html