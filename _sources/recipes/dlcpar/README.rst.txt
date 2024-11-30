:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dlcpar'
.. highlight: bash

dlcpar
======

.. conda:recipe:: dlcpar
   :replaces_section_title:
   :noindex:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/davidemms/OrthoFinder
   :license: GPLv3
   :recipe: /`dlcpar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dlcpar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dlcpar/meta.yaml>`_

   


.. conda:package:: dlcpar

   |downloads_dlcpar| |docker_dlcpar|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends numpy: 
   :depends python: ``<3``
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

      mamba install dlcpar

   and update with::

      mamba update dlcpar

  To create a new environment, run::

      mamba create --name myenvname dlcpar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dlcpar:<tag>

   (see `dlcpar/tags`_ for valid values for ``<tag>``)


.. |downloads_dlcpar| image:: https://img.shields.io/conda/dn/bioconda/dlcpar.svg?style=flat
   :target: https://anaconda.org/bioconda/dlcpar
   :alt:   (downloads)
.. |docker_dlcpar| image:: https://quay.io/repository/biocontainers/dlcpar/status
   :target: https://quay.io/repository/biocontainers/dlcpar
.. _`dlcpar/tags`: https://quay.io/repository/biocontainers/dlcpar?tab=tags


.. raw:: html

    <script>
        var package = "dlcpar";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dlcpar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dlcpar/README.html