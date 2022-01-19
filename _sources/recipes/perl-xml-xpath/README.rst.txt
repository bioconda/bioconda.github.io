:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-xpath'
.. highlight: bash

perl-xml-xpath
==============

.. conda:recipe:: perl-xml-xpath
   :replaces_section_title:
   :noindex:

   Parse and evaluate XPath statements.

   :homepage: http://metacpan.org/pod/XML-XPath
   :license: artistic_2
   :recipe: /`perl-xml-xpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpath/meta.yaml>`_

   


.. conda:package:: perl-xml-xpath

   |downloads_perl-xml-xpath| |docker_perl-xml-xpath|

   :versions:
      
      

      ``1.44-1``,  ``1.44-0``,  ``1.33-1``,  ``1.33-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-parser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-xpath

   and update with::

      conda update perl-xml-xpath

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-xpath:<tag>

   (see `perl-xml-xpath/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-xpath| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-xpath.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-xpath
   :alt:   (downloads)
.. |docker_perl-xml-xpath| image:: https://quay.io/repository/biocontainers/perl-xml-xpath/status
   :target: https://quay.io/repository/biocontainers/perl-xml-xpath
.. _`perl-xml-xpath/tags`: https://quay.io/repository/biocontainers/perl-xml-xpath?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-xpath";
        var versions = ["1.44","1.44","1.33","1.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-xpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-xpath/README.html