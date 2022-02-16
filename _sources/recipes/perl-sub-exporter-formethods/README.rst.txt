:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-exporter-formethods'
.. highlight: bash

perl-sub-exporter-formethods
============================

.. conda:recipe:: perl-sub-exporter-formethods
   :replaces_section_title:
   :noindex:

   helper routines for using Sub\:\:Exporter to build methods

   :homepage: https://github.com/rjbs/Sub-Exporter-ForMethods
   :license: perl_5
   :recipe: /`perl-sub-exporter-formethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-formethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-formethods/meta.yaml>`_

   


.. conda:package:: perl-sub-exporter-formethods

   |downloads_perl-sub-exporter-formethods| |docker_perl-sub-exporter-formethods|

   :versions:
      
      

      ``0.100054-0``,  ``0.100052-2``,  ``0.100052-1``,  ``0.100052-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-scalar-list-utils: 
   :depends perl-sub-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-exporter-formethods

   and update with::

      conda update perl-sub-exporter-formethods

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-exporter-formethods:<tag>

   (see `perl-sub-exporter-formethods/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-exporter-formethods| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-exporter-formethods.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-exporter-formethods
   :alt:   (downloads)
.. |docker_perl-sub-exporter-formethods| image:: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods/status
   :target: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods
.. _`perl-sub-exporter-formethods/tags`: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-exporter-formethods";
        var versions = ["0.100054","0.100052","0.100052","0.100052"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-exporter-formethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-exporter-formethods/README.html