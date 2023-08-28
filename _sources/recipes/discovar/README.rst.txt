:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discovar'
.. highlight: bash

discovar
========

.. conda:recipe:: discovar
   :replaces_section_title:
   :noindex:

   Suitable for variant calling with reference and de novo assembly of small genomes.

   :homepage: https://www.broadinstitute.org/software/discovar
   :license: MIT
   :recipe: /`discovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar/meta.yaml>`_
   :links: biotools: :biotools:`discovar`, doi: :doi:`10.1038/ng.3121`

   


.. conda:package:: discovar

   |downloads_discovar| |docker_discovar|

   :versions:
      
      

      ``52488-1``,  ``52488-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install discovar

   and update with::

      mamba update discovar

  To create a new environment, run::

      mamba create --name myenvname discovar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/discovar:<tag>

   (see `discovar/tags`_ for valid values for ``<tag>``)


.. |downloads_discovar| image:: https://img.shields.io/conda/dn/bioconda/discovar.svg?style=flat
   :target: https://anaconda.org/bioconda/discovar
   :alt:   (downloads)
.. |docker_discovar| image:: https://quay.io/repository/biocontainers/discovar/status
   :target: https://quay.io/repository/biocontainers/discovar
.. _`discovar/tags`: https://quay.io/repository/biocontainers/discovar?tab=tags


.. raw:: html

    <script>
        var package = "discovar";
        var versions = ["52488","52488"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discovar/README.html