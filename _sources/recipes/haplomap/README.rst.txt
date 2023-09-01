:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplomap'
.. highlight: bash

haplomap
========

.. conda:recipe:: haplomap
   :replaces_section_title:
   :noindex:

   Haplotype\-based computational genetic mapping

   :homepage: https://github.com/zqfang/haplomap
   :license: MIT
   :recipe: /`haplomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplomap/meta.yaml>`_

   


.. conda:package:: haplomap

   |downloads_haplomap| |docker_haplomap|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install haplomap

   and update with::

      mamba update haplomap

  To create a new environment, run::

      mamba create --name myenvname haplomap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplomap:<tag>

   (see `haplomap/tags`_ for valid values for ``<tag>``)


.. |downloads_haplomap| image:: https://img.shields.io/conda/dn/bioconda/haplomap.svg?style=flat
   :target: https://anaconda.org/bioconda/haplomap
   :alt:   (downloads)
.. |docker_haplomap| image:: https://quay.io/repository/biocontainers/haplomap/status
   :target: https://quay.io/repository/biocontainers/haplomap
.. _`haplomap/tags`: https://quay.io/repository/biocontainers/haplomap?tab=tags


.. raw:: html

    <script>
        var package = "haplomap";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplomap/README.html