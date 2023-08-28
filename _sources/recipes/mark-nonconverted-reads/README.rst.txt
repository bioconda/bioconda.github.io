:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mark-nonconverted-reads'
.. highlight: bash

mark-nonconverted-reads
=======================

.. conda:recipe:: mark-nonconverted-reads
   :replaces_section_title:
   :noindex:

   A simple filter to mark potential nonconverted reads from methylation experiments

   :homepage: https://github.com/nebiolabs/mark-nonconverted-reads
   :license: AGPL-3.0
   :recipe: /`mark-nonconverted-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads/meta.yaml>`_

   


.. conda:package:: mark-nonconverted-reads

   |downloads_mark-nonconverted-reads| |docker_mark-nonconverted-reads|

   :versions:
      
      

      ``1.2-0``,  ``1.1-1``,  ``1.0-0``

      

   
   :depends pysam: 
   :depends python: ``>=3``
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

      mamba install mark-nonconverted-reads

   and update with::

      mamba update mark-nonconverted-reads

  To create a new environment, run::

      mamba create --name myenvname mark-nonconverted-reads

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mark-nonconverted-reads:<tag>

   (see `mark-nonconverted-reads/tags`_ for valid values for ``<tag>``)


.. |downloads_mark-nonconverted-reads| image:: https://img.shields.io/conda/dn/bioconda/mark-nonconverted-reads.svg?style=flat
   :target: https://anaconda.org/bioconda/mark-nonconverted-reads
   :alt:   (downloads)
.. |docker_mark-nonconverted-reads| image:: https://quay.io/repository/biocontainers/mark-nonconverted-reads/status
   :target: https://quay.io/repository/biocontainers/mark-nonconverted-reads
.. _`mark-nonconverted-reads/tags`: https://quay.io/repository/biocontainers/mark-nonconverted-reads?tab=tags


.. raw:: html

    <script>
        var package = "mark-nonconverted-reads";
        var versions = ["1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html