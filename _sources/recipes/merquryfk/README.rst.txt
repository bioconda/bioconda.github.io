:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merquryfk'
.. highlight: bash

merquryfk
=========

.. conda:recipe:: merquryfk
   :replaces_section_title:
   :noindex:

   MerquryFK replaces meryl with the FastK k\-mer counter suite to considerably speed up analyses.

   :homepage: https://github.com/thegenemyers/MERQURY.FK
   :license: https://github.com/thegenemyers/MERQURY.FK/blob/main/LICENSE
   :recipe: /`merquryfk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merquryfk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merquryfk/meta.yaml>`_

   


.. conda:package:: merquryfk

   |downloads_merquryfk| |docker_merquryfk|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.4.0,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install merquryfk

   and update with::

      mamba update merquryfk

  To create a new environment, run::

      mamba create --name myenvname merquryfk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/merquryfk:<tag>

   (see `merquryfk/tags`_ for valid values for ``<tag>``)


.. |downloads_merquryfk| image:: https://img.shields.io/conda/dn/bioconda/merquryfk.svg?style=flat
   :target: https://anaconda.org/bioconda/merquryfk
   :alt:   (downloads)
.. |docker_merquryfk| image:: https://quay.io/repository/biocontainers/merquryfk/status
   :target: https://quay.io/repository/biocontainers/merquryfk
.. _`merquryfk/tags`: https://quay.io/repository/biocontainers/merquryfk?tab=tags


.. raw:: html

    <script>
        var package = "merquryfk";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merquryfk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merquryfk/README.html