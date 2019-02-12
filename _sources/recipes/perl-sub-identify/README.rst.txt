:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-identify'
.. highlight: bash

perl-sub-identify
=================

.. conda:recipe:: perl-sub-identify/0.12
   :replaces_section_title:

   Retrieve names of code references

   :homepage: http://metacpan.org/pod/Sub::Identify
   :license: perl_5
   :recipe: /`perl-sub-identify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-identify>`_/`0.12 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-identify/0.12>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-identify/0.12/meta.yaml>`_

   


.. conda:package:: perl-sub-identify

   |downloads_perl-sub-identify| |docker_perl-sub-identify|

   :versions: 0.12-1, 0.12-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-identify

   and update with::

      conda update perl-sub-identify

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sub-identify:<tag>

   (see `perl-sub-identify/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-identify| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-identify.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-identify| image:: https://quay.io/repository/biocontainers/perl-sub-identify/status
   :target: https://quay.io/repository/biocontainers/perl-sub-identify
.. _`perl-sub-identify/tags`: https://quay.io/repository/biocontainers/perl-sub-identify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-identify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-identify/README.html