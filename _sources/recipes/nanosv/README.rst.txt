:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosv'
.. highlight: bash

nanosv
======

.. conda:recipe:: nanosv
   :replaces_section_title:
   :noindex:

   Structural variation detection tool for Oxford Nanopore data.

   :homepage: https://github.com/mroosmalen/nanosv
   :license: MIT / MIT License
   :recipe: /`nanosv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-017-01343-4`

   


.. conda:package:: nanosv

   |downloads_nanosv| |docker_nanosv|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-1``,  ``1.1.2-1``,  ``1.1.2-0``,  ``0.0.1-0``

      

   
   :depends pysam: 
   :depends python: ``>3``
   :depends pyvcf: 
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

      mamba install nanosv

   and update with::

      mamba update nanosv

  To create a new environment, run::

      mamba create --name myenvname nanosv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanosv:<tag>

   (see `nanosv/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosv| image:: https://img.shields.io/conda/dn/bioconda/nanosv.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosv
   :alt:   (downloads)
.. |docker_nanosv| image:: https://quay.io/repository/biocontainers/nanosv/status
   :target: https://quay.io/repository/biocontainers/nanosv
.. _`nanosv/tags`: https://quay.io/repository/biocontainers/nanosv?tab=tags


.. raw:: html

    <script>
        var package = "nanosv";
        var versions = ["1.2.4","1.2.3","1.2.2","1.2.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosv/README.html