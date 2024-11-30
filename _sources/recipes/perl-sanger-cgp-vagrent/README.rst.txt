:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-vagrent'
.. highlight: bash

perl-sanger-cgp-vagrent
=======================

.. conda:recipe:: perl-sanger-cgp-vagrent
   :replaces_section_title:
   :noindex:

   A toolset for comparing genomic variants to reference genome annotation to identify potential biological consequences.

   :homepage: https://github.com/cancerit/VAGrENT
   :license: GPL / GPL3
   :recipe: /`perl-sanger-cgp-vagrent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vagrent

   |downloads_perl-sanger-cgp-vagrent| |docker_perl-sanger-cgp-vagrent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.0-2</code>,  <code>3.7.0-1</code>,  <code>3.7.0-0</code>,  <code>3.6.1-0</code>,  <code>3.5.2-0</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  <code>3.3.3-0</code>,  <code>3.2.0-1</code>,  </span></summary>
      

      ``3.7.0-2``,  ``3.7.0-1``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.5.2-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.3.3-0``,  ``3.2.0-1``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-db-hts: 
   :depends perl-bioperl: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-set-intervaltree: 
   :depends perl-sub-exporter-progressive: ``0.001013.*``
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

      mamba install perl-sanger-cgp-vagrent

   and update with::

      mamba update perl-sanger-cgp-vagrent

  To create a new environment, run::

      mamba create --name myenvname perl-sanger-cgp-vagrent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-vagrent:<tag>

   (see `perl-sanger-cgp-vagrent/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-vagrent| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vagrent.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-vagrent
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vagrent| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent
.. _`perl-sanger-cgp-vagrent/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-vagrent";
        var versions = ["3.7.0","3.7.0","3.7.0","3.6.1","3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html