:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-namespace-autoclean'
.. highlight: bash

perl-namespace-autoclean
========================

.. conda:recipe:: perl-namespace-autoclean/0.28
   :replaces_section_title:

   Keep imports out of your namespace

   :homepage: https://github.com/moose/namespace-autoclean
   :license: perl_5
   :recipe: /`perl-namespace-autoclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-autoclean>`_/`0.28 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-autoclean/0.28>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-autoclean/0.28/meta.yaml>`_

   


.. conda:package:: perl-namespace-autoclean

   |downloads_perl-namespace-autoclean| |docker_perl-namespace-autoclean|

   :versions: 0.28-2, 0.28-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-b-hooks-endofscope: 
   :depends perl-namespace-clean: 
   :depends perl-sub-identify: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-namespace-autoclean

   and update with::

      conda update perl-namespace-autoclean

   or use the docker container::

      docker pull quay.io/biocontainers/perl-namespace-autoclean:<tag>

   (see `perl-namespace-autoclean/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-namespace-autoclean| image:: https://img.shields.io/conda/dn/bioconda/perl-namespace-autoclean.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-namespace-autoclean
   :alt:   (downloads)
.. |docker_perl-namespace-autoclean| image:: https://quay.io/repository/biocontainers/perl-namespace-autoclean/status
   :target: https://quay.io/repository/biocontainers/perl-namespace-autoclean
.. _`perl-namespace-autoclean/tags`: https://quay.io/repository/biocontainers/perl-namespace-autoclean?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-namespace-autoclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-namespace-autoclean/README.html