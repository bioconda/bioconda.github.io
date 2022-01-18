:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-exporter-progressive'
.. highlight: bash

perl-sub-exporter-progressive
=============================

.. conda:recipe:: perl-sub-exporter-progressive
   :replaces_section_title:
   :noindex:

   Only use Sub\:\:Exporter if you need it

   :homepage: http://search.cpan.org/dist/Sub-Exporter-Progressive/
   :license: perl_5
   :recipe: /`perl-sub-exporter-progressive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-progressive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-progressive/meta.yaml>`_

   


.. conda:package:: perl-sub-exporter-progressive

   |downloads_perl-sub-exporter-progressive| |docker_perl-sub-exporter-progressive|

   :versions:
      
      

      ``0.001013-1``,  ``0.001013-0``,  ``0.001011-3``,  ``0.001011-2``,  ``0.001011-1``,  ``0.001011-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-exporter-progressive

   and update with::

      conda update perl-sub-exporter-progressive

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-exporter-progressive:<tag>

   (see `perl-sub-exporter-progressive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-exporter-progressive| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-exporter-progressive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-exporter-progressive
   :alt:   (downloads)
.. |docker_perl-sub-exporter-progressive| image:: https://quay.io/repository/biocontainers/perl-sub-exporter-progressive/status
   :target: https://quay.io/repository/biocontainers/perl-sub-exporter-progressive
.. _`perl-sub-exporter-progressive/tags`: https://quay.io/repository/biocontainers/perl-sub-exporter-progressive?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-exporter-progressive";
        var versions = ["0.001013","0.001013","0.001011","0.001011","0.001011"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-exporter-progressive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-exporter-progressive/README.html