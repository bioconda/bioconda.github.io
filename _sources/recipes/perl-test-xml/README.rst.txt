:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-xml'
.. highlight: bash

perl-test-xml
=============

.. conda:recipe:: perl-test-xml
   :replaces_section_title:
   :noindex:

   Compare XML in perl tests

   :homepage: http://metacpan.org/pod/Test-XML
   :license: perl_5
   :recipe: /`perl-test-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml/meta.yaml>`_

   


.. conda:package:: perl-test-xml

   |downloads_perl-test-xml| |docker_perl-test-xml|

   :versions:
      
      

      ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-parser: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-writer: 
   :depends perl-xml-semanticdiff: 
   :depends perl-xml-twig: 
   :depends perl-xml-xpath: 
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

      mamba install perl-test-xml

   and update with::

      mamba update perl-test-xml

  To create a new environment, run::

      mamba create --name myenvname perl-test-xml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-xml:<tag>

   (see `perl-test-xml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-xml| image:: https://img.shields.io/conda/dn/bioconda/perl-test-xml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-xml
   :alt:   (downloads)
.. |docker_perl-test-xml| image:: https://quay.io/repository/biocontainers/perl-test-xml/status
   :target: https://quay.io/repository/biocontainers/perl-test-xml
.. _`perl-test-xml/tags`: https://quay.io/repository/biocontainers/perl-test-xml?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-xml";
        var versions = ["0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-xml/README.html