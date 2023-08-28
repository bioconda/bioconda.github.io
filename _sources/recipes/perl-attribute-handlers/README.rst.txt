:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-attribute-handlers'
.. highlight: bash

perl-attribute-handlers
=======================

.. conda:recipe:: perl-attribute-handlers/0.96
   :replaces_section_title:
   :noindex:

   Simpler definition of attribute handlers

   :homepage: http://metacpan.org/pod/Attribute::Handlers
   :license: perl_5
   :recipe: /`perl-attribute-handlers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-attribute-handlers>`_/`0.96 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-attribute-handlers/0.96>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-attribute-handlers/0.96/meta.yaml>`_

   


.. conda:package:: perl-attribute-handlers

   |downloads_perl-attribute-handlers| |docker_perl-attribute-handlers|

   :versions:
      
      

      ``0.96-3``,  ``0.96-2``,  ``0.96-1``,  ``0.96-0``

      

   
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

      mamba install perl-attribute-handlers

   and update with::

      mamba update perl-attribute-handlers

  To create a new environment, run::

      mamba create --name myenvname perl-attribute-handlers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-attribute-handlers:<tag>

   (see `perl-attribute-handlers/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-attribute-handlers| image:: https://img.shields.io/conda/dn/bioconda/perl-attribute-handlers.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-attribute-handlers
   :alt:   (downloads)
.. |docker_perl-attribute-handlers| image:: https://quay.io/repository/biocontainers/perl-attribute-handlers/status
   :target: https://quay.io/repository/biocontainers/perl-attribute-handlers
.. _`perl-attribute-handlers/tags`: https://quay.io/repository/biocontainers/perl-attribute-handlers?tab=tags


.. raw:: html

    <script>
        var package = "perl-attribute-handlers";
        var versions = ["0.96","0.96","0.96","0.96"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-attribute-handlers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-attribute-handlers/README.html