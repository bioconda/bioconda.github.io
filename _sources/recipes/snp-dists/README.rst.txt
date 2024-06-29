:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-dists'
.. highlight: bash

snp-dists
=========

.. conda:recipe:: snp-dists
   :replaces_section_title:
   :noindex:

   Convert a FASTA alignment to SNP distance matrix

   :homepage: https://github.com/tseemann/snp-dists
   :license: GPL3
   :recipe: /`snp-dists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-dists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-dists/meta.yaml>`_

   


.. conda:package:: snp-dists

   |downloads_snp-dists| |docker_snp-dists|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-4</code>,  <code>0.8.2-3</code>,  <code>0.8.2-2</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.8.2-4``,  ``0.8.2-3``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install snp-dists

   and update with::

      mamba update snp-dists

  To create a new environment, run::

      mamba create --name myenvname snp-dists

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp-dists:<tag>

   (see `snp-dists/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-dists| image:: https://img.shields.io/conda/dn/bioconda/snp-dists.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-dists
   :alt:   (downloads)
.. |docker_snp-dists| image:: https://quay.io/repository/biocontainers/snp-dists/status
   :target: https://quay.io/repository/biocontainers/snp-dists
.. _`snp-dists/tags`: https://quay.io/repository/biocontainers/snp-dists?tab=tags


.. raw:: html

    <script>
        var package = "snp-dists";
        var versions = ["0.8.2","0.8.2","0.8.2","0.8.2","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-dists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-dists/README.html