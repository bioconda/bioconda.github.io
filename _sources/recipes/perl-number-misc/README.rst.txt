:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-misc'
.. highlight: bash

perl-number-misc
================

.. conda:recipe:: perl-number-misc/1.2
   :replaces_section_title:
   :noindex:

   Number\:\:Misc \- handy utilities for numbers

   :homepage: http://metacpan.org/pod/Number::Misc
   :license: perl_5
   :recipe: /`perl-number-misc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-misc>`_/`1.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-misc/1.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-misc/1.2/meta.yaml>`_

   


.. conda:package:: perl-number-misc

   |downloads_perl-number-misc| |docker_perl-number-misc|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-number-misc

   and update with::

      mamba update perl-number-misc

  To create a new environment, run::

      mamba create --name myenvname perl-number-misc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-number-misc:<tag>

   (see `perl-number-misc/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-misc| image:: https://img.shields.io/conda/dn/bioconda/perl-number-misc.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-misc
   :alt:   (downloads)
.. |docker_perl-number-misc| image:: https://quay.io/repository/biocontainers/perl-number-misc/status
   :target: https://quay.io/repository/biocontainers/perl-number-misc
.. _`perl-number-misc/tags`: https://quay.io/repository/biocontainers/perl-number-misc?tab=tags


.. raw:: html

    <script>
        var package = "perl-number-misc";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-misc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-misc/README.html