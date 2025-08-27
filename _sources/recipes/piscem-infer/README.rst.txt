:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piscem-infer'
.. highlight: bash

piscem-infer
============

.. conda:recipe:: piscem-infer
   :replaces_section_title:
   :noindex:

   piscem\-infer is a flexible tool to perform target quantification from bulk\-sequencing data

   :homepage: https://github.com/COMBINE-lab/piscem-infer
   :license: BSD-3-Clause
   :recipe: /`piscem-infer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem-infer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem-infer/meta.yaml>`_

   


.. conda:package:: piscem-infer

   |downloads_piscem-infer| |docker_piscem-infer|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install piscem-infer

   and update with::

      mamba update piscem-infer

  To create a new environment, run::

      mamba create --name myenvname piscem-infer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piscem-infer:<tag>

   (see `piscem-infer/tags`_ for valid values for ``<tag>``)


.. |downloads_piscem-infer| image:: https://img.shields.io/conda/dn/bioconda/piscem-infer.svg?style=flat
   :target: https://anaconda.org/bioconda/piscem-infer
   :alt:   (downloads)
.. |docker_piscem-infer| image:: https://quay.io/repository/biocontainers/piscem-infer/status
   :target: https://quay.io/repository/biocontainers/piscem-infer
.. _`piscem-infer/tags`: https://quay.io/repository/biocontainers/piscem-infer?tab=tags


.. raw:: html

    <script>
        var package = "piscem-infer";
        var versions = ["0.7.0","0.6.0","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piscem-infer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piscem-infer/README.html