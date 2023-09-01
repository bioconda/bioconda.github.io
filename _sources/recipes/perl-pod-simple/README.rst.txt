:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-simple'
.. highlight: bash

perl-pod-simple
===============

.. conda:recipe:: perl-pod-simple/3.35
   :replaces_section_title:
   :noindex:

   framework for parsing Pod

   :homepage: http://search.cpan.org/dist/Pod-Simple/
   :license: perl_5
   :recipe: /`perl-pod-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple>`_/`3.35 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple/3.35>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple/3.35/meta.yaml>`_

   


.. conda:package:: perl-pod-simple

   |downloads_perl-pod-simple| |docker_perl-pod-simple|

   :versions:
      
      

      ``3.35-2``,  ``3.35-1``,  ``3.35-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-pod-escapes: 
   :depends perl-test: 
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

      mamba install perl-pod-simple

   and update with::

      mamba update perl-pod-simple

  To create a new environment, run::

      mamba create --name myenvname perl-pod-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-simple:<tag>

   (see `perl-pod-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-simple
   :alt:   (downloads)
.. |docker_perl-pod-simple| image:: https://quay.io/repository/biocontainers/perl-pod-simple/status
   :target: https://quay.io/repository/biocontainers/perl-pod-simple
.. _`perl-pod-simple/tags`: https://quay.io/repository/biocontainers/perl-pod-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-simple";
        var versions = ["3.35","3.35","3.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-simple/README.html