:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-la'
.. highlight: bash

hla-la
======

.. conda:recipe:: hla-la
   :replaces_section_title:
   :noindex:

   HLA typing from short and long reads

   :homepage: https://github.com/DiltheyLab/HLA-LA
   :license: GPL
   :recipe: /`hla-la <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la/meta.yaml>`_
   :links: biotools: :biotools:`hla-la`

   


.. conda:package:: hla-la

   |downloads_hla-la| |docker_hla-la|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0-2</code>,  </span></summary>
      

      ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``2.5.1``
   :depends boost-cpp: ``1.74.00``
   :depends bwa: ``0.7.12``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mummer: 
   :depends perl-bio-db-hts: ``>=3.1,<4.0a0``
   :depends perl-bio-featureio: 
   :depends perl-bioperl: 
   :depends perl-bioperl-core: ``1.7.8.*``
   :depends perl-list-moreutils: 
   :depends perl-text-levenshtein: 
   :depends picard: 
   :depends r-base: ``4.*``
   :depends samtools: ``>=1.10``
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

      mamba install hla-la

   and update with::

      mamba update hla-la

  To create a new environment, run::

      mamba create --name myenvname hla-la

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hla-la:<tag>

   (see `hla-la/tags`_ for valid values for ``<tag>``)


.. |downloads_hla-la| image:: https://img.shields.io/conda/dn/bioconda/hla-la.svg?style=flat
   :target: https://anaconda.org/bioconda/hla-la
   :alt:   (downloads)
.. |docker_hla-la| image:: https://quay.io/repository/biocontainers/hla-la/status
   :target: https://quay.io/repository/biocontainers/hla-la
.. _`hla-la/tags`: https://quay.io/repository/biocontainers/hla-la?tab=tags


.. raw:: html

    <script>
        var package = "hla-la";
        var versions = ["1.0.4","1.0.3","1.0.3","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-la/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-la/README.html