:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lemur'
.. highlight: bash

lemur
=====

.. conda:recipe:: lemur
   :replaces_section_title:
   :noindex:

   Lemur is a tool for rapid and accurate taxonomic profiling on long\-read metagenomic datasets

   :homepage: https://github.com/treangenlab/lemur
   :license: MIT
   :recipe: /`lemur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lemur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lemur/meta.yaml>`_

   


.. conda:package:: lemur

   |downloads_lemur| |docker_lemur|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends minimap2: ``>=2.22``
   :depends numpy: ``>=1.11``
   :depends pandas: ``>=1.1.3``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.7``
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

      mamba install lemur

   and update with::

      mamba update lemur

  To create a new environment, run::

      mamba create --name myenvname lemur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lemur:<tag>

   (see `lemur/tags`_ for valid values for ``<tag>``)


.. |downloads_lemur| image:: https://img.shields.io/conda/dn/bioconda/lemur.svg?style=flat
   :target: https://anaconda.org/bioconda/lemur
   :alt:   (downloads)
.. |docker_lemur| image:: https://quay.io/repository/biocontainers/lemur/status
   :target: https://quay.io/repository/biocontainers/lemur
.. _`lemur/tags`: https://quay.io/repository/biocontainers/lemur?tab=tags


.. raw:: html

    <script>
        var package = "lemur";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lemur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lemur/README.html