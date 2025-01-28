:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-amrfinderplus'
.. highlight: bash

ncbi-amrfinderplus
==================

.. conda:recipe:: ncbi-amrfinderplus
   :replaces_section_title:
   :noindex:

   AMRFinderPlus finds antimicrobial resistance and other genes in protein or nucleotide sequences.

   :homepage: https://github.com/ncbi/amr
   :documentation: https://github.com/ncbi/amr/wiki
   
   :license: Public Domain
   :recipe: /`ncbi-amrfinderplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-021-91456-0`

   This software and the accompanying database are designed to
   find acquired antimicrobial resistance genes in bacterial protein or
   nucleotide sequences as well as known point mutations for several taxa. With
   AMRFinderPlus we have added select members of additional classes of genes
   such as virulence factors\, biocide\, heat\, acid\, and metal resistance genes.



.. conda:package:: ncbi-amrfinderplus

   |downloads_ncbi-amrfinderplus| |docker_ncbi-amrfinderplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.15-0</code>,  <code>4.0.3-1</code>,  <code>4.0.3-0</code>,  <code>3.12.8-0</code>,  <code>3.11.26-0</code>,  <code>3.11.20-0</code>,  <code>3.11.18-0</code>,  <code>3.11.17-0</code>,  <code>3.11.14-1</code>,  </span></summary>
      

      ``4.0.15-0``,  ``4.0.3-1``,  ``4.0.3-0``,  ``3.12.8-0``,  ``3.11.26-0``,  ``3.11.20-0``,  ``3.11.18-0``,  ``3.11.17-0``,  ``3.11.14-1``,  ``3.11.14-0``,  ``3.11.11-1``,  ``3.11.11-0``,  ``3.11.4-0``,  ``3.11.2-0``,  ``3.10.45-0``,  ``3.10.42-0``,  ``3.10.40-1``,  ``3.10.40-0``,  ``3.10.36-1``,  ``3.10.36-0``,  ``3.10.30-1``,  ``3.10.30-0``,  ``3.10.24-0``,  ``3.10.23-1``,  ``3.10.23-0``,  ``3.10.21-0``,  ``3.10.20-0``,  ``3.10.18-0``,  ``3.10.16-0``,  ``3.10.14-0``,  ``3.10.5-0``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.9.8-0``,  ``3.9.3-0``,  ``3.8.28-0``,  ``3.8.4-1``,  ``3.8.4-0``,  ``3.6.15-0``,  ``3.6.10-0``,  ``3.6.7-0``,  ``3.6.4-0``,  ``3.2.3-0``,  ``3.2.1-0``,  ``3.1.1b-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.9-0``,  ``3.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.9``
   :depends curl: 
   :depends hmmer: ``>=3.2``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install ncbi-amrfinderplus

   and update with::

      mamba update ncbi-amrfinderplus

  To create a new environment, run::

      mamba create --name myenvname ncbi-amrfinderplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-amrfinderplus:<tag>

   (see `ncbi-amrfinderplus/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-amrfinderplus| image:: https://img.shields.io/conda/dn/bioconda/ncbi-amrfinderplus.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-amrfinderplus
   :alt:   (downloads)
.. |docker_ncbi-amrfinderplus| image:: https://quay.io/repository/biocontainers/ncbi-amrfinderplus/status
   :target: https://quay.io/repository/biocontainers/ncbi-amrfinderplus
.. _`ncbi-amrfinderplus/tags`: https://quay.io/repository/biocontainers/ncbi-amrfinderplus?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-amrfinderplus";
        var versions = ["4.0.15","4.0.3","4.0.3","3.12.8","3.11.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html