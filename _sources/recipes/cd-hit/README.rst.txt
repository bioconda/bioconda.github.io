:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit'
.. highlight: bash

cd-hit
======

.. conda:recipe:: cd-hit
   :replaces_section_title:
   :noindex:

   Clusters and compares protein or nucleotide sequences.

   :homepage: https://github.com/weizhongli/cdhit
   :documentation: https://github.com/weizhongli/cdhit/wiki
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`cd-hit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/17.3.282`, doi: :doi:`10.1093/bioinformatics/18.1.77`, biotools: :biotools:`cd-hit`, usegalaxy-eu: :usegalaxy-eu:`cd_hit`

   


.. conda:package:: cd-hit

   |downloads_cd-hit| |docker_cd-hit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.8.1-11</code>,  <code>4.8.1-10</code>,  <code>4.8.1-9</code>,  <code>4.8.1-8</code>,  <code>4.8.1-7</code>,  <code>4.8.1-6</code>,  <code>4.8.1-5</code>,  <code>4.8.1-4</code>,  <code>4.8.1-3</code>,  </span></summary>
      

      ``4.8.1-11``,  ``4.8.1-10``,  ``4.8.1-9``,  ``4.8.1-8``,  ``4.8.1-7``,  ``4.8.1-6``,  ``4.8.1-5``,  ``4.8.1-4``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``,  ``4.8.1-0``,  ``4.6.8-2``,  ``4.6.8-1``,  ``4.6.8-0``,  ``4.6.6-0``,  ``4.6.4-1``,  ``4.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cd-hit

   and update with::

      mamba update cd-hit

  To create a new environment, run::

      mamba create --name myenvname cd-hit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cd-hit:<tag>

   (see `cd-hit/tags`_ for valid values for ``<tag>``)


.. |downloads_cd-hit| image:: https://img.shields.io/conda/dn/bioconda/cd-hit.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit
   :alt:   (downloads)
.. |docker_cd-hit| image:: https://quay.io/repository/biocontainers/cd-hit/status
   :target: https://quay.io/repository/biocontainers/cd-hit
.. _`cd-hit/tags`: https://quay.io/repository/biocontainers/cd-hit?tab=tags


.. raw:: html

    <script>
        var package = "cd-hit";
        var versions = ["4.8.1","4.8.1","4.8.1","4.8.1","4.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit/README.html