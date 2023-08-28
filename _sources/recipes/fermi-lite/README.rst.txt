:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi-lite'
.. highlight: bash

fermi-lite
==========

.. conda:recipe:: fermi-lite
   :replaces_section_title:
   :noindex:

   Fermi\-lite is a standalone C library as well as a command\-line tool for assembling Illumina short reads in regions from 100bp to 10 million bp in size.

   :homepage: https://github.com/lh3/fermi-lite
   :license: MIT / MIT
   :recipe: /`fermi-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi-lite/meta.yaml>`_

   


.. conda:package:: fermi-lite

   |downloads_fermi-lite| |docker_fermi-lite|

   :versions:
      
      

      ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install fermi-lite

   and update with::

      mamba update fermi-lite

  To create a new environment, run::

      mamba create --name myenvname fermi-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fermi-lite:<tag>

   (see `fermi-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi-lite| image:: https://img.shields.io/conda/dn/bioconda/fermi-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi-lite
   :alt:   (downloads)
.. |docker_fermi-lite| image:: https://quay.io/repository/biocontainers/fermi-lite/status
   :target: https://quay.io/repository/biocontainers/fermi-lite
.. _`fermi-lite/tags`: https://quay.io/repository/biocontainers/fermi-lite?tab=tags


.. raw:: html

    <script>
        var package = "fermi-lite";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi-lite/README.html