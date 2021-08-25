:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdgraph-histogram'
.. highlight: bash

perl-gdgraph-histogram
======================

.. conda:recipe:: perl-gdgraph-histogram
   :replaces_section_title:
   :noindex:

   Histogram plotting module for Perl5

   :homepage: http://metacpan.org/pod/GDGraph-histogram
   :license: unknown
   :recipe: /`perl-gdgraph-histogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph-histogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph-histogram/meta.yaml>`_

   


.. conda:package:: perl-gdgraph-histogram

   |downloads_perl-gdgraph-histogram| |docker_perl-gdgraph-histogram|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgd: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-gdgraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gdgraph-histogram

   and update with::

      conda update perl-gdgraph-histogram

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gdgraph-histogram:<tag>

   (see `perl-gdgraph-histogram/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gdgraph-histogram| image:: https://img.shields.io/conda/dn/bioconda/perl-gdgraph-histogram.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gdgraph-histogram
   :alt:   (downloads)
.. |docker_perl-gdgraph-histogram| image:: https://quay.io/repository/biocontainers/perl-gdgraph-histogram/status
   :target: https://quay.io/repository/biocontainers/perl-gdgraph-histogram
.. _`perl-gdgraph-histogram/tags`: https://quay.io/repository/biocontainers/perl-gdgraph-histogram?tab=tags


.. raw:: html

    <script>
        var package = "perl-gdgraph-histogram";
        var versions = ["1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdgraph-histogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdgraph-histogram/README.html