:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bumbershoot'
.. highlight: bash

bumbershoot
===========

.. conda:recipe:: bumbershoot
   :replaces_section_title:
   :noindex:

   The Bumbershoot tool suite for analyzing shotgun proteomic data

   :homepage: https://proteowizard.sourceforge.net
   :license: Apache 2.0
   :recipe: /`bumbershoot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot/meta.yaml>`_

   


.. conda:package:: bumbershoot

   |downloads_bumbershoot| |docker_bumbershoot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3_0_21142_0e4f4a4-0</code>,  <code>3_0_20295_bfe5db0-0</code>,  <code>3_0_20290_13f6ea4-0</code>,  <code>3_0_20178_35b8bd1-0</code>,  <code>3_0_20175_cbf82d0-0</code>,  <code>3_0_20163_6147e44-0</code>,  <code>3_0_11579-0</code>,  <code>3_0_11392-0</code>,  <code>3_0_11391-0</code>,  </span></summary>
      

      ``3_0_21142_0e4f4a4-0``,  ``3_0_20295_bfe5db0-0``,  ``3_0_20290_13f6ea4-0``,  ``3_0_20178_35b8bd1-0``,  ``3_0_20175_cbf82d0-0``,  ``3_0_20163_6147e44-0``,  ``3_0_11579-0``,  ``3_0_11392-0``,  ``3_0_11391-0``,  ``3_0_11369-0``,  ``3_0_10246-0``,  ``3_0_10158-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
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

      mamba install bumbershoot

   and update with::

      mamba update bumbershoot

  To create a new environment, run::

      mamba create --name myenvname bumbershoot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bumbershoot:<tag>

   (see `bumbershoot/tags`_ for valid values for ``<tag>``)


.. |downloads_bumbershoot| image:: https://img.shields.io/conda/dn/bioconda/bumbershoot.svg?style=flat
   :target: https://anaconda.org/bioconda/bumbershoot
   :alt:   (downloads)
.. |docker_bumbershoot| image:: https://quay.io/repository/biocontainers/bumbershoot/status
   :target: https://quay.io/repository/biocontainers/bumbershoot
.. _`bumbershoot/tags`: https://quay.io/repository/biocontainers/bumbershoot?tab=tags


.. raw:: html

    <script>
        var package = "bumbershoot";
        var versions = ["3_0_21142_0e4f4a4","3_0_20295_bfe5db0","3_0_20290_13f6ea4","3_0_20178_35b8bd1","3_0_20175_cbf82d0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bumbershoot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bumbershoot/README.html