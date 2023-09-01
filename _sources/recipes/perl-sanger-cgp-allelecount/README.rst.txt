:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-allelecount'
.. highlight: bash

perl-sanger-cgp-allelecount
===========================

.. conda:recipe:: perl-sanger-cgp-allelecount
   :replaces_section_title:
   :noindex:

   Support code for NGS copy number algorithm

   :homepage: https://github.com/cancerit/alleleCount
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-allelecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-allelecount

   |downloads_perl-sanger-cgp-allelecount| |docker_perl-sanger-cgp-allelecount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-1</code>,  <code>4.3.0-0</code>,  <code>4.2.1-1</code>,  <code>4.2.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>2.1.2-3</code>,  </span></summary>
      

      ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.1-1``,  ``4.2.1-0``,  ``4.1.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-samtools: 
   :depends perl-bioperl: 
   :depends perl-file-slurp: ``9999.32.*``
   :depends perl-file-which: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-pod-coverage: 
   :depends perl-sanger-cgp-vcf: 
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

      mamba install perl-sanger-cgp-allelecount

   and update with::

      mamba update perl-sanger-cgp-allelecount

  To create a new environment, run::

      mamba create --name myenvname perl-sanger-cgp-allelecount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-allelecount:<tag>

   (see `perl-sanger-cgp-allelecount/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-allelecount| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-allelecount.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-allelecount
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-allelecount| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount
.. _`perl-sanger-cgp-allelecount/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-allelecount";
        var versions = ["4.3.0","4.3.0","4.2.1","4.2.1","4.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html