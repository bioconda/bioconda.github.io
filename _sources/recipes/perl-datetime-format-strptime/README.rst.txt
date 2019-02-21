:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-format-strptime'
.. highlight: bash

perl-datetime-format-strptime
=============================

.. conda:recipe:: perl-datetime-format-strptime
   :replaces_section_title:

   Parse and format strp and strf time patterns

   :homepage: http://metacpan.org/release/DateTime-Format-Strptime
   :license: artistic_2
   :recipe: /`perl-datetime-format-strptime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime/meta.yaml>`_

   


.. conda:package:: perl-datetime-format-strptime

   |downloads_perl-datetime-format-strptime| |docker_perl-datetime-format-strptime|

   :versions: 1.75-0, 1.73-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-constant: 
   
   :depends perl-datetime: 
   
   :depends perl-datetime-locale: >=1.05
   
   :depends perl-datetime-timezone: 
   
   :depends perl-exporter: 
   
   :depends perl-package-deprecationmanager: 
   
   :depends perl-params-validationcompiler: 
   
   :depends perl-parent: 
   
   :depends perl-specio: 
   
   :depends perl-try-tiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime-format-strptime

   and update with::

      conda update perl-datetime-format-strptime

   or use the docker container::

      docker pull quay.io/biocontainers/perl-datetime-format-strptime:<tag>

   (see `perl-datetime-format-strptime/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-datetime-format-strptime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-format-strptime.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-datetime-format-strptime| image:: https://quay.io/repository/biocontainers/perl-datetime-format-strptime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-format-strptime
.. _`perl-datetime-format-strptime/tags`: https://quay.io/repository/biocontainers/perl-datetime-format-strptime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html