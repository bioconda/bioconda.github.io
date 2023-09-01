:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-basic'
.. highlight: bash

perl-statistics-basic
=====================

.. conda:recipe:: perl-statistics-basic
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/Statistics-Basic
   :license: open_source
   :recipe: /`perl-statistics-basic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-basic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-basic/meta.yaml>`_

   


.. conda:package:: perl-statistics-basic

   |downloads_perl-statistics-basic| |docker_perl-statistics-basic|

   :versions:
      
      

      ``1.6611-3``,  ``1.6611-2``,  ``1.6611-1``,  ``1.6611-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-number-format: 
   :depends perl-scalar-list-utils: 
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

      mamba install perl-statistics-basic

   and update with::

      mamba update perl-statistics-basic

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-basic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-basic:<tag>

   (see `perl-statistics-basic/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-basic| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-basic.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-basic
   :alt:   (downloads)
.. |docker_perl-statistics-basic| image:: https://quay.io/repository/biocontainers/perl-statistics-basic/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-basic
.. _`perl-statistics-basic/tags`: https://quay.io/repository/biocontainers/perl-statistics-basic?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-basic";
        var versions = ["1.6611","1.6611","1.6611","1.6611"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-basic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-basic/README.html