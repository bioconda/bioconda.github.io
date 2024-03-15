:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mafft'
.. highlight: bash

mafft
=====

.. conda:recipe:: mafft
   :replaces_section_title:
   :noindex:

   Multiple alignment program for amino acid or nucleotide sequences based on fast Fourier transform

   :homepage: http://mafft.cbrc.jp/alignment/software/
   :license: BSD
   :recipe: /`mafft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mafft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mafft/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkf436`, usegalaxy-eu: :usegalaxy-eu:`rbc_mafft`

   


.. conda:package:: mafft

   |downloads_mafft| |docker_mafft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.525-1</code>,  <code>7.525-0</code>,  <code>7.520-3</code>,  <code>7.520-2</code>,  <code>7.520-1</code>,  <code>7.520-0</code>,  <code>7.515-0</code>,  <code>7.508-0</code>,  <code>7.505-0</code>,  </span></summary>
      

      ``7.525-1``,  ``7.525-0``,  ``7.520-3``,  ``7.520-2``,  ``7.520-1``,  ``7.520-0``,  ``7.515-0``,  ``7.508-0``,  ``7.505-0``,  ``7.490-1``,  ``7.490-0``,  ``7.489-0``,  ``7.487-0``,  ``7.486-0``,  ``7.480-0``,  ``7.475-1``,  ``7.475-0``,  ``7.471-0``,  ``7.470-0``,  ``7.467-0``,  ``7.464-0``,  ``7.463-0``,  ``7.458-0``,  ``7.455-0``,  ``7.453-1``,  ``7.453-0``,  ``7.407-2``,  ``7.407-1``,  ``7.407-0``,  ``7.402-0``,  ``7.313-1``,  ``7.313-0``,  ``7.310-7``,  ``7.310-6``,  ``7.310-5``,  ``7.310-4``,  ``7.310-3``,  ``7.310-2``,  ``7.310-1``,  ``7.310-0``,  ``7.305-1``,  ``7.305-0``,  ``7.221-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17``
   :depends gawk: 
   :depends libgcc-ng: ``>=12``
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

      mamba install mafft

   and update with::

      mamba update mafft

  To create a new environment, run::

      mamba create --name myenvname mafft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mafft:<tag>

   (see `mafft/tags`_ for valid values for ``<tag>``)


.. |downloads_mafft| image:: https://img.shields.io/conda/dn/bioconda/mafft.svg?style=flat
   :target: https://anaconda.org/bioconda/mafft
   :alt:   (downloads)
.. |docker_mafft| image:: https://quay.io/repository/biocontainers/mafft/status
   :target: https://quay.io/repository/biocontainers/mafft
.. _`mafft/tags`: https://quay.io/repository/biocontainers/mafft?tab=tags


.. raw:: html

    <script>
        var package = "mafft";
        var versions = ["7.525","7.525","7.520","7.520","7.520"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mafft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mafft/README.html