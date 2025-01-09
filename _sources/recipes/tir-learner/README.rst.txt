:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tir-learner'
.. highlight: bash

tir-learner
===========

.. conda:recipe:: tir-learner
   :replaces_section_title:
   :noindex:

   An ensemble pipeline for terminal inverted repeat \(TIR\) transposable elements annotation.

   :homepage: https://github.com/lutianyu2001/TIR-Learner
   :documentation: https://github.com/lutianyu2001/TIR-Learner/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tir-learner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tir-learner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tir-learner/meta.yaml>`_
   :links: doi: :doi:`10.6084/m9.figshare.26082574.v1`

   


.. conda:package:: tir-learner

   |downloads_tir-learner| |docker_tir-learner|

   :versions:
      
      

      ``3.0.5-0``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends biopython: 
   :depends genericrepeatfinder: 
   :depends genometools-genometools: 
   :depends keras: ``>=3.3.3``
   :depends multiprocess: 
   :depends pandas: 
   :depends pytorch: 
   :depends regex: 
   :depends rmblast: 
   :depends scikit-learn: ``>=1.3``
   :depends swifter: 
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

      mamba install tir-learner

   and update with::

      mamba update tir-learner

  To create a new environment, run::

      mamba create --name myenvname tir-learner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tir-learner:<tag>

   (see `tir-learner/tags`_ for valid values for ``<tag>``)


.. |downloads_tir-learner| image:: https://img.shields.io/conda/dn/bioconda/tir-learner.svg?style=flat
   :target: https://anaconda.org/bioconda/tir-learner
   :alt:   (downloads)
.. |docker_tir-learner| image:: https://quay.io/repository/biocontainers/tir-learner/status
   :target: https://quay.io/repository/biocontainers/tir-learner
.. _`tir-learner/tags`: https://quay.io/repository/biocontainers/tir-learner?tab=tags


.. raw:: html

    <script>
        var package = "tir-learner";
        var versions = ["3.0.5","3.0.3","3.0.3","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tir-learner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tir-learner/README.html