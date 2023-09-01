:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gadem'
.. highlight: bash

gadem
=====

.. conda:recipe:: gadem
   :replaces_section_title:
   :noindex:

   A Genetic Algorithm Guided Formation of Spaced Dyads Coupled with an EM Algorithm for Motif Discovery

   :homepage: https://www.niehs.nih.gov/research/resources/software/biostatistics/gadem/index.cfm
   :license: GPLv3
   :recipe: /`gadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadem/meta.yaml>`_

   


.. conda:package:: gadem

   |downloads_gadem| |docker_gadem|

   :versions:
      
      

      ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
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

      mamba install gadem

   and update with::

      mamba update gadem

  To create a new environment, run::

      mamba create --name myenvname gadem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gadem:<tag>

   (see `gadem/tags`_ for valid values for ``<tag>``)


.. |downloads_gadem| image:: https://img.shields.io/conda/dn/bioconda/gadem.svg?style=flat
   :target: https://anaconda.org/bioconda/gadem
   :alt:   (downloads)
.. |docker_gadem| image:: https://quay.io/repository/biocontainers/gadem/status
   :target: https://quay.io/repository/biocontainers/gadem
.. _`gadem/tags`: https://quay.io/repository/biocontainers/gadem?tab=tags


.. raw:: html

    <script>
        var package = "gadem";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gadem/README.html