:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplirust'
.. highlight: bash

amplirust
=========

.. conda:recipe:: amplirust
   :replaces_section_title:
   :noindex:

   In\-silico PCR primer matching and product extraction tool

   :homepage: https://github.com/erdikilic/amplirust
   :license: MIT / MIT
   :recipe: /`amplirust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplirust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplirust/meta.yaml>`_

   Amplirust is a high\-performance in\-silico PCR tool written in Rust that
   performs primer matching and PCR product extraction from FASTA sequences.
   Features include SIMD\-accelerated approximate matching\, IUPAC ambiguity
   code support\, circular genome handling\, and multi\-threaded processing.



.. conda:package:: amplirust

   |downloads_amplirust| |docker_amplirust|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install amplirust

   and update with::

      mamba update amplirust

  To create a new environment, run::

      mamba create --name myenvname amplirust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amplirust:<tag>

   (see `amplirust/tags`_ for valid values for ``<tag>``)


.. |downloads_amplirust| image:: https://img.shields.io/conda/dn/bioconda/amplirust.svg?style=flat
   :target: https://anaconda.org/bioconda/amplirust
   :alt:   (downloads)
.. |docker_amplirust| image:: https://quay.io/repository/biocontainers/amplirust/status
   :target: https://quay.io/repository/biocontainers/amplirust
.. _`amplirust/tags`: https://quay.io/repository/biocontainers/amplirust?tab=tags


.. raw:: html

    <script>
        var package = "amplirust";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplirust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplirust/README.html