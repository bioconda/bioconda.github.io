:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-parser'
.. highlight: bash

perl-html-parser
================

.. conda:recipe:: perl-html-parser
   :replaces_section_title:
   :noindex:

   HTML parser class

   :homepage: http://metacpan.org/pod/HTML::Parser
   :license: perl_5
   :recipe: /`perl-html-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-parser/meta.yaml>`_

   


.. conda:package:: perl-html-parser

   |downloads_perl-html-parser| |docker_perl-html-parser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.80-0</code>,  <code>3.79-0</code>,  <code>3.78-0</code>,  <code>3.72-8</code>,  <code>3.72-7</code>,  <code>3.72-5</code>,  <code>3.72-4</code>,  <code>3.72-3</code>,  <code>3.72-2</code>,  </span></summary>
      

      ``3.80-0``,  ``3.79-0``,  ``3.78-0``,  ``3.72-8``,  ``3.72-7``,  ``3.72-5``,  ``3.72-4``,  ``3.72-3``,  ``3.72-2``,  ``3.72-1``,  ``3.72-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-html-tagset: 
   :depends perl-http-message: 
   :depends perl-uri: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-parser

   and update with::

      conda update perl-html-parser

   or use the docker container::

      docker pull quay.io/biocontainers/perl-html-parser:<tag>

   (see `perl-html-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-html-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-parser
   :alt:   (downloads)
.. |docker_perl-html-parser| image:: https://quay.io/repository/biocontainers/perl-html-parser/status
   :target: https://quay.io/repository/biocontainers/perl-html-parser
.. _`perl-html-parser/tags`: https://quay.io/repository/biocontainers/perl-html-parser?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-parser";
        var versions = ["3.80","3.79","3.78","3.72","3.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-parser/README.html