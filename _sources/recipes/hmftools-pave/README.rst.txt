:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-pave'
.. highlight: bash

hmftools-pave
=============

.. conda:recipe:: hmftools-pave
   :replaces_section_title:
   :noindex:

   PAVE annotates SNV\/MNV\/INDEL calls with consequence on corresponding genes\, transcripts\, and proteins.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/pave
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-pave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave/meta.yaml>`_

   


.. conda:package:: hmftools-pave

   |downloads_hmftools-pave| |docker_hmftools-pave|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-0</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7.1-0</code>,  <code>1.7-0</code>,  <code>1.7_beta-2</code>,  <code>1.7_beta-1</code>,  <code>1.7_beta-0</code>,  <code>1.6-0</code>,  </span></summary>
      

      ``1.8.1-0``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.7_beta-2``,  ``1.7_beta-1``,  ``1.7_beta-0``,  ``1.6-0``,  ``1.4.1-0``

      
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

      mamba install hmftools-pave

   and update with::

      mamba update hmftools-pave

  To create a new environment, run::

      mamba create --name myenvname hmftools-pave

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-pave:<tag>

   (see `hmftools-pave/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-pave| image:: https://img.shields.io/conda/dn/bioconda/hmftools-pave.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-pave
   :alt:   (downloads)
.. |docker_hmftools-pave| image:: https://quay.io/repository/biocontainers/hmftools-pave/status
   :target: https://quay.io/repository/biocontainers/hmftools-pave
.. _`hmftools-pave/tags`: https://quay.io/repository/biocontainers/hmftools-pave?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-pave";
        var versions = ["1.8.1","1.8","1.8","1.7.1","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-pave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-pave/README.html