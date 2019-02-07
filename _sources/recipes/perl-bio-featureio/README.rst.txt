.. title:: Package Recipe 'perl-bio-featureio'
.. highlight: bash


perl-bio-featureio
==================

.. conda:recipe:: perl-bio-featureio
   :replaces_section_title:

   Modules for reading\, writing\, and manipulating sequence features

   :homepage: https://metacpan.org/release/Bio-FeatureIO
   :license: perl_5
   :recipe: /`perl-bio-featureio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio/meta.yaml>`_

   


.. conda:package:: perl-bio-featureio

   |downloads_perl-bio-featureio| |docker_perl-bio-featureio|

   :versions: 1.6.905

   :depends: :conda:package:`perl-bioperl-core`  :conda:package:`perl-threaded`  :conda:package:`perl-tree-dag_node`  :conda:package:`perl-uri`  :conda:package:`perl-xml-dom`  :conda:package:`perl-xml-dom-xpath`  

   :required~by: |required_by_perl-bio-featureio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-featureio

   and update with::

      conda update perl-bio-featureio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-featureio


.. |required_by_perl-bio-featureio| conda:required_by:: perl-bio-featureio
.. |downloads_perl-bio-featureio| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-featureio.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-featureio| image:: https://quay.io/repository/biocontainers/perl-bio-featureio/status
   :target: https://quay.io/repository/biocontainers/perl-bio-featureio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-featureio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-featureio/README.html

