:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aastk'
.. highlight: bash

aastk
=====

.. conda:recipe:: aastk
   :replaces_section_title:
   :noindex:

   Toolkit for analyses of amino acid sequences

   :homepage: https://github.com/dspeth/aastk/
   :documentation: https://globdb.org/aastk
   
   :license: GPL-3.0-or-later
   :recipe: /`aastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aastk/meta.yaml>`_

   This package contains several tools to generate and work with amino acid sequence datasets.
   AASTK is primarily designed to work with the GlobDB genome database.



.. conda:package:: aastk

   |downloads_aastk| |docker_aastk|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends contourpy: ``>=1.3.2``
   :depends diamond: ``>=2.1.11``
   :depends matplotlib-base: ``>=3.10.1``
   :depends numpy: ``>=2.2.5``
   :depends opentsne: ``>=1.0.2``
   :depends pandas: ``>=2.2.3``
   :depends python: ``>=3.13``
   :depends pyyaml: ``>=6.0.2``
   :depends scikit-learn: ``>=1.6.1``
   :depends scipy: ``>=1.15.3``
   :depends seqkit: ``>=2.5.1``
   :depends tqdm: ``>=4.67.1``
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

      mamba install aastk

   and update with::

      mamba update aastk

  To create a new environment, run::

      mamba create --name myenvname aastk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aastk:<tag>

   (see `aastk/tags`_ for valid values for ``<tag>``)


.. |downloads_aastk| image:: https://img.shields.io/conda/dn/bioconda/aastk.svg?style=flat
   :target: https://anaconda.org/bioconda/aastk
   :alt:   (downloads)
.. |docker_aastk| image:: https://quay.io/repository/biocontainers/aastk/status
   :target: https://quay.io/repository/biocontainers/aastk
.. _`aastk/tags`: https://quay.io/repository/biocontainers/aastk?tab=tags


.. raw:: html

    <script>
        var package = "aastk";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aastk/README.html