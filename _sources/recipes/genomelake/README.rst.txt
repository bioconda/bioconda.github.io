:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomelake'
.. highlight: bash

genomelake
==========

.. conda:recipe:: genomelake
   :replaces_section_title:
   :noindex:

   Simple and efficient random access to genomic data for deep learning models.

   :homepage: https://github.com/kundajelab/genomelake
   :license: BSD / BSD License
   :recipe: /`genomelake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake/meta.yaml>`_

   Simple and efficient random access to genomic data for deep learning models.


.. conda:package:: genomelake

   |downloads_genomelake| |docker_genomelake|

   :versions:
      
      

      ``0.1.4-6``,  ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends bcolz: ``>=1.1``
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends six: ``>=1.9.0``
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

      mamba install genomelake

   and update with::

      mamba update genomelake

  To create a new environment, run::

      mamba create --name myenvname genomelake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomelake:<tag>

   (see `genomelake/tags`_ for valid values for ``<tag>``)


.. |downloads_genomelake| image:: https://img.shields.io/conda/dn/bioconda/genomelake.svg?style=flat
   :target: https://anaconda.org/bioconda/genomelake
   :alt:   (downloads)
.. |docker_genomelake| image:: https://quay.io/repository/biocontainers/genomelake/status
   :target: https://quay.io/repository/biocontainers/genomelake
.. _`genomelake/tags`: https://quay.io/repository/biocontainers/genomelake?tab=tags


.. raw:: html

    <script>
        var package = "genomelake";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomelake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomelake/README.html