:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-vcf'
.. highlight: bash

perl-sanger-cgp-vcf
===================

.. conda:recipe:: perl-sanger-cgp-vcf
   :replaces_section_title:
   :noindex:

   a set of common perl utilities for generating consistent Vcf headers

   :homepage: https://github.com/cancerit/cgpVcf
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vcf

   |downloads_perl-sanger-cgp-vcf| |docker_perl-sanger-cgp-vcf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-9</code>,  <code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  </span></summary>
      

      ``2.2.1-9``,  ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-const-fast: 
   :depends perl-data-uuid: 
   :depends perl-datetime: 
   :depends perl-ipc-system-simple: ``1.30.*``
   :depends perl-test-fatal: ``0.016.*``
   :depends perl-vcftools-vcf: ``0.1.16.*``
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

      mamba install perl-sanger-cgp-vcf

   and update with::

      mamba update perl-sanger-cgp-vcf

  To create a new environment, run::

      mamba create --name myenvname perl-sanger-cgp-vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-vcf:<tag>

   (see `perl-sanger-cgp-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-vcf
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vcf| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf
.. _`perl-sanger-cgp-vcf/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-vcf";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html