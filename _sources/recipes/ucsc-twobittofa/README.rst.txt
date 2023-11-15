:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-twobittofa'
.. highlight: bash

ucsc-twobittofa
===============

.. conda:recipe:: ucsc-twobittofa
   :replaces_section_title:
   :noindex:

   Convert all or part of .2bit file to fasta

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobittofa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa/meta.yaml>`_

   


.. conda:package:: ucsc-twobittofa

   |downloads_ucsc-twobittofa| |docker_ucsc-twobittofa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>455-0</code>,  <code>447-0</code>,  <code>377-4</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-4</code>,  </span></summary>
      

      ``455-0``,  ``447-0``,  ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-4``,  ``357-3``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: 
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: 
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=3.1.4,<4.0a0``
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

      mamba install ucsc-twobittofa

   and update with::

      mamba update ucsc-twobittofa

  To create a new environment, run::

      mamba create --name myenvname ucsc-twobittofa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-twobittofa:<tag>

   (see `ucsc-twobittofa/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-twobittofa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobittofa.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-twobittofa
   :alt:   (downloads)
.. |docker_ucsc-twobittofa| image:: https://quay.io/repository/biocontainers/ucsc-twobittofa/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobittofa
.. _`ucsc-twobittofa/tags`: https://quay.io/repository/biocontainers/ucsc-twobittofa?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-twobittofa";
        var versions = ["455","447","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobittofa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobittofa/README.html