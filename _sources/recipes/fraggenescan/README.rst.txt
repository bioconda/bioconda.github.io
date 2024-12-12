:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fraggenescan'
.. highlight: bash

fraggenescan
============

.. conda:recipe:: fraggenescan
   :replaces_section_title:
   :noindex:

   FragGeneScan is an application for finding \(fragmented\) genes in short reads.

   :homepage: https://sourceforge.net/projects/fraggenescan/
   :license: BSD
   :recipe: /`fraggenescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkq747`, biotools: :biotools:`fraggenescan`

   FragGeneScan is an application for finding \(fragmented\) genes in short
   reads. It can also be applied to predict prokaryotic genes in incomplete
   assemblies or complete genomes.



.. conda:package:: fraggenescan

   |downloads_fraggenescan| |docker_fraggenescan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.31-8</code>,  <code>1.31-7</code>,  <code>1.31-6</code>,  <code>1.31-5</code>,  <code>1.31-4</code>,  <code>1.31-3</code>,  <code>1.31-2</code>,  <code>1.31-1</code>,  <code>1.31-0</code>,  </span></summary>
      

      ``1.31-8``,  ``1.31-7``,  ``1.31-6``,  ``1.31-5``,  ``1.31-4``,  ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``,  ``1.30-2``,  ``1.30-1``,  ``1.30-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: 
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

      mamba install fraggenescan

   and update with::

      mamba update fraggenescan

  To create a new environment, run::

      mamba create --name myenvname fraggenescan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fraggenescan:<tag>

   (see `fraggenescan/tags`_ for valid values for ``<tag>``)


.. |downloads_fraggenescan| image:: https://img.shields.io/conda/dn/bioconda/fraggenescan.svg?style=flat
   :target: https://anaconda.org/bioconda/fraggenescan
   :alt:   (downloads)
.. |docker_fraggenescan| image:: https://quay.io/repository/biocontainers/fraggenescan/status
   :target: https://quay.io/repository/biocontainers/fraggenescan
.. _`fraggenescan/tags`: https://quay.io/repository/biocontainers/fraggenescan?tab=tags


.. raw:: html

    <script>
        var package = "fraggenescan";
        var versions = ["1.31","1.31","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraggenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraggenescan/README.html