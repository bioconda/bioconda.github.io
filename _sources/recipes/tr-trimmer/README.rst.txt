:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tr-trimmer'
.. highlight: bash

tr-trimmer
==========

.. conda:recipe:: tr-trimmer
   :replaces_section_title:
   :noindex:

   Identify and trim terminal repeats from sequences in FASTA files

   :homepage: https://github.com/apcamargo/tr-trimmer
   :license: MIT
   :recipe: /`tr-trimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tr-trimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tr-trimmer/meta.yaml>`_

   


.. conda:package:: tr-trimmer

   |downloads_tr-trimmer| |docker_tr-trimmer|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tr-trimmer

   and update with::

      mamba update tr-trimmer

  To create a new environment, run::

      mamba create --name myenvname tr-trimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tr-trimmer:<tag>

   (see `tr-trimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_tr-trimmer| image:: https://img.shields.io/conda/dn/bioconda/tr-trimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/tr-trimmer
   :alt:   (downloads)
.. |docker_tr-trimmer| image:: https://quay.io/repository/biocontainers/tr-trimmer/status
   :target: https://quay.io/repository/biocontainers/tr-trimmer
.. _`tr-trimmer/tags`: https://quay.io/repository/biocontainers/tr-trimmer?tab=tags


.. raw:: html

    <script>
        var package = "tr-trimmer";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tr-trimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tr-trimmer/README.html