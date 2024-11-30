:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-sax-writer'
.. highlight: bash

perl-xml-sax-writer
===================

.. conda:recipe:: perl-xml-sax-writer
   :replaces_section_title:
   :noindex:

   SAX2 XML Writer

   :homepage: https://github.com/perigrin/xml-sax-writer
   :license: perl_5
   :recipe: /`perl-xml-sax-writer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer/meta.yaml>`_

   


.. conda:package:: perl-xml-sax-writer

   |downloads_perl-xml-sax-writer| |docker_perl-xml-sax-writer|

   :versions:
      
      

      ``0.57-1``,  ``0.57-0``,  ``0.56-2``,  ``0.56-1``,  ``0.56-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-filter-buffertext: 
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-sax-base: 
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

      mamba install perl-xml-sax-writer

   and update with::

      mamba update perl-xml-sax-writer

  To create a new environment, run::

      mamba create --name myenvname perl-xml-sax-writer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-sax-writer:<tag>

   (see `perl-xml-sax-writer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-sax-writer| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax-writer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-sax-writer
   :alt:   (downloads)
.. |docker_perl-xml-sax-writer| image:: https://quay.io/repository/biocontainers/perl-xml-sax-writer/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax-writer
.. _`perl-xml-sax-writer/tags`: https://quay.io/repository/biocontainers/perl-xml-sax-writer?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-sax-writer";
        var versions = ["0.57","0.57","0.56","0.56","0.56"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html