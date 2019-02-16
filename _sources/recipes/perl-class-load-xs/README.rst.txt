:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-load-xs'
.. highlight: bash

perl-class-load-xs
==================

.. conda:recipe:: perl-class-load-xs
   :replaces_section_title:

   XS implementation of parts of Class\:\:Load

   :homepage: https://github.com/moose/Class-Load-XS
   :license: artistic_2
   :recipe: /`perl-class-load-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load-xs/meta.yaml>`_

   


.. conda:package:: perl-class-load-xs

   |downloads_perl-class-load-xs| |docker_perl-class-load-xs|

   :versions: 0.10-0, 0.09-2, 0.09-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-class-load: 
   
   :depends perl-xsloader: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-load-xs

   and update with::

      conda update perl-class-load-xs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-class-load-xs:<tag>

   (see `perl-class-load-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-load-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-class-load-xs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-load-xs| image:: https://quay.io/repository/biocontainers/perl-class-load-xs/status
   :target: https://quay.io/repository/biocontainers/perl-class-load-xs
.. _`perl-class-load-xs/tags`: https://quay.io/repository/biocontainers/perl-class-load-xs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-load-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-load-xs/README.html