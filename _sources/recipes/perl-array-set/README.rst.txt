:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-set'
.. highlight: bash

perl-array-set
==============

.. conda:recipe:: perl-array-set
   :replaces_section_title:
   :noindex:

   Perform set operations on arrays

   :homepage: https://metacpan.org/release/Array-Set
   :license: perl_5
   :recipe: /`perl-array-set <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set/meta.yaml>`_

   


.. conda:package:: perl-array-set

   |downloads_perl-array-set| |docker_perl-array-set|

   :versions:
      
      

      ``0.063-0``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: ``>=5.57``
   :depends perl-storable: ``>=3.08``
   :depends perl-tie-ixhash: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-array-set

   and update with::

      conda update perl-array-set

   or use the docker container::

      docker pull quay.io/biocontainers/perl-array-set:<tag>

   (see `perl-array-set/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-set| image:: https://img.shields.io/conda/dn/bioconda/perl-array-set.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-set
   :alt:   (downloads)
.. |docker_perl-array-set| image:: https://quay.io/repository/biocontainers/perl-array-set/status
   :target: https://quay.io/repository/biocontainers/perl-array-set
.. _`perl-array-set/tags`: https://quay.io/repository/biocontainers/perl-array-set?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-set";
        var versions = ["0.063","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-set/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-set/README.html