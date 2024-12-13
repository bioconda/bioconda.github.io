:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken'
.. highlight: bash

kraken
======

.. conda:recipe:: kraken
   :replaces_section_title:
   :noindex:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: http://ccb.jhu.edu/software/kraken/
   :license: GPLv3
   :recipe: /`kraken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken/meta.yaml>`_
   :links: biotools: :biotools:`kraken`, doi: :doi:`10.1186/gb-2014-15-3-r46`

   


.. conda:package:: kraken

   |downloads_kraken| |docker_kraken|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-10</code>,  <code>1.1.1-9</code>,  <code>1.1.1-8</code>,  <code>1.1.1-7</code>,  <code>1.1.1-6</code>,  <code>1.1.1-5</code>,  <code>1.1.1-4</code>,  <code>1.1.1-3</code>,  <code>1.1.1-2</code>,  </span></summary>
      

      ``1.1.1-10``,  ``1.1.1-9``,  ``1.1.1-8``,  ``1.1.1-7``,  ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``,  ``0.10.6_eaf8fb68-4``,  ``0.10.6_eaf8fb68-3``,  ``0.10.6_eaf8fb68-2``,  ``0.10.6_eaf8fb68-1``,  ``0.10.6_eaf8fb68-0``,  ``0.10.5beta-2``,  ``0.10.5beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends kmer-jellyfish: ``1.*``
   :depends libcxx: ``>=18``
   :depends llvm-openmp: ``>=18.1.8``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends rsync: 
   :depends tar: 
   :depends wget: 
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

      mamba install kraken

   and update with::

      mamba update kraken

  To create a new environment, run::

      mamba create --name myenvname kraken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kraken:<tag>

   (see `kraken/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken| image:: https://img.shields.io/conda/dn/bioconda/kraken.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken
   :alt:   (downloads)
.. |docker_kraken| image:: https://quay.io/repository/biocontainers/kraken/status
   :target: https://quay.io/repository/biocontainers/kraken
.. _`kraken/tags`: https://quay.io/repository/biocontainers/kraken?tab=tags


.. raw:: html

    <script>
        var package = "kraken";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken/README.html