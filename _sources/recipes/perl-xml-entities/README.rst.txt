:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-entities'
.. highlight: bash

perl-xml-entities
=================

.. conda:recipe:: perl-xml-entities
   :replaces_section_title:
   :noindex:

   Mapping of XML entities to Unicode

   :homepage: http://metacpan.org/pod/XML::Entities
   :license: perl_5
   :recipe: /`perl-xml-entities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-entities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-entities/meta.yaml>`_

   


.. conda:package:: perl-xml-entities

   |downloads_perl-xml-entities| |docker_perl-xml-entities|

   :versions:
      
      

      ``1.0002-2``,  ``1.0002-1``,  ``1.0002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
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

      mamba install perl-xml-entities

   and update with::

      mamba update perl-xml-entities

  To create a new environment, run::

      mamba create --name myenvname perl-xml-entities

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-entities:<tag>

   (see `perl-xml-entities/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-entities| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-entities.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-entities
   :alt:   (downloads)
.. |docker_perl-xml-entities| image:: https://quay.io/repository/biocontainers/perl-xml-entities/status
   :target: https://quay.io/repository/biocontainers/perl-xml-entities
.. _`perl-xml-entities/tags`: https://quay.io/repository/biocontainers/perl-xml-entities?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-entities";
        var versions = ["1.0002","1.0002","1.0002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-entities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-entities/README.html