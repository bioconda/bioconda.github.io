:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-phylo-cipres'
.. highlight: bash

perl-bio-phylo-cipres
=====================

.. conda:recipe:: perl-bio-phylo-cipres/v0.2.1
   :replaces_section_title:
   :noindex:

   Reusable components for CIPRES REST API access

   :homepage: http://metacpan.org/pod/Bio::Phylo::CIPRES
   :license: perl_5
   :recipe: /`perl-bio-phylo-cipres <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres>`_/`v0.2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1/meta.yaml>`_

   


.. conda:package:: perl-bio-phylo-cipres

   |downloads_perl-bio-phylo-cipres| |docker_perl-bio-phylo-cipres|

   :versions:
      
      

      ``v0.2.1-2``,  ``v0.2.1-1``,  ``v0.2.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-phylo: 
   :depends perl-lwp-simple: ``>=6.39``
   :depends perl-xml-twig: 
   :depends perl-yaml: 
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

      mamba install perl-bio-phylo-cipres

   and update with::

      mamba update perl-bio-phylo-cipres

  To create a new environment, run::

      mamba create --name myenvname perl-bio-phylo-cipres

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-phylo-cipres:<tag>

   (see `perl-bio-phylo-cipres/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-phylo-cipres| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-phylo-cipres.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-phylo-cipres
   :alt:   (downloads)
.. |docker_perl-bio-phylo-cipres| image:: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres/status
   :target: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres
.. _`perl-bio-phylo-cipres/tags`: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-phylo-cipres";
        var versions = ["v0.2.1","v0.2.1","v0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html