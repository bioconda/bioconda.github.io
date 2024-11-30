:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protk'
.. highlight: bash

protk
=====

.. conda:recipe:: protk
   :replaces_section_title:
   :noindex:

   protk \(Proteomics toolkit\)

   :homepage: https://github.com/iracooke/protk
   :license: MIT
   :recipe: /`protk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk/meta.yaml>`_

   


.. conda:package:: protk

   |downloads_protk| |docker_protk|

   :versions:
      
      

      ``1.4.4a-1``,  ``1.4.4a-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libxml2: ``>=2.9.8,<2.10.0a0``
   :depends ruby: ``>=2.4``
   :depends tpp: 
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

      mamba install protk

   and update with::

      mamba update protk

  To create a new environment, run::

      mamba create --name myenvname protk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/protk:<tag>

   (see `protk/tags`_ for valid values for ``<tag>``)


.. |downloads_protk| image:: https://img.shields.io/conda/dn/bioconda/protk.svg?style=flat
   :target: https://anaconda.org/bioconda/protk
   :alt:   (downloads)
.. |docker_protk| image:: https://quay.io/repository/biocontainers/protk/status
   :target: https://quay.io/repository/biocontainers/protk
.. _`protk/tags`: https://quay.io/repository/biocontainers/protk?tab=tags


.. raw:: html

    <script>
        var package = "protk";
        var versions = ["1.4.4a","1.4.4a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protk/README.html