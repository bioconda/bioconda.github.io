:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqmetrics'
.. highlight: bash

fastqmetrics
============

.. conda:recipe:: fastqmetrics
   :replaces_section_title:
   :noindex:

   Extract metrics from a fastq file\, streaming

   :homepage: https://github.com/wdecoster/fastqmetrics
   :license: MIT / MIT License
   :recipe: /`fastqmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics/meta.yaml>`_

   


.. conda:package:: fastqmetrics

   |downloads_fastqmetrics| |docker_fastqmetrics|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends nanoget: ``>=0.14.0,<1.8.0``
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

      mamba install fastqmetrics

   and update with::

      mamba update fastqmetrics

  To create a new environment, run::

      mamba create --name myenvname fastqmetrics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqmetrics:<tag>

   (see `fastqmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqmetrics| image:: https://img.shields.io/conda/dn/bioconda/fastqmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqmetrics
   :alt:   (downloads)
.. |docker_fastqmetrics| image:: https://quay.io/repository/biocontainers/fastqmetrics/status
   :target: https://quay.io/repository/biocontainers/fastqmetrics
.. _`fastqmetrics/tags`: https://quay.io/repository/biocontainers/fastqmetrics?tab=tags


.. raw:: html

    <script>
        var package = "fastqmetrics";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqmetrics/README.html