:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor-pro'
.. highlight: bash

msisensor-pro
=============

.. conda:recipe:: msisensor-pro
   :replaces_section_title:
   :noindex:

   Microsatellite Instability \(MSI\) detection using high\-throughput sequencing data.

   :homepage: https://github.com/xjtu-omics/msisensor-pro
   :license: Custom Licence
   :recipe: /`msisensor-pro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-pro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-pro/meta.yaml>`_

   


.. conda:package:: msisensor-pro

   |downloads_msisensor-pro| |docker_msisensor-pro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-6</code>,  <code>1.2.0-5</code>,  <code>1.2.0-4</code>,  <code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.a-1</code>,  <code>1.1.a-0</code>,  </span></summary>
      

      ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.a-1``,  ``1.1.a-0``,  ``1.0.a-8``,  ``1.0.a-7``,  ``1.0.a-3``,  ``1.0.a-2``,  ``1.0.a-1``,  ``1.0.a-0``,  ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-0``,  ``0.0.1-0``,  ``v1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends htslib: ``>=1.17,<1.18.0a0``
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

      mamba install msisensor-pro

   and update with::

      mamba update msisensor-pro

  To create a new environment, run::

      mamba create --name myenvname msisensor-pro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msisensor-pro:<tag>

   (see `msisensor-pro/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor-pro| image:: https://img.shields.io/conda/dn/bioconda/msisensor-pro.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor-pro
   :alt:   (downloads)
.. |docker_msisensor-pro| image:: https://quay.io/repository/biocontainers/msisensor-pro/status
   :target: https://quay.io/repository/biocontainers/msisensor-pro
.. _`msisensor-pro/tags`: https://quay.io/repository/biocontainers/msisensor-pro?tab=tags


.. raw:: html

    <script>
        var package = "msisensor-pro";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor-pro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor-pro/README.html