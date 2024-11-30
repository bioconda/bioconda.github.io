:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krocus'
.. highlight: bash

krocus
======

.. conda:recipe:: krocus
   :replaces_section_title:
   :noindex:

   krocus performs multi\-locus sequence typing from uncorrected long reads.

   :homepage: https://github.com/andrewjpage/krocus
   :license: GPL / GPL-3.0
   :recipe: /`krocus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus/meta.yaml>`_

   Krocus can predict a sequence type directly from uncorrected long reads\, 
   and was designed to consume read data as it is produced\, providing results 
   in minutes.



.. conda:package:: krocus

   |downloads_krocus| |docker_krocus|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends biopython: ``>=1.68``
   :depends pyfastaq: ``>=3.14.0``
   :depends python: ``>=3``
   :depends setuptools: 
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

      mamba install krocus

   and update with::

      mamba update krocus

  To create a new environment, run::

      mamba create --name myenvname krocus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krocus:<tag>

   (see `krocus/tags`_ for valid values for ``<tag>``)


.. |downloads_krocus| image:: https://img.shields.io/conda/dn/bioconda/krocus.svg?style=flat
   :target: https://anaconda.org/bioconda/krocus
   :alt:   (downloads)
.. |docker_krocus| image:: https://quay.io/repository/biocontainers/krocus/status
   :target: https://quay.io/repository/biocontainers/krocus
.. _`krocus/tags`: https://quay.io/repository/biocontainers/krocus?tab=tags


.. raw:: html

    <script>
        var package = "krocus";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krocus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krocus/README.html