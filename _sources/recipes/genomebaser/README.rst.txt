:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomebaser'
.. highlight: bash

genomebaser
===========

.. conda:recipe:: genomebaser
   :replaces_section_title:
   :noindex:

   GenomeBaser manages complete \(bacterial\) genomes from NCBI

   :homepage: http://github.com/mscook/GenomeBaser
   :license: ECL 2.0
   :recipe: /`genomebaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomebaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomebaser/meta.yaml>`_

   


.. conda:package:: genomebaser

   |downloads_genomebaser| |docker_genomebaser|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends python: ``2.7*``
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

      mamba install genomebaser

   and update with::

      mamba update genomebaser

  To create a new environment, run::

      mamba create --name myenvname genomebaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomebaser:<tag>

   (see `genomebaser/tags`_ for valid values for ``<tag>``)


.. |downloads_genomebaser| image:: https://img.shields.io/conda/dn/bioconda/genomebaser.svg?style=flat
   :target: https://anaconda.org/bioconda/genomebaser
   :alt:   (downloads)
.. |docker_genomebaser| image:: https://quay.io/repository/biocontainers/genomebaser/status
   :target: https://quay.io/repository/biocontainers/genomebaser
.. _`genomebaser/tags`: https://quay.io/repository/biocontainers/genomebaser?tab=tags


.. raw:: html

    <script>
        var package = "genomebaser";
        var versions = ["0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomebaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomebaser/README.html