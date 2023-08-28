:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaconverter'
.. highlight: bash

msaconverter
============

.. conda:recipe:: msaconverter
   :replaces_section_title:
   :noindex:

   To convert multiple alignment alignments \(MSA\) into different formats

   :homepage: https://github.com/linzhi2013/msaconverter
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`msaconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaconverter/meta.yaml>`_

   


.. conda:package:: msaconverter

   |downloads_msaconverter| |docker_msaconverter|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: ``>=1.54``
   :depends python: ``>=2.7.15``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install msaconverter

   and update with::

      mamba update msaconverter

  To create a new environment, run::

      mamba create --name myenvname msaconverter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msaconverter:<tag>

   (see `msaconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_msaconverter| image:: https://img.shields.io/conda/dn/bioconda/msaconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/msaconverter
   :alt:   (downloads)
.. |docker_msaconverter| image:: https://quay.io/repository/biocontainers/msaconverter/status
   :target: https://quay.io/repository/biocontainers/msaconverter
.. _`msaconverter/tags`: https://quay.io/repository/biocontainers/msaconverter?tab=tags


.. raw:: html

    <script>
        var package = "msaconverter";
        var versions = ["0.0.4","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaconverter/README.html