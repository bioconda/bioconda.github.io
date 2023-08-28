:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-inspector'
.. highlight: bash

perl-class-inspector
====================

.. conda:recipe:: perl-class-inspector
   :replaces_section_title:
   :noindex:

   Get information about a class and its structure

   :homepage: http://metacpan.org/pod/Class-Inspector
   :license: perl_5
   :recipe: /`perl-class-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-inspector/meta.yaml>`_

   


.. conda:package:: perl-class-inspector

   |downloads_perl-class-inspector| |docker_perl-class-inspector|

   :versions:
      
      

      ``1.36-0``,  ``1.34-1``,  ``1.34-0``,  ``1.32-1``,  ``1.32-0``,  ``1.28-2``,  ``1.28-1``,  ``1.28-0``

      

   
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

      mamba install perl-class-inspector

   and update with::

      mamba update perl-class-inspector

  To create a new environment, run::

      mamba create --name myenvname perl-class-inspector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-inspector:<tag>

   (see `perl-class-inspector/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-inspector| image:: https://img.shields.io/conda/dn/bioconda/perl-class-inspector.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-inspector
   :alt:   (downloads)
.. |docker_perl-class-inspector| image:: https://quay.io/repository/biocontainers/perl-class-inspector/status
   :target: https://quay.io/repository/biocontainers/perl-class-inspector
.. _`perl-class-inspector/tags`: https://quay.io/repository/biocontainers/perl-class-inspector?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-inspector";
        var versions = ["1.36","1.34","1.34","1.32","1.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-inspector/README.html