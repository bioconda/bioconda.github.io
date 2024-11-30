:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umitools'
.. highlight: bash

umitools
========

.. conda:recipe:: umitools
   :replaces_section_title:
   :noindex:

   A toolset for handling sequencing data with unique molecular identifiers \(UMIs\)

   :homepage: https://github.com/weng-lab/umitools
   :license: GPL3
   :recipe: /`umitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umitools/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-018-4933-1`

   


.. conda:package:: umitools

   |downloads_umitools| |docker_umitools|

   :versions:
      
      

      ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends editdistance: 
   :depends networkx: 
   :depends pysam: 
   :depends python: ``>=3``
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

      mamba install umitools

   and update with::

      mamba update umitools

  To create a new environment, run::

      mamba create --name myenvname umitools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umitools:<tag>

   (see `umitools/tags`_ for valid values for ``<tag>``)


.. |downloads_umitools| image:: https://img.shields.io/conda/dn/bioconda/umitools.svg?style=flat
   :target: https://anaconda.org/bioconda/umitools
   :alt:   (downloads)
.. |docker_umitools| image:: https://quay.io/repository/biocontainers/umitools/status
   :target: https://quay.io/repository/biocontainers/umitools
.. _`umitools/tags`: https://quay.io/repository/biocontainers/umitools?tab=tags


.. raw:: html

    <script>
        var package = "umitools";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umitools/README.html