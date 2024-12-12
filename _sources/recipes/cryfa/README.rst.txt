:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryfa'
.. highlight: bash

cryfa
=====

.. conda:recipe:: cryfa
   :replaces_section_title:
   :noindex:

   A secure encryption tool for genomic data

   :homepage: https://github.com/smortezah/cryfa
   :license: GPL / GPL3
   :recipe: /`cryfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa/meta.yaml>`_

   


.. conda:package:: cryfa

   |downloads_cryfa| |docker_cryfa|

   :versions:
      
      

      ``20.04-3``,  ``20.04-2``,  ``20.04-1``,  ``20.04-0``,  ``18.06-2``,  ``18.06-1``,  ``18.06-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install cryfa

   and update with::

      mamba update cryfa

  To create a new environment, run::

      mamba create --name myenvname cryfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cryfa:<tag>

   (see `cryfa/tags`_ for valid values for ``<tag>``)


.. |downloads_cryfa| image:: https://img.shields.io/conda/dn/bioconda/cryfa.svg?style=flat
   :target: https://anaconda.org/bioconda/cryfa
   :alt:   (downloads)
.. |docker_cryfa| image:: https://quay.io/repository/biocontainers/cryfa/status
   :target: https://quay.io/repository/biocontainers/cryfa
.. _`cryfa/tags`: https://quay.io/repository/biocontainers/cryfa?tab=tags


.. raw:: html

    <script>
        var package = "cryfa";
        var versions = ["20.04","20.04","20.04","20.04","18.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryfa/README.html