:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-simple'
.. highlight: bash

perl-xml-simple
===============

.. conda:recipe:: perl-xml-simple
   :replaces_section_title:
   :noindex:

   An API for simple XML files

   :homepage: http://metacpan.org/pod/XML-Simple
   :license: perl_5
   :recipe: /`perl-xml-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple/meta.yaml>`_

   


.. conda:package:: perl-xml-simple

   |downloads_perl-xml-simple| |docker_perl-xml-simple|

   :versions:
      
      

      ``2.25-2``,  ``2.25-1``,  ``2.25-0``,  ``2.22-3``,  ``2.22-2``,  ``2.22-1``,  ``2.22-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-expat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-simple

   and update with::

      conda update perl-xml-simple

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-simple:<tag>

   (see `perl-xml-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-simple
   :alt:   (downloads)
.. |docker_perl-xml-simple| image:: https://quay.io/repository/biocontainers/perl-xml-simple/status
   :target: https://quay.io/repository/biocontainers/perl-xml-simple
.. _`perl-xml-simple/tags`: https://quay.io/repository/biocontainers/perl-xml-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-simple";
        var versions = ["2.25","2.25","2.25","2.22","2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-simple/README.html