:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-interop'
.. highlight: bash

illumina-interop
================

.. conda:recipe:: illumina-interop
   :replaces_section_title:
   :noindex:

   The Illumina InterOp libraries are a set of common routines used for reading and writing InterOp metric files. These metric files are binary files produced during a run providing detailed statistics about a run. In a few cases\, the metric files are produced after a run during secondary analysis \(index metrics\) or for faster display of a subset of the original data \(collapsed quality scores\).

   :homepage: http://illumina.github.io/interop/index.html
   :developer docs: https://github.com/Illumina/interop
   :license: GPL / GPL-3.0-only
   :recipe: /`illumina-interop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-interop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-interop/meta.yaml>`_

   


.. conda:package:: illumina-interop

   |downloads_illumina-interop| |docker_illumina-interop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.28-0``,  ``1.1.27-1``,  ``1.1.27-0``,  ``1.1.25-1``,  ``1.1.25-0``,  ``1.1.24-0``,  ``1.1.23-1``,  ``1.1.23-0``,  ``1.1.22-0``,  ``1.1.21-1``,  ``1.1.21-0``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.18-0``,  ``1.1.16-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.4-3``,  ``1.1.4-0``,  ``1.0.25-1``,  ``1.0.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install illumina-interop

   and update with::

      mamba update illumina-interop

  To create a new environment, run::

      mamba create --name myenvname illumina-interop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/illumina-interop:<tag>

   (see `illumina-interop/tags`_ for valid values for ``<tag>``)


.. |downloads_illumina-interop| image:: https://img.shields.io/conda/dn/bioconda/illumina-interop.svg?style=flat
   :target: https://anaconda.org/bioconda/illumina-interop
   :alt:   (downloads)
.. |docker_illumina-interop| image:: https://quay.io/repository/biocontainers/illumina-interop/status
   :target: https://quay.io/repository/biocontainers/illumina-interop
.. _`illumina-interop/tags`: https://quay.io/repository/biocontainers/illumina-interop?tab=tags


.. raw:: html

    <script>
        var package = "illumina-interop";
        var versions = ["1.8.0","1.7.0","1.5.0","1.4.0","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-interop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-interop/README.html