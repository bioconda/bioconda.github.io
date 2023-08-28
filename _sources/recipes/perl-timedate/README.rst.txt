:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-timedate'
.. highlight: bash

perl-timedate
=============

.. conda:recipe:: perl-timedate
   :replaces_section_title:
   :noindex:

   Date formating subroutines

   :homepage: http://metacpan.org/pod/TimeDate
   :license: perl_5
   :recipe: /`perl-timedate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-timedate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-timedate/meta.yaml>`_

   


.. conda:package:: perl-timedate

   |downloads_perl-timedate| |docker_perl-timedate|

   :versions:
      
      

      ``2.33-2``,  ``2.30-1``,  ``2.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-timedate

   and update with::

      mamba update perl-timedate

  To create a new environment, run::

      mamba create --name myenvname perl-timedate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-timedate:<tag>

   (see `perl-timedate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-timedate| image:: https://img.shields.io/conda/dn/bioconda/perl-timedate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-timedate
   :alt:   (downloads)
.. |docker_perl-timedate| image:: https://quay.io/repository/biocontainers/perl-timedate/status
   :target: https://quay.io/repository/biocontainers/perl-timedate
.. _`perl-timedate/tags`: https://quay.io/repository/biocontainers/perl-timedate?tab=tags


.. raw:: html

    <script>
        var package = "perl-timedate";
        var versions = ["2.33","2.30","2.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-timedate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-timedate/README.html