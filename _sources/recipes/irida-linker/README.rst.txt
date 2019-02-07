.. title:: Package Recipe 'irida-linker'
.. highlight: bash


irida-linker
============

.. conda:recipe:: irida-linker
   :replaces_section_title:

   The NGS Archive Linker is a Perl script used to generate a structure of links for files stored in the IRIDA platform.

   :homepage: https://github.com/phac-nml/irida-linker
   :license: Apache / Apache-2.0
   :recipe: /`irida-linker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker/meta.yaml>`_

   


.. conda:package:: irida-linker

   |downloads_irida-linker| |docker_irida-linker|

   :versions: 1.0.2, 1.0.1

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-config-simple`  :conda:package:`perl-file-path`  :conda:package:`perl-getopt-long`  :conda:package:`perl-http-message`  :conda:package:`perl-json`  :conda:package:`perl-libwww-perl`  :conda:package:`perl-lwp-simple`  :conda:package:`perl-termreadkey`  

   :required~by: |required_by_irida-linker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irida-linker

   and update with::

      conda update irida-linker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/irida-linker


.. |required_by_irida-linker| conda:required_by:: irida-linker
.. |downloads_irida-linker| image:: https://img.shields.io/conda/dn/bioconda/irida-linker.svg?style=flat
   :alt:   (downloads)
.. |docker_irida-linker| image:: https://quay.io/repository/biocontainers/irida-linker/status
   :target: https://quay.io/repository/biocontainers/irida-linker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-linker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-linker/README.html

