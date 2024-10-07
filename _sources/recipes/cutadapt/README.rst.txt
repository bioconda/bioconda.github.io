:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutadapt'
.. highlight: bash

cutadapt
========

.. conda:recipe:: cutadapt
   :replaces_section_title:
   :noindex:

   Trim adapters from high\-throughput sequencing reads

   :homepage: https://cutadapt.readthedocs.io/
   :developer docs: https://github.com/marcelm/cutadapt
   :license: MIT / MIT
   :recipe: /`cutadapt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutadapt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutadapt/meta.yaml>`_
   :links: biotools: :biotools:`cutadapt`, doi: :doi:`10.14806/ej.17.1.200`, usegalaxy-eu: :usegalaxy-eu:`cutadapt`

   


.. conda:package:: cutadapt

   |downloads_cutadapt| |docker_cutadapt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.9-2</code>,  <code>4.9-1</code>,  <code>4.9-0</code>,  <code>4.8-1</code>,  <code>4.8-0</code>,  <code>4.7-1</code>,  <code>4.7-0</code>,  <code>4.6-2</code>,  <code>4.6-1</code>,  </span></summary>
      

      ``4.9-2``,  ``4.9-1``,  ``4.9-0``,  ``4.8-1``,  ``4.8-0``,  ``4.7-1``,  ``4.7-0``,  ``4.6-2``,  ``4.6-1``,  ``4.6-0``,  ``4.5-0``,  ``4.4-1``,  ``4.4-0``,  ``4.3-0``,  ``4.2-0``,  ``4.1-1``,  ``4.1-0``,  ``4.0-0``,  ``3.7-1``,  ``3.7-0``,  ``3.6-0``,  ``3.5-1``,  ``3.5-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``,  ``2.10-1``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.18-1``,  ``1.18-0``,  ``1.17-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``,  ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``,  ``1.10-0``,  ``1.9.1-0``,  ``1.8.3-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends dnaio: ``>=1.2.2``
   :depends libgcc: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xopen: ``>=1.6.0``
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

      mamba install cutadapt

   and update with::

      mamba update cutadapt

  To create a new environment, run::

      mamba create --name myenvname cutadapt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cutadapt:<tag>

   (see `cutadapt/tags`_ for valid values for ``<tag>``)


.. |downloads_cutadapt| image:: https://img.shields.io/conda/dn/bioconda/cutadapt.svg?style=flat
   :target: https://anaconda.org/bioconda/cutadapt
   :alt:   (downloads)
.. |docker_cutadapt| image:: https://quay.io/repository/biocontainers/cutadapt/status
   :target: https://quay.io/repository/biocontainers/cutadapt
.. _`cutadapt/tags`: https://quay.io/repository/biocontainers/cutadapt?tab=tags


.. raw:: html

    <script>
        var package = "cutadapt";
        var versions = ["4.9","4.9","4.9","4.8","4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutadapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutadapt/README.html