.. title:: Package Recipe 'perl-params-coerce'
.. highlight: bash


perl-params-coerce
==================

.. conda:recipe:: perl-params-coerce/0.14
   :replaces_section_title:

   Allows your classes to do coercion of parameters

   :homepage: http://metacpan.org/pod/Params::Coerce
   :license: perl_5
   :recipe: /`perl-params-coerce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce>`_/`0.14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce/0.14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce/0.14/meta.yaml>`_

   


.. conda:package:: perl-params-coerce

   |downloads_perl-params-coerce| |docker_perl-params-coerce|

   :versions: 0.14

   :depends: :conda:package:`perl` >=5.22,<=6.0 :conda:package:`perl-params-util`  

   :required~by: |required_by_perl-params-coerce|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-params-coerce

   and update with::

      conda update perl-params-coerce

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-params-coerce


.. |required_by_perl-params-coerce| conda:required_by:: perl-params-coerce
.. |downloads_perl-params-coerce| image:: https://img.shields.io/conda/dn/bioconda/perl-params-coerce.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-params-coerce| image:: https://quay.io/repository/biocontainers/perl-params-coerce/status
   :target: https://quay.io/repository/biocontainers/perl-params-coerce







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-coerce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-coerce/README.html

