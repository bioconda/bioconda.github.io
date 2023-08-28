:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-autodie'
.. highlight: bash

perl-autodie
============

.. conda:recipe:: perl-autodie
   :replaces_section_title:
   :noindex:

   Replace functions with ones that succeed or die with lexical scope

   :homepage: http://metacpan.org/pod/autodie
   :license: perl_5
   :recipe: /`perl-autodie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie/meta.yaml>`_

   


.. conda:package:: perl-autodie

   |downloads_perl-autodie| |docker_perl-autodie|

   :versions:
      
      

      ``2.36-0``,  ``2.35-0``,  ``2.34-0``,  ``2.29-1``,  ``2.29-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
   :depends perl-parent: 
   :depends perl-tie-refhash: 
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

      mamba install perl-autodie

   and update with::

      mamba update perl-autodie

  To create a new environment, run::

      mamba create --name myenvname perl-autodie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-autodie:<tag>

   (see `perl-autodie/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-autodie| image:: https://img.shields.io/conda/dn/bioconda/perl-autodie.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-autodie
   :alt:   (downloads)
.. |docker_perl-autodie| image:: https://quay.io/repository/biocontainers/perl-autodie/status
   :target: https://quay.io/repository/biocontainers/perl-autodie
.. _`perl-autodie/tags`: https://quay.io/repository/biocontainers/perl-autodie?tab=tags


.. raw:: html

    <script>
        var package = "perl-autodie";
        var versions = ["2.36","2.35","2.34","2.29","2.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autodie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autodie/README.html