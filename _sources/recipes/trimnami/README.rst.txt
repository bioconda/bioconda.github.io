:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimnami'
.. highlight: bash

trimnami
========

.. conda:recipe:: trimnami
   :replaces_section_title:
   :noindex:

   Read\-trimming pipelines for multiple samples

   :homepage: https://github.com/beardymcjohnface/Trimnami
   :license: MIT
   :recipe: /`trimnami <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimnami>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimnami/meta.yaml>`_

   


.. conda:package:: trimnami

   |downloads_trimnami| |docker_trimnami|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends click: ``>=8.1.3``
   :depends metasnek: ``>=0.0.8``
   :depends pulp: ``<2.8``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.14.0,<8``
   :depends snaketool-utils: ``>=0.0.4``
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

      mamba install trimnami

   and update with::

      mamba update trimnami

  To create a new environment, run::

      mamba create --name myenvname trimnami

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimnami:<tag>

   (see `trimnami/tags`_ for valid values for ``<tag>``)


.. |downloads_trimnami| image:: https://img.shields.io/conda/dn/bioconda/trimnami.svg?style=flat
   :target: https://anaconda.org/bioconda/trimnami
   :alt:   (downloads)
.. |docker_trimnami| image:: https://quay.io/repository/biocontainers/trimnami/status
   :target: https://quay.io/repository/biocontainers/trimnami
.. _`trimnami/tags`: https://quay.io/repository/biocontainers/trimnami?tab=tags


.. raw:: html

    <script>
        var package = "trimnami";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimnami/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimnami/README.html