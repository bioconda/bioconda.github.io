:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dist-checkconflicts'
.. highlight: bash

perl-dist-checkconflicts
========================

.. conda:recipe:: perl-dist-checkconflicts
   :replaces_section_title:
   :noindex:

   declare version conflicts for your dist

   :homepage: http://metacpan.org/release/Dist-CheckConflicts
   :license: perl_5
   :recipe: /`perl-dist-checkconflicts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dist-checkconflicts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dist-checkconflicts/meta.yaml>`_

   


.. conda:package:: perl-dist-checkconflicts

   |downloads_perl-dist-checkconflicts| |docker_perl-dist-checkconflicts|

   :versions:
      
      

      ``0.11-2``,  ``0.11-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-module-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dist-checkconflicts

   and update with::

      conda update perl-dist-checkconflicts

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dist-checkconflicts:<tag>

   (see `perl-dist-checkconflicts/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dist-checkconflicts| image:: https://img.shields.io/conda/dn/bioconda/perl-dist-checkconflicts.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dist-checkconflicts
   :alt:   (downloads)
.. |docker_perl-dist-checkconflicts| image:: https://quay.io/repository/biocontainers/perl-dist-checkconflicts/status
   :target: https://quay.io/repository/biocontainers/perl-dist-checkconflicts
.. _`perl-dist-checkconflicts/tags`: https://quay.io/repository/biocontainers/perl-dist-checkconflicts?tab=tags


.. raw:: html

    <script>
        var package = "perl-dist-checkconflicts";
        var versions = ["0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dist-checkconflicts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dist-checkconflicts/README.html