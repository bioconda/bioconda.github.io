:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinscan'
.. highlight: bash

tinscan
=======

.. conda:recipe:: tinscan
   :replaces_section_title:
   :noindex:

   Find alignment signatures characteristic of transposon insertion sites.

   :homepage: https://github.com/Adamtaranto/TE-insertion-scanner
   :documentation: https://github.com/Adamtaranto/TE-insertion-scanner/blob/0.2.1/README.md
   
   :license: MIT / MIT
   :recipe: /`tinscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan/meta.yaml>`_

   


.. conda:package:: tinscan

   |downloads_tinscan| |docker_tinscan|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends biopython: ``>=1.70``
   :depends python: ``>=3.8``
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

      mamba install tinscan

   and update with::

      mamba update tinscan

  To create a new environment, run::

      mamba create --name myenvname tinscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tinscan:<tag>

   (see `tinscan/tags`_ for valid values for ``<tag>``)


.. |downloads_tinscan| image:: https://img.shields.io/conda/dn/bioconda/tinscan.svg?style=flat
   :target: https://anaconda.org/bioconda/tinscan
   :alt:   (downloads)
.. |docker_tinscan| image:: https://quay.io/repository/biocontainers/tinscan/status
   :target: https://quay.io/repository/biocontainers/tinscan
.. _`tinscan/tags`: https://quay.io/repository/biocontainers/tinscan?tab=tags


.. raw:: html

    <script>
        var package = "tinscan";
        var versions = ["0.2.1","0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinscan/README.html