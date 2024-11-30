:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longestrunsubsequence'
.. highlight: bash

longestrunsubsequence
=====================

.. conda:recipe:: longestrunsubsequence
   :replaces_section_title:
   :noindex:

   Implementation of a solver for the Longest Run Subsequence Problem. Given a sequence as input\, compute a longest subsequence such that there is at most one run for every character.

   :homepage: https://github.com/AlBi-HHU/longest-run-subsequence
   :license: MIT
   :recipe: /`longestrunsubsequence <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longestrunsubsequence>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longestrunsubsequence/meta.yaml>`_

   This is an implementation of the longest run subsequence problem\, introduced in \(Schrinner et al.\, WABI 2020\) https\:\/\/drops.dagstuhl.de\/opus\/volltexte\/2020\/12795\/. It describes a string problem\, which looks for the longest subsequence of a string such that this sequence contains at most one consecutive run for each character in the underlying alphabet. The code contains two different algorithms \(based on Integer Linear Programming and on Dynamic Programming\) as described in the publication. The problem appears in the context of homology\-based scaffolding of two contig sets\, originating from two individuals of the same species.


.. conda:package:: longestrunsubsequence

   |downloads_longestrunsubsequence| |docker_longestrunsubsequence|

   :versions:
      
      

      ``1.0.1-0``

      

   
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

      mamba install longestrunsubsequence

   and update with::

      mamba update longestrunsubsequence

  To create a new environment, run::

      mamba create --name myenvname longestrunsubsequence

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longestrunsubsequence:<tag>

   (see `longestrunsubsequence/tags`_ for valid values for ``<tag>``)


.. |downloads_longestrunsubsequence| image:: https://img.shields.io/conda/dn/bioconda/longestrunsubsequence.svg?style=flat
   :target: https://anaconda.org/bioconda/longestrunsubsequence
   :alt:   (downloads)
.. |docker_longestrunsubsequence| image:: https://quay.io/repository/biocontainers/longestrunsubsequence/status
   :target: https://quay.io/repository/biocontainers/longestrunsubsequence
.. _`longestrunsubsequence/tags`: https://quay.io/repository/biocontainers/longestrunsubsequence?tab=tags


.. raw:: html

    <script>
        var package = "longestrunsubsequence";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longestrunsubsequence/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longestrunsubsequence/README.html