:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'darkprofiler'
.. highlight: bash

darkprofiler
============

.. conda:recipe:: darkprofiler
   :replaces_section_title:
   :noindex:

   DarkProfiler\: Alignment and Classification of Peptides from Reference\-Independent De Novo Peptide Sequencing Experiments.

   :homepage: https://pypi.org/project/darkprofiler/
   :license: MIT
   :recipe: /`darkprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/darkprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/darkprofiler/meta.yaml>`_

   


.. conda:package:: darkprofiler

   |downloads_darkprofiler| |docker_darkprofiler|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends biopython: ``>=1.78``
   :depends matplotlib-base: ``>=3.3``
   :depends python: ``>=3.7``
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

      mamba install darkprofiler

   and update with::

      mamba update darkprofiler

  To create a new environment, run::

      mamba create --name myenvname darkprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/darkprofiler:<tag>

   (see `darkprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_darkprofiler| image:: https://img.shields.io/conda/dn/bioconda/darkprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/darkprofiler
   :alt:   (downloads)
.. |docker_darkprofiler| image:: https://quay.io/repository/biocontainers/darkprofiler/status
   :target: https://quay.io/repository/biocontainers/darkprofiler
.. _`darkprofiler/tags`: https://quay.io/repository/biocontainers/darkprofiler?tab=tags


.. raw:: html

    <script>
        var package = "darkprofiler";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/darkprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/darkprofiler/README.html