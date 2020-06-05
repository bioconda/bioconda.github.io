:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-pluggable'
.. highlight: bash

perl-module-pluggable
=====================

.. conda:recipe:: perl-module-pluggable
   :replaces_section_title:
   :noindex:

   automatically give your module the ability to have plugins

   :homepage: http://metacpan.org/pod/Module::Pluggable
   :license: perl_5
   :recipe: /`perl-module-pluggable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-pluggable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-pluggable/meta.yaml>`_

   


.. conda:package:: perl-module-pluggable

   |downloads_perl-module-pluggable| |docker_perl-module-pluggable|

   :versions:
      
      

      ``5.2-1``,  ``5.2-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-pluggable

   and update with::

      conda update perl-module-pluggable

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-pluggable:<tag>

   (see `perl-module-pluggable/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-pluggable| image:: https://img.shields.io/conda/dn/bioconda/perl-module-pluggable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-pluggable
   :alt:   (downloads)
.. |docker_perl-module-pluggable| image:: https://quay.io/repository/biocontainers/perl-module-pluggable/status
   :target: https://quay.io/repository/biocontainers/perl-module-pluggable
.. _`perl-module-pluggable/tags`: https://quay.io/repository/biocontainers/perl-module-pluggable?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-pluggable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-pluggable/README.html