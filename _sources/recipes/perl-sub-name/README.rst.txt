:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-name'
.. highlight: bash

perl-sub-name
=============

.. conda:recipe:: perl-sub-name/0.21
   :replaces_section_title:

   \(Re\)name a sub

   :homepage: https://github.com/p5sagit/Sub-Name
   :license: perl_5
   :recipe: /`perl-sub-name <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-name>`_/`0.21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-name/0.21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-name/0.21/meta.yaml>`_

   


.. conda:package:: perl-sub-name

   |downloads_perl-sub-name| |docker_perl-sub-name|

   :versions: 0.21-1, 0.21-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-name

   and update with::

      conda update perl-sub-name

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-name:<tag>

   (see `perl-sub-name/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-name| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-name.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-name| image:: https://quay.io/repository/biocontainers/perl-sub-name/status
   :target: https://quay.io/repository/biocontainers/perl-sub-name
.. _`perl-sub-name/tags`: https://quay.io/repository/biocontainers/perl-sub-name?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-name/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-name/README.html