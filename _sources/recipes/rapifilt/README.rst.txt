:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapifilt'
.. highlight: bash

rapifilt
========

.. conda:recipe:: rapifilt
   :replaces_section_title:
   :noindex:

   RAPIFILT\:RAPId FILTer is a quality control of DNA sequences

   :homepage: https://github.com/andvides/RAPIFILT.git
   :license: GPL / GPL-3.0
   :recipe: /`rapifilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt/meta.yaml>`_

   


.. conda:package:: rapifilt

   |downloads_rapifilt| |docker_rapifilt|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install rapifilt

   and update with::

      mamba update rapifilt

  To create a new environment, run::

      mamba create --name myenvname rapifilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapifilt:<tag>

   (see `rapifilt/tags`_ for valid values for ``<tag>``)


.. |downloads_rapifilt| image:: https://img.shields.io/conda/dn/bioconda/rapifilt.svg?style=flat
   :target: https://anaconda.org/bioconda/rapifilt
   :alt:   (downloads)
.. |docker_rapifilt| image:: https://quay.io/repository/biocontainers/rapifilt/status
   :target: https://quay.io/repository/biocontainers/rapifilt
.. _`rapifilt/tags`: https://quay.io/repository/biocontainers/rapifilt?tab=tags


.. raw:: html

    <script>
        var package = "rapifilt";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapifilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapifilt/README.html