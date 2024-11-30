:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsindex'
.. highlight: bash

ngsindex
========

.. conda:recipe:: ngsindex
   :replaces_section_title:
   :noindex:

   Utilities for working with NGS index formats.

   :homepage: https://github.com/jdidion/ngsindex
   :license: MIT / MIT
   :recipe: /`ngsindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsindex/meta.yaml>`_

   


.. conda:package:: ngsindex

   |downloads_ngsindex| |docker_ngsindex|

   :versions:
      
      

      ``0.1.7-0``

      

   
   :depends python: 
   :depends xphyle: ``>=4.0.0rc0``
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

      mamba install ngsindex

   and update with::

      mamba update ngsindex

  To create a new environment, run::

      mamba create --name myenvname ngsindex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsindex:<tag>

   (see `ngsindex/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsindex| image:: https://img.shields.io/conda/dn/bioconda/ngsindex.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsindex
   :alt:   (downloads)
.. |docker_ngsindex| image:: https://quay.io/repository/biocontainers/ngsindex/status
   :target: https://quay.io/repository/biocontainers/ngsindex
.. _`ngsindex/tags`: https://quay.io/repository/biocontainers/ngsindex?tab=tags


.. raw:: html

    <script>
        var package = "ngsindex";
        var versions = ["0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsindex/README.html