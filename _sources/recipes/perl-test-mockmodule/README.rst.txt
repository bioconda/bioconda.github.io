:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-mockmodule'
.. highlight: bash

perl-test-mockmodule
====================

.. conda:recipe:: perl-test-mockmodule
   :replaces_section_title:

   Override subroutines in a module for unit testing

   :homepage: https://github.com/geofffranks/test-mockmodule
   :license: gpl_3
   :recipe: /`perl-test-mockmodule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule/meta.yaml>`_

   


.. conda:package:: perl-test-mockmodule

   |downloads_perl-test-mockmodule| |docker_perl-test-mockmodule|

   :versions: 0.13-2, 0.13-1, 0.13-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-super: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-mockmodule

   and update with::

      conda update perl-test-mockmodule

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-mockmodule:<tag>

   (see `perl-test-mockmodule/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-mockmodule| image:: https://img.shields.io/conda/dn/bioconda/perl-test-mockmodule.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-mockmodule| image:: https://quay.io/repository/biocontainers/perl-test-mockmodule/status
   :target: https://quay.io/repository/biocontainers/perl-test-mockmodule
.. _`perl-test-mockmodule/tags`: https://quay.io/repository/biocontainers/perl-test-mockmodule?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-mockmodule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-mockmodule/README.html