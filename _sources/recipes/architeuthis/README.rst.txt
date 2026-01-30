:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'architeuthis'
.. highlight: bash

architeuthis
============

.. conda:recipe:: architeuthis
   :replaces_section_title:
   :noindex:

   Tool to analyze and summarize data for Kraken.

   :homepage: https://github.com/cdiener/architeuthis
   :developer docs: https://github.com/cdiener/architeuthis.git
   :license: Apache-2.0
   :recipe: /`architeuthis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/architeuthis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/architeuthis/meta.yaml>`_

   architeuthis is a fast standalone command to supplement the Kraken suite of software
   tools such like Kraken2\, KrakenUniq\, and Bracken. I saw myself repeatedly rewriting
   the same code in my pipelines when dealing with Kraken output\, like merging files or
   maninpulating lineage annotations. It also adds some functionality to dive deeper
   into the individual k\-mer classifications for reads.



.. conda:package:: architeuthis

   |downloads_architeuthis| |docker_architeuthis|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends taxonkit: ``>=0.16.0``
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

      mamba install architeuthis

   and update with::

      mamba update architeuthis

  To create a new environment, run::

      mamba create --name myenvname architeuthis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/architeuthis:<tag>

   (see `architeuthis/tags`_ for valid values for ``<tag>``)


.. |downloads_architeuthis| image:: https://img.shields.io/conda/dn/bioconda/architeuthis.svg?style=flat
   :target: https://anaconda.org/bioconda/architeuthis
   :alt:   (downloads)
.. |docker_architeuthis| image:: https://quay.io/repository/biocontainers/architeuthis/status
   :target: https://quay.io/repository/biocontainers/architeuthis
.. _`architeuthis/tags`: https://quay.io/repository/biocontainers/architeuthis?tab=tags


.. raw:: html

    <script>
        var package = "architeuthis";
        var versions = ["0.5.0","0.4.0","0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/architeuthis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/architeuthis/README.html