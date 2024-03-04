:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiphase'
.. highlight: bash

hiphase
=======

.. conda:recipe:: hiphase
   :replaces_section_title:
   :noindex:

   Small and structural variant phasing tool for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/HiPhase
   :license: BSD-3-Clause-Clear
   :recipe: /`hiphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase/meta.yaml>`_

   


.. conda:package:: hiphase

   |downloads_hiphase| |docker_hiphase|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.8.1-0``

      

   
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

      mamba install hiphase

   and update with::

      mamba update hiphase

  To create a new environment, run::

      mamba create --name myenvname hiphase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hiphase:<tag>

   (see `hiphase/tags`_ for valid values for ``<tag>``)


.. |downloads_hiphase| image:: https://img.shields.io/conda/dn/bioconda/hiphase.svg?style=flat
   :target: https://anaconda.org/bioconda/hiphase
   :alt:   (downloads)
.. |docker_hiphase| image:: https://quay.io/repository/biocontainers/hiphase/status
   :target: https://quay.io/repository/biocontainers/hiphase
.. _`hiphase/tags`: https://quay.io/repository/biocontainers/hiphase?tab=tags


.. raw:: html

    <script>
        var package = "hiphase";
        var versions = ["1.4.0","1.3.0","1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiphase/README.html