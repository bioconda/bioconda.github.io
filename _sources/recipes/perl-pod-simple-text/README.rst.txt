:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-simple-text'
.. highlight: bash

perl-pod-simple-text
====================

.. conda:recipe:: perl-pod-simple-text/3.28
   :replaces_section_title:
   :noindex:

   format Pod as plaintext

   :homepage: http://metacpan.org/pod/Pod::Simple::Text
   :license: perl_5
   :recipe: /`perl-pod-simple-text <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text>`_/`3.28 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text/3.28>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text/3.28/meta.yaml>`_

   


.. conda:package:: perl-pod-simple-text

   |downloads_perl-pod-simple-text| |docker_perl-pod-simple-text|

   :versions:
      
      

      ``3.28-2``,  ``3.28-1``,  ``3.28-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-pod-simple-text

   and update with::

      mamba update perl-pod-simple-text

  To create a new environment, run::

      mamba create --name myenvname perl-pod-simple-text

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-simple-text:<tag>

   (see `perl-pod-simple-text/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-simple-text| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-simple-text.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-simple-text
   :alt:   (downloads)
.. |docker_perl-pod-simple-text| image:: https://quay.io/repository/biocontainers/perl-pod-simple-text/status
   :target: https://quay.io/repository/biocontainers/perl-pod-simple-text
.. _`perl-pod-simple-text/tags`: https://quay.io/repository/biocontainers/perl-pod-simple-text?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-simple-text";
        var versions = ["3.28","3.28","3.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-simple-text/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-simple-text/README.html