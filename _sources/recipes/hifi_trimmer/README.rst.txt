:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifi_trimmer'
.. highlight: bash

hifi_trimmer
============

.. conda:recipe:: hifi_trimmer
   :replaces_section_title:
   :noindex:

   hifi\_trimmer is a tool for filtering and trimming extraneous adapter hits from a HiFi read set using a BLAST search.

   :homepage: https://github.com/sanger-tol/hifi-trimmer
   :license: MIT
   :recipe: /`hifi_trimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifi_trimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifi_trimmer/meta.yaml>`_

   


.. conda:package:: hifi_trimmer

   |downloads_hifi_trimmer| |docker_hifi_trimmer|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends click: ``>=8.1.8``
   :depends polars: ``>=1.23.0``
   :depends py-bgzip: ``>=0.5.0``
   :depends pysam: ``>=0.23.0``
   :depends python: ``>=3.10,<3.13``
   :depends pyyaml: ``>=6.0.2``
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

      mamba install hifi_trimmer

   and update with::

      mamba update hifi_trimmer

  To create a new environment, run::

      mamba create --name myenvname hifi_trimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifi_trimmer:<tag>

   (see `hifi_trimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_hifi_trimmer| image:: https://img.shields.io/conda/dn/bioconda/hifi_trimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/hifi_trimmer
   :alt:   (downloads)
.. |docker_hifi_trimmer| image:: https://quay.io/repository/biocontainers/hifi_trimmer/status
   :target: https://quay.io/repository/biocontainers/hifi_trimmer
.. _`hifi_trimmer/tags`: https://quay.io/repository/biocontainers/hifi_trimmer?tab=tags


.. raw:: html

    <script>
        var package = "hifi_trimmer";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifi_trimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifi_trimmer/README.html