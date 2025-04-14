:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmscoring'
.. highlight: bash

tmscoring
=========

.. conda:recipe:: tmscoring
   :replaces_section_title:
   :noindex:

   Python implementation of the TMscore program.

   :homepage: https://github.com/Dapid/tmscoring
   :documentation: https://github.com/Dapid/tmscoring/blob/master/README.md
   
   :license: BSD / BSD 3-Clause
   :recipe: /`tmscoring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmscoring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmscoring/meta.yaml>`_

   \# tmscoring
   Python implementation of the \[TMscore\]\(https\:\/\/zhanglab.ccmb.med.umich.edu\/TM\-score\/\) program to compare structures of the same protein.


.. conda:package:: tmscoring

   |downloads_tmscoring| |docker_tmscoring|

   :versions:
      
      

      ``0.4.post0-0``

      

   
   :depends biopython: 
   :depends iminuit: ``<2``
   :depends numpy: 
   :depends python: ``<3.12``
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

      mamba install tmscoring

   and update with::

      mamba update tmscoring

  To create a new environment, run::

      mamba create --name myenvname tmscoring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tmscoring:<tag>

   (see `tmscoring/tags`_ for valid values for ``<tag>``)


.. |downloads_tmscoring| image:: https://img.shields.io/conda/dn/bioconda/tmscoring.svg?style=flat
   :target: https://anaconda.org/bioconda/tmscoring
   :alt:   (downloads)
.. |docker_tmscoring| image:: https://quay.io/repository/biocontainers/tmscoring/status
   :target: https://quay.io/repository/biocontainers/tmscoring
.. _`tmscoring/tags`: https://quay.io/repository/biocontainers/tmscoring?tab=tags


.. raw:: html

    <script>
        var package = "tmscoring";
        var versions = ["0.4.post0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmscoring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmscoring/README.html