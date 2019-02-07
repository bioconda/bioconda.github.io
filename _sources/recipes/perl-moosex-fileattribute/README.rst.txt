.. title:: Package Recipe 'perl-moosex-fileattribute'
.. highlight: bash


perl-moosex-fileattribute
=========================

.. conda:recipe:: perl-moosex-fileattribute
   :replaces_section_title:

   Sugar for classes that have file or directory attributes

   :homepage: https://github.com/moose/MooseX-FileAttribute
   :license: perl_5
   :recipe: /`perl-moosex-fileattribute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-fileattribute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-fileattribute/meta.yaml>`_

   


.. conda:package:: perl-moosex-fileattribute

   |downloads_perl-moosex-fileattribute| |docker_perl-moosex-fileattribute|

   :versions: 0.03, 0.02

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-moosex-types`  :conda:package:`perl-moosex-types-path-class`  

   :required~by: |required_by_perl-moosex-fileattribute|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-fileattribute

   and update with::

      conda update perl-moosex-fileattribute

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-fileattribute


.. |required_by_perl-moosex-fileattribute| conda:required_by:: perl-moosex-fileattribute
.. |downloads_perl-moosex-fileattribute| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-fileattribute.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-fileattribute| image:: https://quay.io/repository/biocontainers/perl-moosex-fileattribute/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-fileattribute







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-fileattribute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-fileattribute/README.html

