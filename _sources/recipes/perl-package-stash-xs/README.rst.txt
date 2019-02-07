.. title:: Package Recipe 'perl-package-stash-xs'
.. highlight: bash


perl-package-stash-xs
=====================

.. conda:recipe:: perl-package-stash-xs/0.28
   :replaces_section_title:

   faster and more correct implementation of the Package\:\:Stash API

   :homepage: http://metacpan.org/release/Package-Stash-XS
   :license: perl_5
   :recipe: /`perl-package-stash-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash-xs>`_/`0.28 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash-xs/0.28>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash-xs/0.28/meta.yaml>`_

   


.. conda:package:: perl-package-stash-xs

   |downloads_perl-package-stash-xs| |docker_perl-package-stash-xs|

   :versions: 0.28

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.27.0a0 :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-package-stash-xs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-package-stash-xs

   and update with::

      conda update perl-package-stash-xs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-package-stash-xs


.. |required_by_perl-package-stash-xs| conda:required_by:: perl-package-stash-xs
.. |downloads_perl-package-stash-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-package-stash-xs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-package-stash-xs| image:: https://quay.io/repository/biocontainers/perl-package-stash-xs/status
   :target: https://quay.io/repository/biocontainers/perl-package-stash-xs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-package-stash-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-package-stash-xs/README.html

