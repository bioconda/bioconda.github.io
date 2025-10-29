:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfold'
.. highlight: bash

seqfold
=======

.. conda:recipe:: seqfold
   :replaces_section_title:
   :noindex:

   Predict the minimum free energy and structure of nucleic acids.

   :homepage: https://github.com/Lattice-Automation/seqfold
   :license: MIT
   :recipe: /`seqfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfold/meta.yaml>`_

   


.. conda:package:: seqfold

   |downloads_seqfold| |docker_seqfold|

   :versions:
      
      

      ``0.9.0-0``,  ``0.7.17-0``

      

   
   :depends python: ``>=3.5``
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

      mamba install seqfold

   and update with::

      mamba update seqfold

  To create a new environment, run::

      mamba create --name myenvname seqfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqfold:<tag>

   (see `seqfold/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfold| image:: https://img.shields.io/conda/dn/bioconda/seqfold.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfold
   :alt:   (downloads)
.. |docker_seqfold| image:: https://quay.io/repository/biocontainers/seqfold/status
   :target: https://quay.io/repository/biocontainers/seqfold
.. _`seqfold/tags`: https://quay.io/repository/biocontainers/seqfold?tab=tags


.. raw:: html

    <script>
        var package = "seqfold";
        var versions = ["0.9.0","0.7.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfold/README.html