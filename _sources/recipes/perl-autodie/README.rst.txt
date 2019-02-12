:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-autodie'
.. highlight: bash

perl-autodie
============

.. conda:recipe:: perl-autodie
   :replaces_section_title:

   Replace functions with ones that succeed or die with lexical scope

   :homepage: http://metacpan.org/pod/autodie
   :license: perl_5
   :recipe: /`perl-autodie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie/meta.yaml>`_

   


.. conda:package:: perl-autodie

   |downloads_perl-autodie| |docker_perl-autodie|

   :versions: 2.29-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-constant: 
   
   :depends perl-exporter: 
   
   :depends perl-parent: 
   
   :depends perl-tie-refhash: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-autodie

   and update with::

      conda update perl-autodie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-autodie:<tag>

   (see `perl-autodie/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-autodie| image:: https://img.shields.io/conda/dn/bioconda/perl-autodie.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-autodie| image:: https://quay.io/repository/biocontainers/perl-autodie/status
   :target: https://quay.io/repository/biocontainers/perl-autodie
.. _`perl-autodie/tags`: https://quay.io/repository/biocontainers/perl-autodie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autodie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autodie/README.html