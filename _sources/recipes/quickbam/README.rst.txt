:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickbam'
.. highlight: bash

quickbam
========

.. conda:recipe:: quickbam
   :replaces_section_title:
   :noindex:

   Parallel BAM file access API for high throughput sequence analysis informatics

   :homepage: https://gitlab.com/yiq/quickbam/-/tree/master/
   :license: BSD
   :recipe: /`quickbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickbam/meta.yaml>`_

   


.. conda:package:: quickbam

   |downloads_quickbam| |docker_quickbam|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libdeflate: ``>=1.13,<1.14.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends tbb: ``>=2021.9.0``
   :depends tbb-devel: 
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

      mamba install quickbam

   and update with::

      mamba update quickbam

  To create a new environment, run::

      mamba create --name myenvname quickbam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quickbam:<tag>

   (see `quickbam/tags`_ for valid values for ``<tag>``)


.. |downloads_quickbam| image:: https://img.shields.io/conda/dn/bioconda/quickbam.svg?style=flat
   :target: https://anaconda.org/bioconda/quickbam
   :alt:   (downloads)
.. |docker_quickbam| image:: https://quay.io/repository/biocontainers/quickbam/status
   :target: https://quay.io/repository/biocontainers/quickbam
.. _`quickbam/tags`: https://quay.io/repository/biocontainers/quickbam?tab=tags


.. raw:: html

    <script>
        var package = "quickbam";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickbam/README.html