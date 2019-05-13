:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-object'
.. highlight: bash

perl-test-object
================

.. conda:recipe:: perl-test-object/0.08
   :replaces_section_title:

   Thoroughly testing objects via registered handlers

   :homepage: https://github.com/karenetheridge/Test-Object
   :license: perl_5
   :recipe: /`perl-test-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object>`_/`0.08 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08/meta.yaml>`_

   


.. conda:package:: perl-test-object

   |downloads_perl-test-object| |docker_perl-test-object|

   :versions: 0.08-2, 0.08-1, 0.08-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-object

   and update with::

      conda update perl-test-object

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-object:<tag>

   (see `perl-test-object/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-object| image:: https://img.shields.io/conda/dn/bioconda/perl-test-object.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-object
   :alt:   (downloads)
.. |docker_perl-test-object| image:: https://quay.io/repository/biocontainers/perl-test-object/status
   :target: https://quay.io/repository/biocontainers/perl-test-object
.. _`perl-test-object/tags`: https://quay.io/repository/biocontainers/perl-test-object?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-object/README.html