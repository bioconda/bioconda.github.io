:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-lite'
.. highlight: bash

perl-mime-lite
==============

.. conda:recipe:: perl-mime-lite
   :replaces_section_title:
   :noindex:

   Handy\-dandy MIME mailing class

   :homepage: http://metacpan.org/pod/MIME-Lite
   :license: perl_5
   :recipe: /`perl-mime-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite/meta.yaml>`_

   


.. conda:package:: perl-mime-lite

   |downloads_perl-mime-lite| |docker_perl-mime-lite|

   :versions:
      
      

      ``3.030-2``,  ``3.030-1``,  ``3.030-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-email-date-format: 
   :depends perl-mailtools: 
   :depends perl-mime-types: 
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

      mamba install perl-mime-lite

   and update with::

      mamba update perl-mime-lite

  To create a new environment, run::

      mamba create --name myenvname perl-mime-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mime-lite:<tag>

   (see `perl-mime-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-lite
   :alt:   (downloads)
.. |docker_perl-mime-lite| image:: https://quay.io/repository/biocontainers/perl-mime-lite/status
   :target: https://quay.io/repository/biocontainers/perl-mime-lite
.. _`perl-mime-lite/tags`: https://quay.io/repository/biocontainers/perl-mime-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-lite";
        var versions = ["3.030","3.030","3.030"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-lite/README.html