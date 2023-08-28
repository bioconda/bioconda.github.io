:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-www-robotrules'
.. highlight: bash

perl-www-robotrules
===================

.. conda:recipe:: perl-www-robotrules
   :replaces_section_title:
   :noindex:

   database of robots.txt\-derived permissions

   :homepage: http://metacpan.org/pod/WWW::RobotRules
   :license: perl_5
   :recipe: /`perl-www-robotrules <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-robotrules>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-robotrules/meta.yaml>`_

   


.. conda:package:: perl-www-robotrules

   |downloads_perl-www-robotrules| |docker_perl-www-robotrules|

   :versions:
      
      

      ``6.02-4``,  ``6.02-3``,  ``6.02-2``,  ``6.02-1``,  ``6.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-uri: 
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

      mamba install perl-www-robotrules

   and update with::

      mamba update perl-www-robotrules

  To create a new environment, run::

      mamba create --name myenvname perl-www-robotrules

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-www-robotrules:<tag>

   (see `perl-www-robotrules/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-www-robotrules| image:: https://img.shields.io/conda/dn/bioconda/perl-www-robotrules.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-www-robotrules
   :alt:   (downloads)
.. |docker_perl-www-robotrules| image:: https://quay.io/repository/biocontainers/perl-www-robotrules/status
   :target: https://quay.io/repository/biocontainers/perl-www-robotrules
.. _`perl-www-robotrules/tags`: https://quay.io/repository/biocontainers/perl-www-robotrules?tab=tags


.. raw:: html

    <script>
        var package = "perl-www-robotrules";
        var versions = ["6.02","6.02","6.02","6.02","6.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-www-robotrules/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-www-robotrules/README.html