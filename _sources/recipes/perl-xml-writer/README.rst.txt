:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-writer'
.. highlight: bash

perl-xml-writer
===============

.. conda:recipe:: perl-xml-writer
   :replaces_section_title:
   :noindex:

   Easily generate well\-formed\, namespace\-aware XML.

   :homepage: http://metacpan.org/pod/XML-Writer
   :license: unrestricted
   :recipe: /`perl-xml-writer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-writer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-writer/meta.yaml>`_

   


.. conda:package:: perl-xml-writer

   |downloads_perl-xml-writer| |docker_perl-xml-writer|

   :versions:
      
      

      ``0.900-0``,  ``0.625-3``,  ``0.625-2``,  ``0.625-1``,  ``0.625-0``

      

   
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

      mamba install perl-xml-writer

   and update with::

      mamba update perl-xml-writer

  To create a new environment, run::

      mamba create --name myenvname perl-xml-writer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-writer:<tag>

   (see `perl-xml-writer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-writer| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-writer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-writer
   :alt:   (downloads)
.. |docker_perl-xml-writer| image:: https://quay.io/repository/biocontainers/perl-xml-writer/status
   :target: https://quay.io/repository/biocontainers/perl-xml-writer
.. _`perl-xml-writer/tags`: https://quay.io/repository/biocontainers/perl-xml-writer?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-writer";
        var versions = ["0.900","0.625","0.625","0.625","0.625"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-writer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-writer/README.html