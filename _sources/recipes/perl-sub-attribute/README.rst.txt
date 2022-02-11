:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-attribute'
.. highlight: bash

perl-sub-attribute
==================

.. conda:recipe:: perl-sub-attribute
   :replaces_section_title:
   :noindex:

   Reliable subroutine attribute handlers

   :homepage: http://metacpan.org/pod/Sub::Attribute
   :license: perl_5
   :recipe: /`perl-sub-attribute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute/meta.yaml>`_

   


.. conda:package:: perl-sub-attribute

   |downloads_perl-sub-attribute| |docker_perl-sub-attribute|

   :versions:
      
      

      ``0.05-3``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-attribute

   and update with::

      conda update perl-sub-attribute

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-attribute:<tag>

   (see `perl-sub-attribute/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-attribute| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-attribute.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-attribute
   :alt:   (downloads)
.. |docker_perl-sub-attribute| image:: https://quay.io/repository/biocontainers/perl-sub-attribute/status
   :target: https://quay.io/repository/biocontainers/perl-sub-attribute
.. _`perl-sub-attribute/tags`: https://quay.io/repository/biocontainers/perl-sub-attribute?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-attribute";
        var versions = ["0.05","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-attribute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-attribute/README.html