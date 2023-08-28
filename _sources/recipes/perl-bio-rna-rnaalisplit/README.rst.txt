:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-rnaalisplit'
.. highlight: bash

perl-bio-rna-rnaalisplit
========================

.. conda:recipe:: perl-bio-rna-rnaalisplit
   :replaces_section_title:
   :noindex:

   Split and deconvolute structural RNA multiple sequence alignments

   :homepage: https://github.com/mtw/Bio-RNA-RNAaliSplit
   :license: agpl_3
   :recipe: /`perl-bio-rna-rnaalisplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-rnaalisplit

   |downloads_perl-bio-rna-rnaalisplit| |docker_perl-bio-rna-rnaalisplit|

   :versions:
      
      

      ``0.11-0``,  ``v0.09-0``,  ``v0.08-0``,  ``v0.07-0``,  ``v0.06-2``,  ``v0.06-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-array-set: 
   :depends perl-bioperl: 
   :depends perl-file-share: 
   :depends perl-filedirutil: 
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-coerce: 
   :depends perl-path-class: 
   :depends perl-test-script: 
   :depends rnaz: ``>=2.1``
   :depends rscape: ``>=1.2.2,<1.3``
   :depends viennarna: ``>=2.4.9``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-rna-rnaalisplit

   and update with::

      mamba update perl-bio-rna-rnaalisplit

  To create a new environment, run::

      mamba create --name myenvname perl-bio-rna-rnaalisplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-rnaalisplit:<tag>

   (see `perl-bio-rna-rnaalisplit/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-rnaalisplit| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-rnaalisplit.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-rnaalisplit
   :alt:   (downloads)
.. |docker_perl-bio-rna-rnaalisplit| image:: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit
.. _`perl-bio-rna-rnaalisplit/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-rnaalisplit";
        var versions = ["0.11","v0.09","v0.08","v0.07","v0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html