:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptools_bin'
.. highlight: bash

ptools_bin
==========

.. conda:recipe:: ptools_bin
   :replaces_section_title:
   :noindex:

   Installation for ptools scripts.

   :homepage: https://github.com/ENCODE-DCC/ptools_bin
   :license: MIT / MIT
   :recipe: /`ptools_bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin/meta.yaml>`_

   


.. conda:package:: ptools_bin

   |downloads_ptools_bin| |docker_ptools_bin|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.3``
   :depends python: 
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

      mamba install ptools_bin

   and update with::

      mamba update ptools_bin

  To create a new environment, run::

      mamba create --name myenvname ptools_bin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ptools_bin:<tag>

   (see `ptools_bin/tags`_ for valid values for ``<tag>``)


.. |downloads_ptools_bin| image:: https://img.shields.io/conda/dn/bioconda/ptools_bin.svg?style=flat
   :target: https://anaconda.org/bioconda/ptools_bin
   :alt:   (downloads)
.. |docker_ptools_bin| image:: https://quay.io/repository/biocontainers/ptools_bin/status
   :target: https://quay.io/repository/biocontainers/ptools_bin
.. _`ptools_bin/tags`: https://quay.io/repository/biocontainers/ptools_bin?tab=tags


.. raw:: html

    <script>
        var package = "ptools_bin";
        var versions = ["0.0.7","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptools_bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptools_bin/README.html