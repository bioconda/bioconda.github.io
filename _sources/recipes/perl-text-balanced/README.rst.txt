:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-balanced'
.. highlight: bash

perl-text-balanced
==================

.. conda:recipe:: perl-text-balanced
   :replaces_section_title:
   :noindex:

   Extract delimited text sequences from strings

   :homepage: http://metacpan.org/pod/Text::Balanced
   :license: perl_5
   :recipe: /`perl-text-balanced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced/meta.yaml>`_

   


.. conda:package:: perl-text-balanced

   |downloads_perl-text-balanced| |docker_perl-text-balanced|

   :versions:
      
      

      ``2.06-0``,  ``2.05-0``,  ``2.04-0``,  ``2.03-4``,  ``2.03-3``,  ``2.03-2``,  ``2.03-1``,  ``2.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-vars: 
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

      mamba install perl-text-balanced

   and update with::

      mamba update perl-text-balanced

  To create a new environment, run::

      mamba create --name myenvname perl-text-balanced

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-balanced:<tag>

   (see `perl-text-balanced/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-balanced| image:: https://img.shields.io/conda/dn/bioconda/perl-text-balanced.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-balanced
   :alt:   (downloads)
.. |docker_perl-text-balanced| image:: https://quay.io/repository/biocontainers/perl-text-balanced/status
   :target: https://quay.io/repository/biocontainers/perl-text-balanced
.. _`perl-text-balanced/tags`: https://quay.io/repository/biocontainers/perl-text-balanced?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-balanced";
        var versions = ["2.06","2.05","2.04","2.03","2.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-balanced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-balanced/README.html