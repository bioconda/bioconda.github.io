:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-load-conditional'
.. highlight: bash

perl-module-load-conditional
============================

.. conda:recipe:: perl-module-load-conditional/0.62
   :replaces_section_title:
   :noindex:

   Looking up module information \/ loading at runtime

   :homepage: http://metacpan.org/pod/Module::Load::Conditional
   :license: perl_5
   :recipe: /`perl-module-load-conditional <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional>`_/`0.62 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.62>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.62/meta.yaml>`_

   


.. conda:package:: perl-module-load-conditional

   |downloads_perl-module-load-conditional| |docker_perl-module-load-conditional|

   :versions:
      
      

      ``0.68-2``,  ``0.68-1``,  ``0.68-0``,  ``0.62-1``,  ``0.62-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-locale-maketext-simple: 
   :depends perl-module-corelist: 
   :depends perl-module-load: 
   :depends perl-module-metadata: ``>=1.000005``
   :depends perl-params-check: 
   :depends perl-version: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-load-conditional

   and update with::

      conda update perl-module-load-conditional

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-load-conditional:<tag>

   (see `perl-module-load-conditional/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-load-conditional| image:: https://img.shields.io/conda/dn/bioconda/perl-module-load-conditional.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-load-conditional
   :alt:   (downloads)
.. |docker_perl-module-load-conditional| image:: https://quay.io/repository/biocontainers/perl-module-load-conditional/status
   :target: https://quay.io/repository/biocontainers/perl-module-load-conditional
.. _`perl-module-load-conditional/tags`: https://quay.io/repository/biocontainers/perl-module-load-conditional?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-load-conditional/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-load-conditional/README.html