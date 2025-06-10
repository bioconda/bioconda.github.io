:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'caspeak'
.. highlight: bash

caspeak
=======

.. conda:recipe:: caspeak
   :replaces_section_title:
   :noindex:

   A pipeline for finding non\-reference mobile element insertions

   :homepage: https://github.com/Rye-lxy/CasPeak
   :license: GPL-3.0-or-later
   :recipe: /`caspeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caspeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caspeak/meta.yaml>`_

   


.. conda:package:: caspeak

   |downloads_caspeak| |docker_caspeak|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends lamassemble: 
   :depends last: 
   :depends python: ``>=3.7``
   :depends seg-suite: 
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

      mamba install caspeak

   and update with::

      mamba update caspeak

  To create a new environment, run::

      mamba create --name myenvname caspeak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/caspeak:<tag>

   (see `caspeak/tags`_ for valid values for ``<tag>``)


.. |downloads_caspeak| image:: https://img.shields.io/conda/dn/bioconda/caspeak.svg?style=flat
   :target: https://anaconda.org/bioconda/caspeak
   :alt:   (downloads)
.. |docker_caspeak| image:: https://quay.io/repository/biocontainers/caspeak/status
   :target: https://quay.io/repository/biocontainers/caspeak
.. _`caspeak/tags`: https://quay.io/repository/biocontainers/caspeak?tab=tags


.. raw:: html

    <script>
        var package = "caspeak";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/caspeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/caspeak/README.html