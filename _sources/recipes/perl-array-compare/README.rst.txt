:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-compare'
.. highlight: bash

perl-array-compare
==================

.. conda:recipe:: perl-array-compare
   :replaces_section_title:
   :noindex:

   Perl extension for comparing arrays.

   :homepage: http://metacpan.org/pod/Array::Compare
   :license: perl_5
   :recipe: /`perl-array-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare/meta.yaml>`_

   


.. conda:package:: perl-array-compare

   |downloads_perl-array-compare| |docker_perl-array-compare|

   :versions:
      
      

      ``3.0.1-1``,  ``3.0.1-0``,  ``2.11-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-moo: 
   :depends perl-type-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-array-compare

   and update with::

      conda update perl-array-compare

   or use the docker container::

      docker pull quay.io/biocontainers/perl-array-compare:<tag>

   (see `perl-array-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-array-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-compare
   :alt:   (downloads)
.. |docker_perl-array-compare| image:: https://quay.io/repository/biocontainers/perl-array-compare/status
   :target: https://quay.io/repository/biocontainers/perl-array-compare
.. _`perl-array-compare/tags`: https://quay.io/repository/biocontainers/perl-array-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-compare";
        var versions = ["3.0.1","3.0.1","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-compare/README.html