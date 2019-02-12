:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-validate'
.. highlight: bash

perl-params-validate
====================

.. conda:recipe:: perl-params-validate
   :replaces_section_title:

   Validate method\/function parameters

   :homepage: http://metacpan.org/pod/Params-Validate
   :license: artistic_2
   :recipe: /`perl-params-validate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate/meta.yaml>`_

   


.. conda:package:: perl-params-validate

   |downloads_perl-params-validate| |docker_perl-params-validate|

   :versions: 1.29-0, 1.26-1, 1.26-0, 1.08-2, 1.08-1, 1.08-0
   
   :depends libgcc-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :depends perl-module-implementation: 
   
   :depends perl-xsloader: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-params-validate

   and update with::

      conda update perl-params-validate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-params-validate:<tag>

   (see `perl-params-validate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-validate| image:: https://img.shields.io/conda/dn/bioconda/perl-params-validate.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-params-validate| image:: https://quay.io/repository/biocontainers/perl-params-validate/status
   :target: https://quay.io/repository/biocontainers/perl-params-validate
.. _`perl-params-validate/tags`: https://quay.io/repository/biocontainers/perl-params-validate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-validate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-validate/README.html