:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locus_processing'
.. highlight: bash

locus_processing
================

.. conda:recipe:: locus_processing
   :replaces_section_title:
   :noindex:

   Tools for working with locus definition files

   :homepage: https://github.com/LUMC/locus_processing
   :license: MIT / MIT License
   :recipe: /`locus_processing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing/meta.yaml>`_

   


.. conda:package:: locus_processing

   |downloads_locus_processing| |docker_locus_processing|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends click: ``>=6.7``
   :depends marshmallow: ``2.13.5``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=3.12``
   :depends requests: ``>=2.18.1``
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

      mamba install locus_processing

   and update with::

      mamba update locus_processing

  To create a new environment, run::

      mamba create --name myenvname locus_processing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/locus_processing:<tag>

   (see `locus_processing/tags`_ for valid values for ``<tag>``)


.. |downloads_locus_processing| image:: https://img.shields.io/conda/dn/bioconda/locus_processing.svg?style=flat
   :target: https://anaconda.org/bioconda/locus_processing
   :alt:   (downloads)
.. |docker_locus_processing| image:: https://quay.io/repository/biocontainers/locus_processing/status
   :target: https://quay.io/repository/biocontainers/locus_processing
.. _`locus_processing/tags`: https://quay.io/repository/biocontainers/locus_processing?tab=tags


.. raw:: html

    <script>
        var package = "locus_processing";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locus_processing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locus_processing/README.html