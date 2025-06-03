:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longtrack'
.. highlight: bash

longtrack
=========

.. conda:recipe:: longtrack
   :replaces_section_title:
   :noindex:

   Track FMT strains using long\-read metagenomic assemblies.

   :homepage: https://github.com/fanglab/LongTrack
   :license: MIT / MIT
   :recipe: /`longtrack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtrack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtrack/meta.yaml>`_

   


.. conda:package:: longtrack

   |downloads_longtrack| |docker_longtrack|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bowtie2: 
   :depends htseq: ``>=0.5.3p9``
   :depends matplotlib-base: ``>=1.0.0``
   :depends numpy: ``>=1.7.1``
   :depends pandas: ``>=0.7.3``
   :depends python: ``2.7.*``
   :depends seaborn: ``>=0.5.0``
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

      mamba install longtrack

   and update with::

      mamba update longtrack

  To create a new environment, run::

      mamba create --name myenvname longtrack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longtrack:<tag>

   (see `longtrack/tags`_ for valid values for ``<tag>``)


.. |downloads_longtrack| image:: https://img.shields.io/conda/dn/bioconda/longtrack.svg?style=flat
   :target: https://anaconda.org/bioconda/longtrack
   :alt:   (downloads)
.. |docker_longtrack| image:: https://quay.io/repository/biocontainers/longtrack/status
   :target: https://quay.io/repository/biocontainers/longtrack
.. _`longtrack/tags`: https://quay.io/repository/biocontainers/longtrack?tab=tags


.. raw:: html

    <script>
        var package = "longtrack";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longtrack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longtrack/README.html