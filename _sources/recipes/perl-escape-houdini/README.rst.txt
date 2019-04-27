:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-escape-houdini'
.. highlight: bash

perl-escape-houdini
===================

.. conda:recipe:: perl-escape-houdini/0.3.0
   :replaces_section_title:

   Perl API to Houdini\, a zero\-dependency C web escaping library

   :homepage: https://github.com/yanick/Escape-Houdini
   :license: perl_5
   :recipe: /`perl-escape-houdini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini>`_/`0.3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0/meta.yaml>`_

   


.. conda:package:: perl-escape-houdini

   |downloads_perl-escape-houdini| |docker_perl-escape-houdini|

   :versions: 0.3.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-escape-houdini

   and update with::

      conda update perl-escape-houdini

   or use the docker container::

      docker pull quay.io/biocontainers/perl-escape-houdini:<tag>

   (see `perl-escape-houdini/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-escape-houdini| image:: https://img.shields.io/conda/dn/bioconda/perl-escape-houdini.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-escape-houdini| image:: https://quay.io/repository/biocontainers/perl-escape-houdini/status
   :target: https://quay.io/repository/biocontainers/perl-escape-houdini
.. _`perl-escape-houdini/tags`: https://quay.io/repository/biocontainers/perl-escape-houdini?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-escape-houdini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-escape-houdini/README.html