:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpiphy'
.. highlight: bash

snpiphy
=======

.. conda:recipe:: snpiphy
   :replaces_section_title:
   :noindex:

   An automated snp phylogeny pipeline

   :homepage: https://github.com/bogemad/snpiphy
   :license: GPL / GPLv3
   :recipe: /`snpiphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy/meta.yaml>`_

   


.. conda:package:: snpiphy

   |downloads_snpiphy| |docker_snpiphy|

   :versions:
      
      

      ``0.5-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends biopython: 
   :depends gubbins: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends snippy: 
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

      mamba install snpiphy

   and update with::

      mamba update snpiphy

  To create a new environment, run::

      mamba create --name myenvname snpiphy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpiphy:<tag>

   (see `snpiphy/tags`_ for valid values for ``<tag>``)


.. |downloads_snpiphy| image:: https://img.shields.io/conda/dn/bioconda/snpiphy.svg?style=flat
   :target: https://anaconda.org/bioconda/snpiphy
   :alt:   (downloads)
.. |docker_snpiphy| image:: https://quay.io/repository/biocontainers/snpiphy/status
   :target: https://quay.io/repository/biocontainers/snpiphy
.. _`snpiphy/tags`: https://quay.io/repository/biocontainers/snpiphy?tab=tags


.. raw:: html

    <script>
        var package = "snpiphy";
        var versions = ["0.5","0.3","0.3","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpiphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpiphy/README.html