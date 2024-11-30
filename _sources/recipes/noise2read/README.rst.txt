:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'noise2read'
.. highlight: bash

noise2read
==========

.. conda:recipe:: noise2read
   :replaces_section_title:
   :noindex:

   Turn noise to read

   :homepage: https://github.com/Jappy0/noise2read
   :license: MIT
   :recipe: /`noise2read <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noise2read>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noise2read/meta.yaml>`_

   noise2read\, originated in a computable rule translated from PCR erring mechanism that\: a rare read is erroneous if it has a neighboring read of high abundance\, turns erroneous reads into their original state without bringing up any non\-existing sequences into the short read set\(\&lt 300bp\) including DNA and RNA sequencing \(DNA\/RNA\-seq\)\, small RNA\, unique molecular identifiers \(UMI\) and amplicon sequencing data.



.. conda:package:: noise2read

   |downloads_noise2read| |docker_noise2read|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.10-0``,  ``0.2.7-0``

      

   
   :depends bcool: 
   :depends biopython: ``1.79``
   :depends editdistance: ``>=0.6.0``
   :depends imbalanced-learn: ``>=0.9.1``
   :depends matplotlib-base: ``>=3.5.2``
   :depends mpire: ``>=2.8.0``
   :depends networkx: ``2.8.5``
   :depends optuna: ``>=3.1.1``
   :depends pandas: ``>=1.4.3``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.1.1``
   :depends seqtk: 
   :depends xgboost: ``1.6.1``
   :depends xlsxwriter: ``>=3.0.3``
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

      mamba install noise2read

   and update with::

      mamba update noise2read

  To create a new environment, run::

      mamba create --name myenvname noise2read

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/noise2read:<tag>

   (see `noise2read/tags`_ for valid values for ``<tag>``)


.. |downloads_noise2read| image:: https://img.shields.io/conda/dn/bioconda/noise2read.svg?style=flat
   :target: https://anaconda.org/bioconda/noise2read
   :alt:   (downloads)
.. |docker_noise2read| image:: https://quay.io/repository/biocontainers/noise2read/status
   :target: https://quay.io/repository/biocontainers/noise2read
.. _`noise2read/tags`: https://quay.io/repository/biocontainers/noise2read?tab=tags


.. raw:: html

    <script>
        var package = "noise2read";
        var versions = ["0.3.0","0.2.10","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/noise2read/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/noise2read/README.html