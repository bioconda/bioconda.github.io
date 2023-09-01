:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ope'
.. highlight: bash

ope
===

.. conda:recipe:: ope
   :replaces_section_title:
   :noindex:

   Tools for gnu\-parallel with FASTA input and parsers for some common formats.

   :homepage: https://github.com/camillescott/ope
   :license: MIT / MIT
   :recipe: /`ope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ope/meta.yaml>`_

   


.. conda:package:: ope

   |downloads_ope| |docker_ope|

   :versions:
      
      

      ``0.8-0``,  ``0.6-0``

      

   
   :depends click: ``>=7.0``
   :depends numpy: 
   :depends pandas: 
   :depends parallel: ``>=20171222``
   :depends python: 
   :depends screed: 
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

      mamba install ope

   and update with::

      mamba update ope

  To create a new environment, run::

      mamba create --name myenvname ope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ope:<tag>

   (see `ope/tags`_ for valid values for ``<tag>``)


.. |downloads_ope| image:: https://img.shields.io/conda/dn/bioconda/ope.svg?style=flat
   :target: https://anaconda.org/bioconda/ope
   :alt:   (downloads)
.. |docker_ope| image:: https://quay.io/repository/biocontainers/ope/status
   :target: https://quay.io/repository/biocontainers/ope
.. _`ope/tags`: https://quay.io/repository/biocontainers/ope?tab=tags


.. raw:: html

    <script>
        var package = "ope";
        var versions = ["0.8","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ope/README.html