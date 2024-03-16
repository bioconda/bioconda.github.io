:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3-illumina'
.. highlight: bash

clair3-illumina
===============

.. conda:recipe:: clair3-illumina
   :replaces_section_title:
   :noindex:

   Clair3 with libraries to support variant calling using Illumina short\-reads. Version in sync with Clair3.

   :homepage: https://github.com/HKU-BAL/Clair3
   :license: BSD-3-Clause
   :recipe: /`clair3-illumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina/meta.yaml>`_

   


.. conda:package:: clair3-illumina

   |downloads_clair3-illumina| |docker_clair3-illumina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.5-1``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends clair3: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install clair3-illumina

   and update with::

      mamba update clair3-illumina

  To create a new environment, run::

      mamba create --name myenvname clair3-illumina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clair3-illumina:<tag>

   (see `clair3-illumina/tags`_ for valid values for ``<tag>``)


.. |downloads_clair3-illumina| image:: https://img.shields.io/conda/dn/bioconda/clair3-illumina.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3-illumina
   :alt:   (downloads)
.. |docker_clair3-illumina| image:: https://quay.io/repository/biocontainers/clair3-illumina/status
   :target: https://quay.io/repository/biocontainers/clair3-illumina
.. _`clair3-illumina/tags`: https://quay.io/repository/biocontainers/clair3-illumina?tab=tags


.. raw:: html

    <script>
        var package = "clair3-illumina";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3-illumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3-illumina/README.html