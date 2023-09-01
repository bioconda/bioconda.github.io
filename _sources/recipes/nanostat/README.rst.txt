:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanostat'
.. highlight: bash

nanostat
========

.. conda:recipe:: nanostat
   :replaces_section_title:
   :noindex:

   Calculate statistics for Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/nanostat
   :license: MIT / MIT License
   :recipe: /`nanostat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat/meta.yaml>`_

   


.. conda:package:: nanostat

   |downloads_nanostat| |docker_nanostat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.8.1-0``,  ``0.7.1-0``,  ``0.2.0-0``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends nanoget: ``>=0.15.0``
   :depends nanomath: ``>=0.19.0``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3``
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

      mamba install nanostat

   and update with::

      mamba update nanostat

  To create a new environment, run::

      mamba create --name myenvname nanostat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanostat:<tag>

   (see `nanostat/tags`_ for valid values for ``<tag>``)


.. |downloads_nanostat| image:: https://img.shields.io/conda/dn/bioconda/nanostat.svg?style=flat
   :target: https://anaconda.org/bioconda/nanostat
   :alt:   (downloads)
.. |docker_nanostat| image:: https://quay.io/repository/biocontainers/nanostat/status
   :target: https://quay.io/repository/biocontainers/nanostat
.. _`nanostat/tags`: https://quay.io/repository/biocontainers/nanostat?tab=tags


.. raw:: html

    <script>
        var package = "nanostat";
        var versions = ["1.6.0","1.5.0","1.4.0","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanostat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanostat/README.html