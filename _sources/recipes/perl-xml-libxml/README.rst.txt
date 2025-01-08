:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-libxml'
.. highlight: bash

perl-xml-libxml
===============

.. conda:recipe:: perl-xml-libxml
   :replaces_section_title:
   :noindex:

   Interface to Gnome libxml2 xml parsing and DOM library

   :homepage: https://bitbucket.org/shlomif/perl-xml-libxml
   :license: Perl
   :recipe: /`perl-xml-libxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml/meta.yaml>`_

   


.. conda:package:: perl-xml-libxml

   |downloads_perl-xml-libxml| |docker_perl-xml-libxml|

   :versions:
      
      

      ``2.0210-0``,  ``2.0207-0``,  ``2.0132-3``,  ``2.0132-2``,  ``2.0132-1``,  ``2.0132-0``,  ``2.0124-0``

      

   
   :depends libgcc: ``>=13``
   :depends libxml2: ``>=2.13.5,<3.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-alien-build: ``>=2.84,<3.0a0``
   :depends perl-alien-libxml2: ``>=0.17,<0.18.0a0``
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-sax: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-xml-libxml

   and update with::

      mamba update perl-xml-libxml

  To create a new environment, run::

      mamba create --name myenvname perl-xml-libxml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-libxml:<tag>

   (see `perl-xml-libxml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-libxml| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-libxml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-libxml
   :alt:   (downloads)
.. |docker_perl-xml-libxml| image:: https://quay.io/repository/biocontainers/perl-xml-libxml/status
   :target: https://quay.io/repository/biocontainers/perl-xml-libxml
.. _`perl-xml-libxml/tags`: https://quay.io/repository/biocontainers/perl-xml-libxml?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-libxml";
        var versions = ["2.0210","2.0207","2.0132","2.0132","2.0132"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-libxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-libxml/README.html