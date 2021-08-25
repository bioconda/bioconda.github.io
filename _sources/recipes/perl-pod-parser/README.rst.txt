:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-parser'
.. highlight: bash

perl-pod-parser
===============

.. conda:recipe:: perl-pod-parser/1.63
   :replaces_section_title:
   :noindex:

   Modules for parsing\/translating POD format documents

   :homepage: http://metacpan.org/pod/Pod::Parser
   :license: unknown
   :recipe: /`perl-pod-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser>`_/`1.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser/1.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser/1.63/meta.yaml>`_

   


.. conda:package:: perl-pod-parser

   |downloads_perl-pod-parser| |docker_perl-pod-parser|

   :versions:
      
      

      ``1.63-1``,  ``1.63-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-app-cpanminus: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-parser

   and update with::

      conda update perl-pod-parser

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-parser:<tag>

   (see `perl-pod-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-parser
   :alt:   (downloads)
.. |docker_perl-pod-parser| image:: https://quay.io/repository/biocontainers/perl-pod-parser/status
   :target: https://quay.io/repository/biocontainers/perl-pod-parser
.. _`perl-pod-parser/tags`: https://quay.io/repository/biocontainers/perl-pod-parser?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-parser";
        var versions = ["1.63","1.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-parser/README.html