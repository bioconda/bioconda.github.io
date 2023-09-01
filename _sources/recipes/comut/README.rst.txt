:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comut'
.. highlight: bash

comut
=====

.. conda:recipe:: comut
   :replaces_section_title:
   :noindex:

   A Python library for creating comutation plots to visualize genomic and phenotypic information

   :homepage: https://github.com/vanallenlab/comut
   :license: MIT / MIT
   :recipe: /`comut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comut/meta.yaml>`_
   :links: biotools: :biotools:`comut`, doi: :doi:`10.1101/2020.03.18.997361`

   


.. conda:package:: comut

   |downloads_comut| |docker_comut|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends matplotlib-base: ``>=3.1.1``
   :depends numpy: ``>=1.18.1``
   :depends palettable: ``>=3.3.0``
   :depends pandas: ``>=0.25.3``
   :depends python: ``>=3.6``
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

      mamba install comut

   and update with::

      mamba update comut

  To create a new environment, run::

      mamba create --name myenvname comut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/comut:<tag>

   (see `comut/tags`_ for valid values for ``<tag>``)


.. |downloads_comut| image:: https://img.shields.io/conda/dn/bioconda/comut.svg?style=flat
   :target: https://anaconda.org/bioconda/comut
   :alt:   (downloads)
.. |docker_comut| image:: https://quay.io/repository/biocontainers/comut/status
   :target: https://quay.io/repository/biocontainers/comut
.. _`comut/tags`: https://quay.io/repository/biocontainers/comut?tab=tags


.. raw:: html

    <script>
        var package = "comut";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comut/README.html