:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqstr'
.. highlight: bash

seqstr
======

.. conda:recipe:: seqstr
   :replaces_section_title:
   :noindex:

   Lightweight tool to compile simple string input into long genomic sequences

   :homepage: https://github.com/jzhoulab/Seqstr
   :license: MIT
   :recipe: /`seqstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstr/meta.yaml>`_

   Seqstr is designed to provide a concise and flexible way to specify long genomic sequences that can be used for downstream analysis. For example\, it can be used by web servers to avoid transferring long genomic sequences. Seqstr is also a format specification\, which can be implemented in different languages. We also provide a test suite for verifying an implementation.



.. conda:package:: seqstr

   |downloads_seqstr| |docker_seqstr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends pyfaidx: ``>=0.6.3``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.25.0``
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

      mamba install seqstr

   and update with::

      mamba update seqstr

  To create a new environment, run::

      mamba create --name myenvname seqstr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqstr:<tag>

   (see `seqstr/tags`_ for valid values for ``<tag>``)


.. |downloads_seqstr| image:: https://img.shields.io/conda/dn/bioconda/seqstr.svg?style=flat
   :target: https://anaconda.org/bioconda/seqstr
   :alt:   (downloads)
.. |docker_seqstr| image:: https://quay.io/repository/biocontainers/seqstr/status
   :target: https://quay.io/repository/biocontainers/seqstr
.. _`seqstr/tags`: https://quay.io/repository/biocontainers/seqstr?tab=tags


.. raw:: html

    <script>
        var package = "seqstr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqstr/README.html