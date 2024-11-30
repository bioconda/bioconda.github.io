:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextclade'
.. highlight: bash

nextclade
=========

.. conda:recipe:: nextclade
   :replaces_section_title:
   :noindex:

   Viral genome alignment\, mutation calling\, clade assignment\, quality checks and phylogenetic placement

   :homepage: https://github.com/nextstrain/nextclade
   :documentation: https://docs.nextstrain.org/projects/nextclade/en/stable/
   
   :license: MIT / MIT
   :recipe: /`nextclade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.03773`

   


.. conda:package:: nextclade

   |downloads_nextclade| |docker_nextclade|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.1-0</code>,  <code>3.9.0-0</code>,  <code>3.8.2-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-2</code>,  <code>3.8.0-1</code>,  <code>3.8.0-0</code>,  <code>3.7.4-0</code>,  <code>3.7.3-0</code>,  </span></summary>
      

      ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-2``,  ``3.8.0-1``,  ``3.8.0-0``,  ``3.7.4-0``,  ``3.7.3-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.1-2``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.9.1-0``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.11.0-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      
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

      mamba install nextclade

   and update with::

      mamba update nextclade

  To create a new environment, run::

      mamba create --name myenvname nextclade

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextclade:<tag>

   (see `nextclade/tags`_ for valid values for ``<tag>``)


.. |downloads_nextclade| image:: https://img.shields.io/conda/dn/bioconda/nextclade.svg?style=flat
   :target: https://anaconda.org/bioconda/nextclade
   :alt:   (downloads)
.. |docker_nextclade| image:: https://quay.io/repository/biocontainers/nextclade/status
   :target: https://quay.io/repository/biocontainers/nextclade
.. _`nextclade/tags`: https://quay.io/repository/biocontainers/nextclade?tab=tags


.. raw:: html

    <script>
        var package = "nextclade";
        var versions = ["3.9.1","3.9.0","3.8.2","3.8.1","3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextclade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextclade/README.html