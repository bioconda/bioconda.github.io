:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'burst'
.. highlight: bash

burst
=====

.. conda:recipe:: burst
   :replaces_section_title:
   :noindex:

   BURST \(formerly known as embalmer\) is an optimal\, high\-speed pairwise sequence aligner specialized in aligning many NGS short reads against large reference databases.

   :homepage: https://github.com/knights-lab/BURST
   :license: AGPL3.0
   :recipe: /`burst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burst/meta.yaml>`_

   


.. conda:package:: burst

   |downloads_burst| |docker_burst|

   :versions:
      
      

      ``1.0-0``,  ``v1.0-1``,  ``v1.0-0``

      

   
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

      mamba install burst

   and update with::

      mamba update burst

  To create a new environment, run::

      mamba create --name myenvname burst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/burst:<tag>

   (see `burst/tags`_ for valid values for ``<tag>``)


.. |downloads_burst| image:: https://img.shields.io/conda/dn/bioconda/burst.svg?style=flat
   :target: https://anaconda.org/bioconda/burst
   :alt:   (downloads)
.. |docker_burst| image:: https://quay.io/repository/biocontainers/burst/status
   :target: https://quay.io/repository/biocontainers/burst
.. _`burst/tags`: https://quay.io/repository/biocontainers/burst?tab=tags


.. raw:: html

    <script>
        var package = "burst";
        var versions = ["1.0","v1.0","v1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/burst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/burst/README.html