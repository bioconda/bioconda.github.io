:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-util'
.. highlight: bash

perl-string-util
================

.. conda:recipe:: perl-string-util/1.26
   :replaces_section_title:
   :noindex:

   String\:\:Util \-\- String processing utilities

   :homepage: http://metacpan.org/pod/String::Util
   :license: perl_5
   :recipe: /`perl-string-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-util>`_/`1.26 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-util/1.26>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-util/1.26/meta.yaml>`_

   


.. conda:package:: perl-string-util

   |downloads_perl-string-util| |docker_perl-string-util|

   :versions:
      
      

      ``1.26-2``,  ``1.26-1``,  ``1.26-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-number-misc: 
   :depends perl-test-toolbox: 
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

      mamba install perl-string-util

   and update with::

      mamba update perl-string-util

  To create a new environment, run::

      mamba create --name myenvname perl-string-util

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-util:<tag>

   (see `perl-string-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-util| image:: https://img.shields.io/conda/dn/bioconda/perl-string-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-util
   :alt:   (downloads)
.. |docker_perl-string-util| image:: https://quay.io/repository/biocontainers/perl-string-util/status
   :target: https://quay.io/repository/biocontainers/perl-string-util
.. _`perl-string-util/tags`: https://quay.io/repository/biocontainers/perl-string-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-util";
        var versions = ["1.26","1.26","1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-util/README.html