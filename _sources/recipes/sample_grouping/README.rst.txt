:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sample_grouping'
.. highlight: bash

sample_grouping
===============

.. conda:recipe:: sample_grouping
   :replaces_section_title:
   :noindex:

   A tool for merging reads based on metadata groups.

   :homepage: https://github.com/SantaMcCloud/Sample_grouping
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sample_grouping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample_grouping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample_grouping/meta.yaml>`_

   


.. conda:package:: sample_grouping

   |downloads_sample_grouping| |docker_sample_grouping|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.6``
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

      mamba install sample_grouping

   and update with::

      mamba update sample_grouping

  To create a new environment, run::

      mamba create --name myenvname sample_grouping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sample_grouping:<tag>

   (see `sample_grouping/tags`_ for valid values for ``<tag>``)


.. |downloads_sample_grouping| image:: https://img.shields.io/conda/dn/bioconda/sample_grouping.svg?style=flat
   :target: https://anaconda.org/bioconda/sample_grouping
   :alt:   (downloads)
.. |docker_sample_grouping| image:: https://quay.io/repository/biocontainers/sample_grouping/status
   :target: https://quay.io/repository/biocontainers/sample_grouping
.. _`sample_grouping/tags`: https://quay.io/repository/biocontainers/sample_grouping?tab=tags


.. raw:: html

    <script>
        var package = "sample_grouping";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sample_grouping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sample_grouping/README.html