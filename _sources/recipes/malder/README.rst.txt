:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malder'
.. highlight: bash

malder
======

.. conda:recipe:: malder
   :replaces_section_title:
   :noindex:

   MALDER is a version of ALDER \(http\:\/\/groups.csail.mit.edu\/cb\/alder\/\) that has been modified to allow multiple admixture events.

   :homepage: https://github.com/joepickrell/malder
   :license: Custom OSS
   :recipe: /`malder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1313787111`

   


.. conda:package:: malder

   |downloads_malder| |docker_malder|

   :versions:
      
      

      ``1.0.1e83d4e-7``,  ``1.0.1e83d4e-6``,  ``1.0.1e83d4e-5``,  ``1.0.1e83d4e-4``,  ``1.0.1e83d4e-3``,  ``1.0.1e83d4e-2``,  ``1.0.1e83d4e-1``,  ``1.0.1e83d4e-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblapacke: ``>=3.9.0,<4.0a0``
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

      mamba install malder

   and update with::

      mamba update malder

  To create a new environment, run::

      mamba create --name myenvname malder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/malder:<tag>

   (see `malder/tags`_ for valid values for ``<tag>``)


.. |downloads_malder| image:: https://img.shields.io/conda/dn/bioconda/malder.svg?style=flat
   :target: https://anaconda.org/bioconda/malder
   :alt:   (downloads)
.. |docker_malder| image:: https://quay.io/repository/biocontainers/malder/status
   :target: https://quay.io/repository/biocontainers/malder
.. _`malder/tags`: https://quay.io/repository/biocontainers/malder?tab=tags


.. raw:: html

    <script>
        var package = "malder";
        var versions = ["1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malder/README.html