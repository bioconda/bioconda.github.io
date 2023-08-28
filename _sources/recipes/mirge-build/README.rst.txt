:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge-build'
.. highlight: bash

mirge-build
===========

.. conda:recipe:: mirge-build
   :replaces_section_title:
   :noindex:

   miRge\-build\: Building libraries of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3_build
   :documentation: https://mirge-build.readthedocs.io/
   
   :developer docs: https://github.com/mhalushka/miRge3_build/
   :license: MIT / MIT
   :recipe: /`mirge-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build/meta.yaml>`_

   


.. conda:package:: mirge-build

   |downloads_mirge-build| |docker_mirge-build|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biopython: ``1.77``
   :depends bowtie: ``1.2.3``
   :depends python: 
   :depends scikit-learn: ``0.23.1``
   :depends scipy: ``1.4.1``
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

      mamba install mirge-build

   and update with::

      mamba update mirge-build

  To create a new environment, run::

      mamba create --name myenvname mirge-build

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirge-build:<tag>

   (see `mirge-build/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge-build| image:: https://img.shields.io/conda/dn/bioconda/mirge-build.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge-build
   :alt:   (downloads)
.. |docker_mirge-build| image:: https://quay.io/repository/biocontainers/mirge-build/status
   :target: https://quay.io/repository/biocontainers/mirge-build
.. _`mirge-build/tags`: https://quay.io/repository/biocontainers/mirge-build?tab=tags


.. raw:: html

    <script>
        var package = "mirge-build";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge-build/README.html