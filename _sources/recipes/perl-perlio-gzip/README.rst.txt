:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio-gzip'
.. highlight: bash

perl-perlio-gzip
================

.. conda:recipe:: perl-perlio-gzip
   :replaces_section_title:
   :noindex:

   PerlIO interface to gzip\/gunzip

   :homepage: http://metacpan.org/pod/PerlIO-gzip
   :license: perl_5
   :recipe: /`perl-perlio-gzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip/meta.yaml>`_

   


.. conda:package:: perl-perlio-gzip

   |downloads_perl-perlio-gzip| |docker_perl-perlio-gzip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.20-6</code>,  <code>0.20-5</code>,  <code>0.20-4</code>,  <code>0.20-3</code>,  <code>0.20-2</code>,  <code>0.20-1</code>,  <code>0.20-0</code>,  <code>0.19-3</code>,  <code>0.19-2</code>,  </span></summary>
      

      ``0.20-6``,  ``0.20-5``,  ``0.20-4``,  ``0.20-3``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``,  ``0.19-3``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-perlio-gzip

   and update with::

      mamba update perl-perlio-gzip

  To create a new environment, run::

      mamba create --name myenvname perl-perlio-gzip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-perlio-gzip:<tag>

   (see `perl-perlio-gzip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perlio-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-gzip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio-gzip
   :alt:   (downloads)
.. |docker_perl-perlio-gzip| image:: https://quay.io/repository/biocontainers/perl-perlio-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-gzip
.. _`perl-perlio-gzip/tags`: https://quay.io/repository/biocontainers/perl-perlio-gzip?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio-gzip";
        var versions = ["0.20","0.20","0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-gzip/README.html