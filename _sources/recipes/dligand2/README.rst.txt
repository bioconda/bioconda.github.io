:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dligand2'
.. highlight: bash

dligand2
========

.. conda:recipe:: dligand2
   :replaces_section_title:
   :noindex:

   DLIGAND2 is a knowledge\-based method to predict protein\-ligand binding affinity based on a distance\-scaled\, finite\, ideal\-gas reference \(DFIRE\) state.

   :homepage: https://github.com/sysu-yanglab/DLIGAND2
   :license: MIT / MIT
   :recipe: /`dligand2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dligand2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dligand2/meta.yaml>`_

   


.. conda:package:: dligand2

   |downloads_dligand2| |docker_dligand2|

   :versions:
      
      

      ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install dligand2

   and update with::

      mamba update dligand2

  To create a new environment, run::

      mamba create --name myenvname dligand2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dligand2:<tag>

   (see `dligand2/tags`_ for valid values for ``<tag>``)


.. |downloads_dligand2| image:: https://img.shields.io/conda/dn/bioconda/dligand2.svg?style=flat
   :target: https://anaconda.org/bioconda/dligand2
   :alt:   (downloads)
.. |docker_dligand2| image:: https://quay.io/repository/biocontainers/dligand2/status
   :target: https://quay.io/repository/biocontainers/dligand2
.. _`dligand2/tags`: https://quay.io/repository/biocontainers/dligand2?tab=tags


.. raw:: html

    <script>
        var package = "dligand2";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dligand2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dligand2/README.html