:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-plaintext'
.. highlight: bash

perl-pod-plaintext
==================

.. conda:recipe:: perl-pod-plaintext/2.07
   :replaces_section_title:
   :noindex:

   Convert POD data to formatted ASCII text

   :homepage: http://metacpan.org/pod/Pod::PlainText
   :license: perl_5
   :recipe: /`perl-pod-plaintext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext>`_/`2.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext/2.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext/2.07/meta.yaml>`_

   


.. conda:package:: perl-pod-plaintext

   |downloads_perl-pod-plaintext| |docker_perl-pod-plaintext|

   :versions:
      
      

      ``2.07-2``,  ``2.07-1``,  ``2.07-0``

      

   
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

      mamba install perl-pod-plaintext

   and update with::

      mamba update perl-pod-plaintext

  To create a new environment, run::

      mamba create --name myenvname perl-pod-plaintext

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-plaintext:<tag>

   (see `perl-pod-plaintext/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-plaintext| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-plaintext.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-plaintext
   :alt:   (downloads)
.. |docker_perl-pod-plaintext| image:: https://quay.io/repository/biocontainers/perl-pod-plaintext/status
   :target: https://quay.io/repository/biocontainers/perl-pod-plaintext
.. _`perl-pod-plaintext/tags`: https://quay.io/repository/biocontainers/perl-pod-plaintext?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-plaintext";
        var versions = ["2.07","2.07","2.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-plaintext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-plaintext/README.html