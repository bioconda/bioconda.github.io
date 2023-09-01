:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-join'
.. highlight: bash

fastq-join
==========

.. conda:recipe:: fastq-join
   :replaces_section_title:
   :noindex:

   Similar to audy\'s stitch program\, but in C\, more efficient and supports some automatic benchmarking and tuning. It uses the same \"squared distance for anchored alignment\" as other tools.

   :homepage: https://github.com/brwnj/fastq-join
   :license: MIT
   :recipe: /`fastq-join <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-join>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-join/meta.yaml>`_

   


.. conda:package:: fastq-join

   |downloads_fastq-join| |docker_fastq-join|

   :versions:
      
      

      ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fastq-join

   and update with::

      mamba update fastq-join

  To create a new environment, run::

      mamba create --name myenvname fastq-join

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-join:<tag>

   (see `fastq-join/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-join| image:: https://img.shields.io/conda/dn/bioconda/fastq-join.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-join
   :alt:   (downloads)
.. |docker_fastq-join| image:: https://quay.io/repository/biocontainers/fastq-join/status
   :target: https://quay.io/repository/biocontainers/fastq-join
.. _`fastq-join/tags`: https://quay.io/repository/biocontainers/fastq-join?tab=tags


.. raw:: html

    <script>
        var package = "fastq-join";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-join/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-join/README.html