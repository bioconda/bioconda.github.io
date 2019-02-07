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

   :versions: 2.29

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-exporter`  :conda:package:`perl-parent`  :conda:package:`perl-tie-refhash`  

   :required~by: |required_by_perl-autodie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-autodie

   and update with::

      conda update perl-autodie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-autodie


.. |required_by_perl-autodie| conda:required_by:: perl-autodie
.. |downloads_perl-autodie| image:: https://img.shields.io/conda/dn/bioconda/perl-autodie.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-autodie| image:: https://quay.io/repository/biocontainers/perl-autodie/status
   :target: https://quay.io/repository/biocontainers/perl-autodie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autodie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autodie/README.html

