:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-predicate'
.. highlight: bash

perl-data-predicate
===================

.. conda:recipe:: perl-data-predicate
   :replaces_section_title:
   :noindex:

   Predicates are a way of composing logic so it eventually reports a true\/false for a given value

   :homepage: http://metacpan.org/pod/Data::Predicate
   :license: BSD
   :recipe: /`perl-data-predicate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-predicate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-predicate/meta.yaml>`_

   


.. conda:package:: perl-data-predicate

   |downloads_perl-data-predicate| |docker_perl-data-predicate|

   :versions:
      
      

      ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-readonly: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-predicate

   and update with::

      conda update perl-data-predicate

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-predicate:<tag>

   (see `perl-data-predicate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-predicate| image:: https://img.shields.io/conda/dn/bioconda/perl-data-predicate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-predicate
   :alt:   (downloads)
.. |docker_perl-data-predicate| image:: https://quay.io/repository/biocontainers/perl-data-predicate/status
   :target: https://quay.io/repository/biocontainers/perl-data-predicate
.. _`perl-data-predicate/tags`: https://quay.io/repository/biocontainers/perl-data-predicate?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-predicate";
        var versions = ["2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-predicate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-predicate/README.html