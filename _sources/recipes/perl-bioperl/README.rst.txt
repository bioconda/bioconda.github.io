:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl'
.. highlight: bash

perl-bioperl
============

.. conda:recipe:: perl-bioperl
   :replaces_section_title:
   :noindex:

   Bioinformatics Toolkit

   :homepage: http://metacpan.org/pod/BioPerl
   :license: perl_5
   :recipe: /`perl-bioperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl/meta.yaml>`_
   :links: biotools: :biotools:`bioperl`, doi: :doi:`10.1007/978-1-59745-535-0_26`

   


.. conda:package:: perl-bioperl

   |downloads_perl-bioperl| |docker_perl-bioperl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.8-1</code>,  <code>1.7.8-0</code>,  <code>1.7.2-11</code>,  <code>1.7.2-10</code>,  <code>1.7.2-9</code>,  <code>1.7.2-8</code>,  <code>1.6.924-7</code>,  <code>1.6.924-6</code>,  <code>1.6.924-5</code>,  </span></summary>
      

      ``1.7.8-1``,  ``1.7.8-0``,  ``1.7.2-11``,  ``1.7.2-10``,  ``1.7.2-9``,  ``1.7.2-8``,  ``1.6.924-7``,  ``1.6.924-6``,  ``1.6.924-5``,  ``1.6.924-4``,  ``1.6.924-3``,  ``1.6.924-2``,  ``1.6.924-1``,  ``1.6.924-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: 
   :depends perl-bio-asn1-entrezgene: 
   :depends perl-bio-coordinate: 
   :depends perl-bio-featureio: 
   :depends perl-bio-samtools: 
   :depends perl-bio-searchio-hmmer: 
   :depends perl-bio-tools-phylo-paml: 
   :depends perl-bio-tools-run-alignment-clustalw: 
   :depends perl-bio-tools-run-alignment-tcoffee: 
   :depends perl-bioperl-core: ``1.7.8.*``
   :depends perl-bioperl-run: 
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

      mamba install perl-bioperl

   and update with::

      mamba update perl-bioperl

  To create a new environment, run::

      mamba create --name myenvname perl-bioperl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bioperl:<tag>

   (see `perl-bioperl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bioperl| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl
   :alt:   (downloads)
.. |docker_perl-bioperl| image:: https://quay.io/repository/biocontainers/perl-bioperl/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl
.. _`perl-bioperl/tags`: https://quay.io/repository/biocontainers/perl-bioperl?tab=tags


.. raw:: html

    <script>
        var package = "perl-bioperl";
        var versions = ["1.7.8","1.7.8","1.7.2","1.7.2","1.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl/README.html