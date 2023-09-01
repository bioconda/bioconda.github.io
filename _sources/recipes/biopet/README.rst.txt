:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet'
.. highlight: bash

biopet
======

.. conda:recipe:: biopet
   :replaces_section_title:
   :noindex:

   Biopet \(Bio Pipeline Execution Toolkit\) is the main pipeline development framework of the LUMC Sequencing Analysis Support Core team.

   :homepage: https://github.com/biopet/biopet
   :license: https://github.com/biopet/biopet/blob/develop/biopet-core/src/main/resources/nl/lumc/sasc/biopet/License.txt
   :recipe: /`biopet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet/meta.yaml>`_

   


.. conda:package:: biopet

   |downloads_biopet| |docker_biopet|

   :versions:
      
      

      ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-0``

      

   
   :depends openjdk: 
   :depends python: 
   :depends r-argparse: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-reshape: 
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

      mamba install biopet

   and update with::

      mamba update biopet

  To create a new environment, run::

      mamba create --name myenvname biopet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet:<tag>

   (see `biopet/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet| image:: https://img.shields.io/conda/dn/bioconda/biopet.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet
   :alt:   (downloads)
.. |docker_biopet| image:: https://quay.io/repository/biocontainers/biopet/status
   :target: https://quay.io/repository/biocontainers/biopet
.. _`biopet/tags`: https://quay.io/repository/biocontainers/biopet?tab=tags


.. raw:: html

    <script>
        var package = "biopet";
        var versions = ["0.9.0","0.9.0","0.9.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet/README.html