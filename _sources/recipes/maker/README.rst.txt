:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maker'
.. highlight: bash

maker
=====

.. conda:recipe:: maker
   :replaces_section_title:
   :noindex:

   MAKER is a portable and easily configurable genome annotation pipeline.

   :homepage: https://www.yandell-lab.org/software/maker.html
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`maker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker/meta.yaml>`_
   :links: biotools: :biotools:`maker`, usegalaxy-eu: :usegalaxy-eu:`maker`

   


.. conda:package:: maker

   |downloads_maker| |docker_maker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.01.04-0</code>,  <code>3.01.03-4</code>,  <code>3.01.03-2</code>,  <code>3.01.03-1</code>,  <code>3.01.03-0</code>,  <code>2.31.11-1</code>,  <code>2.31.11-0</code>,  <code>2.31.10-17</code>,  <code>2.31.10-16</code>,  </span></summary>
      

      ``3.01.04-0``,  ``3.01.03-4``,  ``3.01.03-2``,  ``3.01.03-1``,  ``3.01.03-0``,  ``2.31.11-1``,  ``2.31.11-0``,  ``2.31.10-17``,  ``2.31.10-16``,  ``2.31.10-15``,  ``2.31.10-14``,  ``2.31.10-13``,  ``2.31.10-12``,  ``2.31.10-11``,  ``2.31.10-10``,  ``2.31.10-9``,  ``2.31.10-8``,  ``2.31.10-7``,  ``2.31.10-6``,  ``2.31.9-6``,  ``2.31.9-3``,  ``2.31.9-2``,  ``2.31.9-1``,  ``2.31.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends augustus: ``>=3.5.0``
   :depends blast: ``2.14.1.*``
   :depends exonerate: 
   :depends libgcc: ``>=13``
   :depends mpich-mpicc: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl-core: ``1.7.8.*``
   :depends perl-bioperl-core: ``>=1.7.8``
   :depends perl-bit-vector: 
   :depends perl-dbd-pg: ``3.18.0.*``
   :depends perl-dbd-sqlite: ``>=1.76,<2.0a0``
   :depends perl-dbi: 
   :depends perl-forks: 
   :depends perl-inline-c: ``>=0.78``
   :depends perl-inline-c: ``>=0.82,<0.83.0a0``
   :depends perl-io-all: 
   :depends perl-io-prompt: ``>=0.997004,<0.997005.0a0``
   :depends perl-perl-unsafe-signals: ``>=0.3,<0.4.0a0``
   :depends perl-perlio-gzip: ``>=0.20,<0.21.0a0``
   :depends perl-uri: ``5.17.*``
   :depends repeatmasker: ``>=4.1.9``
   :depends rmblast: ``2.14.1.*``
   :depends snap: 
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

      mamba install maker

   and update with::

      mamba update maker

  To create a new environment, run::

      mamba create --name myenvname maker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maker:<tag>

   (see `maker/tags`_ for valid values for ``<tag>``)


.. |downloads_maker| image:: https://img.shields.io/conda/dn/bioconda/maker.svg?style=flat
   :target: https://anaconda.org/bioconda/maker
   :alt:   (downloads)
.. |docker_maker| image:: https://quay.io/repository/biocontainers/maker/status
   :target: https://quay.io/repository/biocontainers/maker
.. _`maker/tags`: https://quay.io/repository/biocontainers/maker?tab=tags


.. raw:: html

    <script>
        var package = "maker";
        var versions = ["3.01.04","3.01.03","3.01.03","3.01.03","3.01.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maker/README.html