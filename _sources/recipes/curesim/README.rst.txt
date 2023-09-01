:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curesim'
.. highlight: bash

curesim
=======

.. conda:recipe:: curesim
   :replaces_section_title:
   :noindex:

   CuReSim \(Customized Read Simulator\) is a customized tool which generates synthetic New\-Generation Sequencing reads\, supporting read simulation for major letter\-base sequencing platforms..

   :homepage: http://www.pegase-biosciences.com/curesim-a-customized-read-simulator/
   :license: unknown
   :recipe: /`curesim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curesim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curesim/meta.yaml>`_

   


.. conda:package:: curesim

   |downloads_curesim| |docker_curesim|

   :versions:
      
      

      ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends coreutils: 
   :depends openjdk: ``>=8``
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

      mamba install curesim

   and update with::

      mamba update curesim

  To create a new environment, run::

      mamba create --name myenvname curesim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/curesim:<tag>

   (see `curesim/tags`_ for valid values for ``<tag>``)


.. |downloads_curesim| image:: https://img.shields.io/conda/dn/bioconda/curesim.svg?style=flat
   :target: https://anaconda.org/bioconda/curesim
   :alt:   (downloads)
.. |docker_curesim| image:: https://quay.io/repository/biocontainers/curesim/status
   :target: https://quay.io/repository/biocontainers/curesim
.. _`curesim/tags`: https://quay.io/repository/biocontainers/curesim?tab=tags


.. raw:: html

    <script>
        var package = "curesim";
        var versions = ["1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curesim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curesim/README.html