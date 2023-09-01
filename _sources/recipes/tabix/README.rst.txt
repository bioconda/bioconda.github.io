:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabix'
.. highlight: bash

tabix
=====

.. conda:recipe:: tabix
   :replaces_section_title:
   :noindex:

   C library and command line tools for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :license: MIT
   :recipe: /`tabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix/meta.yaml>`_

   


.. conda:package:: tabix

   |downloads_tabix| |docker_tabix|

   :versions:
      
      

      ``1.11-0``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends htslib: ``>=1.9``
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

      mamba install tabix

   and update with::

      mamba update tabix

  To create a new environment, run::

      mamba create --name myenvname tabix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tabix:<tag>

   (see `tabix/tags`_ for valid values for ``<tag>``)


.. |downloads_tabix| image:: https://img.shields.io/conda/dn/bioconda/tabix.svg?style=flat
   :target: https://anaconda.org/bioconda/tabix
   :alt:   (downloads)
.. |docker_tabix| image:: https://quay.io/repository/biocontainers/tabix/status
   :target: https://quay.io/repository/biocontainers/tabix
.. _`tabix/tags`: https://quay.io/repository/biocontainers/tabix?tab=tags


.. raw:: html

    <script>
        var package = "tabix";
        var versions = ["1.11","0.2.6","0.2.5","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabix/README.html