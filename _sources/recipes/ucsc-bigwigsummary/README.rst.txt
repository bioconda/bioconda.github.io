:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigwigsummary'
.. highlight: bash

ucsc-bigwigsummary
==================

.. conda:recipe:: ucsc-bigwigsummary
   :replaces_section_title:
   :noindex:

   Extract summary information from a bigWig file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigsummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigsummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigsummary/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigsummary

   |downloads_ucsc-bigwigsummary| |docker_ucsc-bigwigsummary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>448-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  <code>357-0</code>,  </span></summary>
      

      ``448-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: 
   :depends openssl: ``>=3.1.1,<4.0a0``
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

      mamba install ucsc-bigwigsummary

   and update with::

      mamba update ucsc-bigwigsummary

  To create a new environment, run::

      mamba create --name myenvname ucsc-bigwigsummary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigwigsummary:<tag>

   (see `ucsc-bigwigsummary/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigwigsummary| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigsummary.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bigwigsummary
   :alt:   (downloads)
.. |docker_ucsc-bigwigsummary| image:: https://quay.io/repository/biocontainers/ucsc-bigwigsummary/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigsummary
.. _`ucsc-bigwigsummary/tags`: https://quay.io/repository/biocontainers/ucsc-bigwigsummary?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-bigwigsummary";
        var versions = ["448","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigsummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigsummary/README.html