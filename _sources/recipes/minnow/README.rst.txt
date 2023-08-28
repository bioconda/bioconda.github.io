:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minnow'
.. highlight: bash

minnow
======

.. conda:recipe:: minnow
   :replaces_section_title:
   :noindex:

   A principled framework for rapid simulation of dscRNA\-seq data at the read level

   :homepage: https://github.com/COMBINE-lab/minnow
   :license: GPLv3
   :recipe: /`minnow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow/meta.yaml>`_

   


.. conda:package:: minnow

   |downloads_minnow| |docker_minnow|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``beta_1.3-3``,  ``beta_1.3-2``,  ``beta_1.3-1``,  ``beta_1.3-0``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install minnow

   and update with::

      mamba update minnow

  To create a new environment, run::

      mamba create --name myenvname minnow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minnow:<tag>

   (see `minnow/tags`_ for valid values for ``<tag>``)


.. |downloads_minnow| image:: https://img.shields.io/conda/dn/bioconda/minnow.svg?style=flat
   :target: https://anaconda.org/bioconda/minnow
   :alt:   (downloads)
.. |docker_minnow| image:: https://quay.io/repository/biocontainers/minnow/status
   :target: https://quay.io/repository/biocontainers/minnow
.. _`minnow/tags`: https://quay.io/repository/biocontainers/minnow?tab=tags


.. raw:: html

    <script>
        var package = "minnow";
        var versions = ["1.2","1.1","beta_1.3","beta_1.3","beta_1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minnow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minnow/README.html