:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tree'
.. highlight: bash

perl-html-tree
==============

.. conda:recipe:: perl-html-tree
   :replaces_section_title:
   :noindex:

   Work with HTML in a DOM\-like tree structure

   :homepage: http://metacpan.org/pod/HTML::Tree
   :license: perl_5
   :recipe: /`perl-html-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree/meta.yaml>`_

   


.. conda:package:: perl-html-tree

   |downloads_perl-html-tree| |docker_perl-html-tree|

   :versions:
      
      

      ``5.07-1``,  ``5.07-0``,  ``5.03-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-html-parser: 
   :depends perl-html-tagset: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-tree

   and update with::

      conda update perl-html-tree

   or use the docker container::

      docker pull quay.io/biocontainers/perl-html-tree:<tag>

   (see `perl-html-tree/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tree| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tree
   :alt:   (downloads)
.. |docker_perl-html-tree| image:: https://quay.io/repository/biocontainers/perl-html-tree/status
   :target: https://quay.io/repository/biocontainers/perl-html-tree
.. _`perl-html-tree/tags`: https://quay.io/repository/biocontainers/perl-html-tree?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tree";
        var versions = ["5.07","5.07","5.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tree/README.html