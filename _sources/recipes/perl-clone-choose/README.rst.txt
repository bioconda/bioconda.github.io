.. title:: Package Recipe 'perl-clone-choose'
.. highlight: bash


perl-clone-choose
=================

.. conda:recipe:: perl-clone-choose
   :replaces_section_title:

   Choose appropriate clone utility

   :homepage: https://metacpan.org/release/Clone-Choose
   :license: perl_5
   :recipe: /`perl-clone-choose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-choose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-choose/meta.yaml>`_

   


.. conda:package:: perl-clone-choose

   |downloads_perl-clone-choose| |docker_perl-clone-choose|

   :versions: 0.010

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-storable`  

   :required~by: |required_by_perl-clone-choose|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-clone-choose

   and update with::

      conda update perl-clone-choose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-clone-choose


.. |required_by_perl-clone-choose| conda:required_by:: perl-clone-choose
.. |downloads_perl-clone-choose| image:: https://img.shields.io/conda/dn/bioconda/perl-clone-choose.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-clone-choose| image:: https://quay.io/repository/biocontainers/perl-clone-choose/status
   :target: https://quay.io/repository/biocontainers/perl-clone-choose







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone-choose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone-choose/README.html

