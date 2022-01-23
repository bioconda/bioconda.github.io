:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-return-multilevel'
.. highlight: bash

perl-return-multilevel
======================

.. conda:recipe:: perl-return-multilevel
   :replaces_section_title:
   :noindex:

   return across multiple call levels

   :homepage: http://metacpan.org/pod/Return::MultiLevel
   :license: perl_5
   :recipe: /`perl-return-multilevel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-return-multilevel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-return-multilevel/meta.yaml>`_

   


.. conda:package:: perl-return-multilevel

   |downloads_perl-return-multilevel| |docker_perl-return-multilevel|

   :versions:
      
      

      ``0.05-1``,  ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-data-munge: 
   :depends perl-exporter: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-return-multilevel

   and update with::

      conda update perl-return-multilevel

   or use the docker container::

      docker pull quay.io/biocontainers/perl-return-multilevel:<tag>

   (see `perl-return-multilevel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-return-multilevel| image:: https://img.shields.io/conda/dn/bioconda/perl-return-multilevel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-return-multilevel
   :alt:   (downloads)
.. |docker_perl-return-multilevel| image:: https://quay.io/repository/biocontainers/perl-return-multilevel/status
   :target: https://quay.io/repository/biocontainers/perl-return-multilevel
.. _`perl-return-multilevel/tags`: https://quay.io/repository/biocontainers/perl-return-multilevel?tab=tags


.. raw:: html

    <script>
        var package = "perl-return-multilevel";
        var versions = ["0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-return-multilevel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-return-multilevel/README.html