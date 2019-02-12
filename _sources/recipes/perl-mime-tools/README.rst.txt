:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-tools'
.. highlight: bash

perl-mime-tools
===============

.. conda:recipe:: perl-mime-tools
   :replaces_section_title:

   Tools to manipulate MIME messages

   :homepage: http://metacpan.org/pod/MIME-tools
   :license: perl_5
   :recipe: /`perl-mime-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools/meta.yaml>`_

   


.. conda:package:: perl-mime-tools

   |downloads_perl-mime-tools| |docker_perl-mime-tools|

   :versions: 5.508-0, 5.507-1, 5.507-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-convert-binhex: 
   
   :depends perl-mailtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mime-tools

   and update with::

      conda update perl-mime-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mime-tools:<tag>

   (see `perl-mime-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-tools| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mime-tools| image:: https://quay.io/repository/biocontainers/perl-mime-tools/status
   :target: https://quay.io/repository/biocontainers/perl-mime-tools
.. _`perl-mime-tools/tags`: https://quay.io/repository/biocontainers/perl-mime-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-tools/README.html