:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-trace-abif'
.. highlight: bash

perl-bio-trace-abif
===================

.. conda:recipe:: perl-bio-trace-abif
   :replaces_section_title:
   :noindex:

   Bio\:\:Trace\:\:ABIF \- Perl extension for reading and parsing ABIF \(Applied Biosystems\, Inc. Format\) files 

   :homepage: https://metacpan.org/pod/Bio::Trace::ABIF
   :license: perl_5
   :recipe: /`perl-bio-trace-abif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-trace-abif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-trace-abif/meta.yaml>`_

   


.. conda:package:: perl-bio-trace-abif

   |downloads_perl-bio-trace-abif| |docker_perl-bio-trace-abif|

   :versions:
      
      

      ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
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

      mamba install perl-bio-trace-abif

   and update with::

      mamba update perl-bio-trace-abif

  To create a new environment, run::

      mamba create --name myenvname perl-bio-trace-abif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-trace-abif:<tag>

   (see `perl-bio-trace-abif/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-trace-abif| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-trace-abif.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-trace-abif
   :alt:   (downloads)
.. |docker_perl-bio-trace-abif| image:: https://quay.io/repository/biocontainers/perl-bio-trace-abif/status
   :target: https://quay.io/repository/biocontainers/perl-bio-trace-abif
.. _`perl-bio-trace-abif/tags`: https://quay.io/repository/biocontainers/perl-bio-trace-abif?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-trace-abif";
        var versions = ["1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-trace-abif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-trace-abif/README.html