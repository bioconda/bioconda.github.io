:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-anonymous'
.. highlight: bash

fastq-anonymous
===============

.. conda:recipe:: fastq-anonymous
   :replaces_section_title:
   :noindex:

   Change the sequence of a fastq file to enable sharing of confidential information\, for troubleshooting￼ of tools.

   :homepage: https://github.com/wdecoster/fastq-anonymous
   :license: MIT / MIT License
   :recipe: /`fastq-anonymous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous/meta.yaml>`_

   


.. conda:package:: fastq-anonymous

   |downloads_fastq-anonymous| |docker_fastq-anonymous|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends biopython: 
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

      mamba install fastq-anonymous

   and update with::

      mamba update fastq-anonymous

  To create a new environment, run::

      mamba create --name myenvname fastq-anonymous

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-anonymous:<tag>

   (see `fastq-anonymous/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-anonymous| image:: https://img.shields.io/conda/dn/bioconda/fastq-anonymous.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-anonymous
   :alt:   (downloads)
.. |docker_fastq-anonymous| image:: https://quay.io/repository/biocontainers/fastq-anonymous/status
   :target: https://quay.io/repository/biocontainers/fastq-anonymous
.. _`fastq-anonymous/tags`: https://quay.io/repository/biocontainers/fastq-anonymous?tab=tags


.. raw:: html

    <script>
        var package = "fastq-anonymous";
        var versions = ["1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-anonymous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-anonymous/README.html