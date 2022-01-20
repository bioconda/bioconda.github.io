:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-sax-expat'
.. highlight: bash

perl-xml-sax-expat
==================

.. conda:recipe:: perl-xml-sax-expat
   :replaces_section_title:
   :noindex:

   SAX Driver for Expat

   :homepage: http://metacpan.org/pod/XML-SAX-Expat
   :license: perl_5
   :recipe: /`perl-xml-sax-expat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-expat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-expat/meta.yaml>`_

   


.. conda:package:: perl-xml-sax-expat

   |downloads_perl-xml-sax-expat| |docker_perl-xml-sax-expat|

   :versions:
      
      

      ``0.51-4``,  ``0.51-3``,  ``0.51-2``,  ``0.51-1``,  ``0.51-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-parser: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-sax-expat

   and update with::

      conda update perl-xml-sax-expat

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-sax-expat:<tag>

   (see `perl-xml-sax-expat/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-sax-expat| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax-expat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-sax-expat
   :alt:   (downloads)
.. |docker_perl-xml-sax-expat| image:: https://quay.io/repository/biocontainers/perl-xml-sax-expat/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax-expat
.. _`perl-xml-sax-expat/tags`: https://quay.io/repository/biocontainers/perl-xml-sax-expat?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-sax-expat";
        var versions = ["0.51","0.51","0.51","0.51","0.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax-expat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax-expat/README.html