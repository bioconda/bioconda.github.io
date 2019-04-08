:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mac-propertylist'
.. highlight: bash

perl-mac-propertylist
=====================

.. conda:recipe:: perl-mac-propertylist
   :replaces_section_title:

   work with Mac plists at a low level

   :homepage: https://github.com/briandfoy/mac-propertylist
   :license: artistic_2
   :recipe: /`perl-mac-propertylist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist/meta.yaml>`_

   


.. conda:package:: perl-mac-propertylist

   |downloads_perl-mac-propertylist| |docker_perl-mac-propertylist|

   :versions: 1.413-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-math-bigint: 
   :depends perl-mime-base64: 
   :depends perl-parent: 
   :depends perl-time-local: 
   :depends perl-xml-entities: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mac-propertylist

   and update with::

      conda update perl-mac-propertylist

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mac-propertylist:<tag>

   (see `perl-mac-propertylist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mac-propertylist| image:: https://img.shields.io/conda/dn/bioconda/perl-mac-propertylist.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mac-propertylist| image:: https://quay.io/repository/biocontainers/perl-mac-propertylist/status
   :target: https://quay.io/repository/biocontainers/perl-mac-propertylist
.. _`perl-mac-propertylist/tags`: https://quay.io/repository/biocontainers/perl-mac-propertylist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mac-propertylist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mac-propertylist/README.html