:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-phylo-cipres'
.. highlight: bash

perl-bio-phylo-cipres
=====================

.. conda:recipe:: perl-bio-phylo-cipres/v0.2.1
   :replaces_section_title:
   :noindex:

   Reusable components for CIPRES REST API access

   :homepage: http://metacpan.org/pod/Bio::Phylo::CIPRES
   :license: perl_5
   :recipe: /`perl-bio-phylo-cipres <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres>`_/`v0.2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1/meta.yaml>`_

   


.. conda:package:: perl-bio-phylo-cipres

   |downloads_perl-bio-phylo-cipres| |docker_perl-bio-phylo-cipres|

   :versions:
      
      

      ``v0.2.1-1``,  ``v0.2.1-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bio-phylo: 
   :depends perl-xml-twig: 
   :depends perl-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-phylo-cipres

   and update with::

      conda update perl-bio-phylo-cipres

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-phylo-cipres:<tag>

   (see `perl-bio-phylo-cipres/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-phylo-cipres| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-phylo-cipres.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-phylo-cipres
   :alt:   (downloads)
.. |docker_perl-bio-phylo-cipres| image:: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres/status
   :target: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres
.. _`perl-bio-phylo-cipres/tags`: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html