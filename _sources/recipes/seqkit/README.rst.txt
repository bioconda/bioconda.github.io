:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqkit'
.. highlight: bash

seqkit
======

.. conda:recipe:: seqkit
   :replaces_section_title:
   :noindex:

   A cross\-platform and ultrafast toolkit for FASTA\/Q file manipulation.

   :homepage: https://github.com/shenwei356/seqkit
   :documentation: https://bioinf.shenwei.me/seqkit
   
   :license: MIT / MIT
   :recipe: /`seqkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqkit/meta.yaml>`_
   :links: biotools: :biotools:`seqkit`, usegalaxy-eu: :usegalaxy-eu:`seqkit_head`, usegalaxy-eu: :usegalaxy-eu:`seqkit_stats`, usegalaxy-eu: :usegalaxy-eu:`seqkit_fx2tab`, usegalaxy-eu: :usegalaxy-eu:`seqkit_locate`, usegalaxy-eu: :usegalaxy-eu:`seqkit_translate`, usegalaxy-eu: :usegalaxy-eu:`seqkit_sort`, doi: :doi:`10.1371/journal.pone.0163962`

   


.. conda:package:: seqkit

   |downloads_seqkit| |docker_seqkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.0-0</code>,  <code>2.10.1-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.9.0-0</code>,  <code>2.8.2-1</code>,  <code>2.8.2-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-1</code>,  </span></summary>
      

      ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.1-1``,  ``0.10.0-1``,  ``0.9.3-1``,  ``0.9.2-2``,  ``0.9.1-2``,  ``0.9.0-2``,  ``0.8.1-2``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.3.4.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install seqkit

   and update with::

      mamba update seqkit

  To create a new environment, run::

      mamba create --name myenvname seqkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqkit:<tag>

   (see `seqkit/tags`_ for valid values for ``<tag>``)


.. |downloads_seqkit| image:: https://img.shields.io/conda/dn/bioconda/seqkit.svg?style=flat
   :target: https://anaconda.org/bioconda/seqkit
   :alt:   (downloads)
.. |docker_seqkit| image:: https://quay.io/repository/biocontainers/seqkit/status
   :target: https://quay.io/repository/biocontainers/seqkit
.. _`seqkit/tags`: https://quay.io/repository/biocontainers/seqkit?tab=tags


.. raw:: html

    <script>
        var package = "seqkit";
        var versions = ["2.11.0","2.10.1","2.10.0","2.10.0","2.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqkit/README.html