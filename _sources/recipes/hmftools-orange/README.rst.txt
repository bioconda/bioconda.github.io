:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-orange'
.. highlight: bash

hmftools-orange
===============

.. conda:recipe:: hmftools-orange
   :replaces_section_title:
   :noindex:

   ORANGE summarizes the key outputs from all algorithms in the Hartwig suite.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/orange/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-orange <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-orange>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-orange/meta.yaml>`_

   


.. conda:package:: hmftools-orange

   |downloads_hmftools-orange| |docker_hmftools-orange|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.1-0</code>,  <code>3.7.1_beta-3</code>,  </span></summary>
      

      ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.7.1_beta-3``,  ``3.7.1_beta-2``,  ``3.7.1_beta-1``,  ``3.7.1_beta-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.0.0-0``,  ``2.7.1-0``,  ``1.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8,<=21``
   :depends zlib: 
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

      mamba install hmftools-orange

   and update with::

      mamba update hmftools-orange

  To create a new environment, run::

      mamba create --name myenvname hmftools-orange

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-orange:<tag>

   (see `hmftools-orange/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-orange| image:: https://img.shields.io/conda/dn/bioconda/hmftools-orange.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-orange
   :alt:   (downloads)
.. |docker_hmftools-orange| image:: https://quay.io/repository/biocontainers/hmftools-orange/status
   :target: https://quay.io/repository/biocontainers/hmftools-orange
.. _`hmftools-orange/tags`: https://quay.io/repository/biocontainers/hmftools-orange?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-orange";
        var versions = ["4.1.2","4.1.1","4.1","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-orange/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-orange/README.html