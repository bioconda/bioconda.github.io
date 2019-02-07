.. title:: Package Recipe 'perl-moosex-nonmoose'
.. highlight: bash


perl-moosex-nonmoose
====================

.. conda:recipe:: perl-moosex-nonmoose
   :replaces_section_title:

   MooseX\:\:NonMoose \- easy subclassing of non\-Moose classes

   :homepage: https://github.com/moose/MooseX-NonMoose
   :license: perl_5
   :recipe: /`perl-moosex-nonmoose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose/meta.yaml>`_

   


.. conda:package:: perl-moosex-nonmoose

   |downloads_perl-moosex-nonmoose| |docker_perl-moosex-nonmoose|

   :versions: 0.26

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-exporter-tiny`  :conda:package:`perl-list-moreutils` >=0.428 :conda:package:`perl-moose`  :conda:package:`perl-moosex-getopt`  :conda:package:`perl-moosex-types`  :conda:package:`perl-params-validate`  

   :required~by: |required_by_perl-moosex-nonmoose|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-nonmoose

   and update with::

      conda update perl-moosex-nonmoose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-nonmoose


.. |required_by_perl-moosex-nonmoose| conda:required_by:: perl-moosex-nonmoose
.. |downloads_perl-moosex-nonmoose| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-nonmoose.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-nonmoose| image:: https://quay.io/repository/biocontainers/perl-moosex-nonmoose/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-nonmoose







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html

