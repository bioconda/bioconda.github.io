.. title:: Package Recipe 'perl-xml-libxslt'
.. highlight: bash


perl-xml-libxslt
================

.. conda:recipe:: perl-xml-libxslt
   :replaces_section_title:

   Interface to GNOME libxslt library

   :homepage: http://metacpan.org/pod/XML-LibXSLT
   :license: perl_5
   :recipe: /`perl-xml-libxslt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxslt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxslt/meta.yaml>`_

   


.. conda:package:: perl-xml-libxslt

   |downloads_perl-xml-libxslt| |docker_perl-xml-libxslt|

   :versions: 1.94

   :depends: :conda:package:`libxslt`  :conda:package:`perl-threaded`  :conda:package:`perl-xml-libxml`  

   :required~by: |required_by_perl-xml-libxslt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-libxslt

   and update with::

      conda update perl-xml-libxslt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-libxslt


.. |required_by_perl-xml-libxslt| conda:required_by:: perl-xml-libxslt
.. |downloads_perl-xml-libxslt| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-libxslt.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-libxslt| image:: https://quay.io/repository/biocontainers/perl-xml-libxslt/status
   :target: https://quay.io/repository/biocontainers/perl-xml-libxslt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-libxslt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-libxslt/README.html

