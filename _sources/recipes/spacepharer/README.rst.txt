:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacepharer'
.. highlight: bash

spacepharer
===========

.. conda:recipe:: spacepharer
   :replaces_section_title:
   :noindex:

   SpacePHARER\: Sensitive identification of phages from CRISPR spacers in prokaryotic hosts

   :homepage: https://github.com/soedinglab/spacepharer
   :license: GPL / GPL-3
   :recipe: /`spacepharer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab222`, biotools: :biotools:`spacepharer`

   


.. conda:package:: spacepharer

   |downloads_spacepharer| |docker_spacepharer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.c2e680a-6</code>,  <code>5.c2e680a-5</code>,  <code>5.c2e680a-4</code>,  <code>5.c2e680a-3</code>,  <code>5.c2e680a-2</code>,  <code>5.c2e680a-1</code>,  <code>5.c2e680a-0</code>,  <code>4.228b9e5-2</code>,  <code>4.228b9e5-1</code>,  </span></summary>
      

      ``5.c2e680a-6``,  ``5.c2e680a-5``,  ``5.c2e680a-4``,  ``5.c2e680a-3``,  ``5.c2e680a-2``,  ``5.c2e680a-1``,  ``5.c2e680a-0``,  ``4.228b9e5-2``,  ``4.228b9e5-1``,  ``4.228b9e5-0``,  ``3.5b8c86d-0``,  ``2.fc5e668-0``,  ``1.56925d2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends llvm-openmp: ``>=18.1.8``
   :depends llvm-openmp: ``>=19.1.5``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
   :depends zlib: 
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

      mamba install spacepharer

   and update with::

      mamba update spacepharer

  To create a new environment, run::

      mamba create --name myenvname spacepharer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spacepharer:<tag>

   (see `spacepharer/tags`_ for valid values for ``<tag>``)


.. |downloads_spacepharer| image:: https://img.shields.io/conda/dn/bioconda/spacepharer.svg?style=flat
   :target: https://anaconda.org/bioconda/spacepharer
   :alt:   (downloads)
.. |docker_spacepharer| image:: https://quay.io/repository/biocontainers/spacepharer/status
   :target: https://quay.io/repository/biocontainers/spacepharer
.. _`spacepharer/tags`: https://quay.io/repository/biocontainers/spacepharer?tab=tags


.. raw:: html

    <script>
        var package = "spacepharer";
        var versions = ["5.c2e680a","5.c2e680a","5.c2e680a","5.c2e680a","5.c2e680a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacepharer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacepharer/README.html