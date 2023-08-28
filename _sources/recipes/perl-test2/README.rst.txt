:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test2'
.. highlight: bash

perl-test2
==========

.. conda:recipe:: perl-test2/1.302075
   :replaces_section_title:
   :noindex:

   Framework for writing test tools that all work together.

   :homepage: http://metacpan.org/pod/Test2
   :license: perl_5
   :recipe: /`perl-test2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2>`_/`1.302075 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2/1.302075>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2/1.302075/meta.yaml>`_

   


.. conda:package:: perl-test2

   |downloads_perl-test2| |docker_perl-test2|

   :versions:
      
      

      ``1.302075-2``,  ``1.302075-1``,  ``1.302075-0``

      

   
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

      mamba install perl-test2

   and update with::

      mamba update perl-test2

  To create a new environment, run::

      mamba create --name myenvname perl-test2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test2:<tag>

   (see `perl-test2/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test2| image:: https://img.shields.io/conda/dn/bioconda/perl-test2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test2
   :alt:   (downloads)
.. |docker_perl-test2| image:: https://quay.io/repository/biocontainers/perl-test2/status
   :target: https://quay.io/repository/biocontainers/perl-test2
.. _`perl-test2/tags`: https://quay.io/repository/biocontainers/perl-test2?tab=tags


.. raw:: html

    <script>
        var package = "perl-test2";
        var versions = ["1.302075","1.302075","1.302075"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test2/README.html