:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.2-0, 1.0.1-1, 1.0.1-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-config-simple: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-http-message: 
   :depends perl-json: 
   :depends perl-libwww-perl: 
   :depends perl-lwp-simple: 
   :depends perl-termreadkey: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irida-linker

   and update with::

      conda update irida-linker

   or use the docker container::

      docker pull quay.io/biocontainers/irida-linker:<tag>

   (see `irida-linker/tags`_ for valid values for ``<tag>``)


.. |downloads_irida-linker| image:: https://img.shields.io/conda/dn/bioconda/irida-linker.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-linker
   :alt:   (downloads)
.. |docker_irida-linker| image:: https://quay.io/repository/biocontainers/irida-linker/status
   :target: https://quay.io/repository/biocontainers/irida-linker
.. _`irida-linker/tags`: https://quay.io/repository/biocontainers/irida-linker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-linker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-linker/README.html