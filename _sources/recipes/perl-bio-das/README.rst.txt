:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-das'
.. highlight: bash

perl-bio-das
============

.. conda:recipe:: perl-bio-das
   :replaces_section_title:
   :noindex:

   Client\-side library for Distributed Genome Annotation System

   :homepage: http://metacpan.org/pod/Bio::Das
   :license: artistic_2
   :recipe: /`perl-bio-das <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-das>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-das/meta.yaml>`_

   


.. conda:package:: perl-bio-das

   |downloads_perl-bio-das| |docker_perl-bio-das|

   :versions:
      
      

      ``1.17-1``,  ``1.17-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :depends perl-html-parser: 
   :depends perl-mime-base64: 
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

      mamba install perl-bio-das

   and update with::

      mamba update perl-bio-das

  To create a new environment, run::

      mamba create --name myenvname perl-bio-das

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-das:<tag>

   (see `perl-bio-das/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-das| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-das.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-das
   :alt:   (downloads)
.. |docker_perl-bio-das| image:: https://quay.io/repository/biocontainers/perl-bio-das/status
   :target: https://quay.io/repository/biocontainers/perl-bio-das
.. _`perl-bio-das/tags`: https://quay.io/repository/biocontainers/perl-bio-das?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-das";
        var versions = ["1.17","1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-das/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-das/README.html