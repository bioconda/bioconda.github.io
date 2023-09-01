:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mudskipper'
.. highlight: bash

mudskipper
==========

.. conda:recipe:: mudskipper
   :replaces_section_title:
   :noindex:

   mudskipper is a tool for converting genomic BAM\/SAM files to transcriptomic BAM\/RAD files.

   :homepage: https://github.com/OceanGenomics/mudskipper
   :license: BSD 3-Clause
   :recipe: /`mudskipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mudskipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mudskipper/meta.yaml>`_

   


.. conda:package:: mudskipper

   |downloads_mudskipper| |docker_mudskipper|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
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

      mamba install mudskipper

   and update with::

      mamba update mudskipper

  To create a new environment, run::

      mamba create --name myenvname mudskipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mudskipper:<tag>

   (see `mudskipper/tags`_ for valid values for ``<tag>``)


.. |downloads_mudskipper| image:: https://img.shields.io/conda/dn/bioconda/mudskipper.svg?style=flat
   :target: https://anaconda.org/bioconda/mudskipper
   :alt:   (downloads)
.. |docker_mudskipper| image:: https://quay.io/repository/biocontainers/mudskipper/status
   :target: https://quay.io/repository/biocontainers/mudskipper
.. _`mudskipper/tags`: https://quay.io/repository/biocontainers/mudskipper?tab=tags


.. raw:: html

    <script>
        var package = "mudskipper";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mudskipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mudskipper/README.html