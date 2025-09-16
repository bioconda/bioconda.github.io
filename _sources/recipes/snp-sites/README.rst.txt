:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-sites'
.. highlight: bash

snp-sites
=========

.. conda:recipe:: snp-sites
   :replaces_section_title:
   :noindex:

   Finds SNP sites from a multi\-FASTA alignment file.

   :homepage: https://github.com/sanger-pathogens/snp-sites
   :documentation: https://sanger-pathogens.github.io/snp-sites
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snp-sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites/meta.yaml>`_

   


.. conda:package:: snp-sites

   |downloads_snp-sites| |docker_snp-sites|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-7</code>,  <code>2.5.1-6</code>,  <code>2.5.1-5</code>,  <code>2.5.1-4</code>,  <code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.4.1-1</code>,  </span></summary>
      

      ``2.5.1-7``,  ``2.5.1-6``,  ``2.5.1-5``,  ``2.5.1-4``,  ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-3``,  ``2.4.0-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install snp-sites

   and update with::

      mamba update snp-sites

  To create a new environment, run::

      mamba create --name myenvname snp-sites

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp-sites:<tag>

   (see `snp-sites/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-sites| image:: https://img.shields.io/conda/dn/bioconda/snp-sites.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-sites
   :alt:   (downloads)
.. |docker_snp-sites| image:: https://quay.io/repository/biocontainers/snp-sites/status
   :target: https://quay.io/repository/biocontainers/snp-sites
.. _`snp-sites/tags`: https://quay.io/repository/biocontainers/snp-sites?tab=tags


.. raw:: html

    <script>
        var package = "snp-sites";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-sites/README.html