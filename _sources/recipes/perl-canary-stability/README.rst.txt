:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-canary-stability'
.. highlight: bash

perl-canary-stability
=====================

.. conda:recipe:: perl-canary-stability
   :replaces_section_title:
   :noindex:

   canary to check perl compatibility for schmorp\'s modules

   :homepage: http://metacpan.org/pod/Canary::Stability
   :license: unknown
   :recipe: /`perl-canary-stability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability/meta.yaml>`_

   


.. conda:package:: perl-canary-stability

   |downloads_perl-canary-stability| |docker_perl-canary-stability|

   :versions:
      
      

      ``2013-1``,  ``2013-0``,  ``2012-0``,  ``2006-0``

      

   
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

      mamba install perl-canary-stability

   and update with::

      mamba update perl-canary-stability

  To create a new environment, run::

      mamba create --name myenvname perl-canary-stability

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-canary-stability:<tag>

   (see `perl-canary-stability/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-canary-stability| image:: https://img.shields.io/conda/dn/bioconda/perl-canary-stability.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-canary-stability
   :alt:   (downloads)
.. |docker_perl-canary-stability| image:: https://quay.io/repository/biocontainers/perl-canary-stability/status
   :target: https://quay.io/repository/biocontainers/perl-canary-stability
.. _`perl-canary-stability/tags`: https://quay.io/repository/biocontainers/perl-canary-stability?tab=tags


.. raw:: html

    <script>
        var package = "perl-canary-stability";
        var versions = ["2013","2013","2012","2006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-canary-stability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-canary-stability/README.html