:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-hts'
.. highlight: bash

perl-bio-db-hts
===============

.. conda:recipe:: perl-bio-db-hts
   :replaces_section_title:
   :noindex:

   Read files using HTSlib including BAM\/CRAM\, Tabix and BCF database files

   :homepage: https://metacpan.org/pod/Bio::DB::HTS
   :license: Apache v2.0
   :recipe: /`perl-bio-db-hts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-hts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-hts/meta.yaml>`_

   


.. conda:package:: perl-bio-db-hts

   |downloads_perl-bio-db-hts| |docker_perl-bio-db-hts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.01-8</code>,  <code>3.01-7</code>,  <code>3.01-6</code>,  <code>3.01-5</code>,  <code>3.01-4</code>,  <code>3.01-3</code>,  <code>3.01-2</code>,  <code>3.01-1</code>,  <code>3.01-0</code>,  </span></summary>
      

      ``3.01-8``,  ``3.01-7``,  ``3.01-6``,  ``3.01-5``,  ``3.01-4``,  ``3.01-3``,  ``3.01-2``,  ``3.01-1``,  ``3.01-0``,  ``2.7-3``,  ``2.7-2``,  ``2.7-1``,  ``2.7-0``,  ``2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-bio-db-hts

   and update with::

      mamba update perl-bio-db-hts

  To create a new environment, run::

      mamba create --name myenvname perl-bio-db-hts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-db-hts:<tag>

   (see `perl-bio-db-hts/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-hts| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-hts.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-db-hts
   :alt:   (downloads)
.. |docker_perl-bio-db-hts| image:: https://quay.io/repository/biocontainers/perl-bio-db-hts/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-hts
.. _`perl-bio-db-hts/tags`: https://quay.io/repository/biocontainers/perl-bio-db-hts?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-db-hts";
        var versions = ["3.01","3.01","3.01","3.01","3.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-hts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-hts/README.html