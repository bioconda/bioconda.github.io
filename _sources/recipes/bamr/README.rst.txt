:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamr'
.. highlight: bash

bamr
====

.. conda:recipe:: bamr
   :replaces_section_title:
   :noindex:

   A lightweight Python3 bam reader library

   :homepage: https://github.com/cschu/bamr
   :license: MIT
   :recipe: /`bamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamr/meta.yaml>`_

   


.. conda:package:: bamr

   |downloads_bamr| |docker_bamr|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bamr

   and update with::

      mamba update bamr

  To create a new environment, run::

      mamba create --name myenvname bamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamr:<tag>

   (see `bamr/tags`_ for valid values for ``<tag>``)


.. |downloads_bamr| image:: https://img.shields.io/conda/dn/bioconda/bamr.svg?style=flat
   :target: https://anaconda.org/bioconda/bamr
   :alt:   (downloads)
.. |docker_bamr| image:: https://quay.io/repository/biocontainers/bamr/status
   :target: https://quay.io/repository/biocontainers/bamr
.. _`bamr/tags`: https://quay.io/repository/biocontainers/bamr?tab=tags


.. raw:: html

    <script>
        var package = "bamr";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamr/README.html