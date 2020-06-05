:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-date-manip'
.. highlight: bash

perl-date-manip
===============

.. conda:recipe:: perl-date-manip
   :replaces_section_title:
   :noindex:

   Date manipulation routines

   :homepage: http://metacpan.org/pod/Date::Manip
   :license: perl_5
   :recipe: /`perl-date-manip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip/meta.yaml>`_

   


.. conda:package:: perl-date-manip

   |downloads_perl-date-manip| |docker_perl-date-manip|

   :versions:
      
      

      ``6.76-0``,  ``6.75-0``,  ``6.73-0``,  ``6.72-0``,  ``6.57-1``,  ``6.57-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-storable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-date-manip

   and update with::

      conda update perl-date-manip

   or use the docker container::

      docker pull quay.io/biocontainers/perl-date-manip:<tag>

   (see `perl-date-manip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-date-manip| image:: https://img.shields.io/conda/dn/bioconda/perl-date-manip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-date-manip
   :alt:   (downloads)
.. |docker_perl-date-manip| image:: https://quay.io/repository/biocontainers/perl-date-manip/status
   :target: https://quay.io/repository/biocontainers/perl-date-manip
.. _`perl-date-manip/tags`: https://quay.io/repository/biocontainers/perl-date-manip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-date-manip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-date-manip/README.html