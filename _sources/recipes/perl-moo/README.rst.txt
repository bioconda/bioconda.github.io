:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moo'
.. highlight: bash

perl-moo
========

.. conda:recipe:: perl-moo
   :replaces_section_title:

   Minimalist Object Orientation \(with Moose compatibility\)

   :homepage: http://metacpan.org/pod/Moo
   :license: perl_5
   :recipe: /`perl-moo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moo/meta.yaml>`_

   


.. conda:package:: perl-moo

   |downloads_perl-moo| |docker_perl-moo|

   :versions: 2.003004-0, 2.001000-2, 2.001000-1, 2.001000-0, 2.000002-1, 2.000002-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-class-method-modifiers: 
   
   :depends perl-devel-globaldestruction: 
   
   :depends perl-exporter: 
   
   :depends perl-module-runtime: 
   
   :depends perl-moose: 
   
   :depends perl-role-tiny: 
   
   :depends perl-sub-quote: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moo

   and update with::

      conda update perl-moo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moo:<tag>

   (see `perl-moo/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moo| image:: https://img.shields.io/conda/dn/bioconda/perl-moo.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moo| image:: https://quay.io/repository/biocontainers/perl-moo/status
   :target: https://quay.io/repository/biocontainers/perl-moo
.. _`perl-moo/tags`: https://quay.io/repository/biocontainers/perl-moo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moo/README.html