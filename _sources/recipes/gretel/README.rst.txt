:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gretel'
.. highlight: bash

gretel
======

.. conda:recipe:: gretel
   :replaces_section_title:
   :noindex:

   An algorithm for recovering haplotypes from metagenomes

   :homepage: https://github.com/SamStudio8/gretel
   :license: MIT
   :recipe: /`gretel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretel/meta.yaml>`_
   :links: doi: :doi:`10.1101/223404`

   


.. conda:package:: gretel

   |downloads_gretel| |docker_gretel|

   :versions:
      
      

      ``0.0.94-1``,  ``0.0.94-0``,  ``0.0.93-1``,  ``0.0.93-0``,  ``0.0.92-0``,  ``0.0.90-1``,  ``0.0.90-0``,  ``0.0.81-0``

      

   
   :depends hanselx: ``0.0.92.*``
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends pyvcf: 
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

      mamba install gretel

   and update with::

      mamba update gretel

  To create a new environment, run::

      mamba create --name myenvname gretel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gretel:<tag>

   (see `gretel/tags`_ for valid values for ``<tag>``)


.. |downloads_gretel| image:: https://img.shields.io/conda/dn/bioconda/gretel.svg?style=flat
   :target: https://anaconda.org/bioconda/gretel
   :alt:   (downloads)
.. |docker_gretel| image:: https://quay.io/repository/biocontainers/gretel/status
   :target: https://quay.io/repository/biocontainers/gretel
.. _`gretel/tags`: https://quay.io/repository/biocontainers/gretel?tab=tags


.. raw:: html

    <script>
        var package = "gretel";
        var versions = ["0.0.94","0.0.94","0.0.93","0.0.93","0.0.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gretel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gretel/README.html