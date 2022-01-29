:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-phylo'
.. highlight: bash

perl-bio-phylo
==============

.. conda:recipe:: perl-bio-phylo
   :replaces_section_title:
   :noindex:

   An object\-oriented Perl toolkit for analyzing and manipulating phyloinformatic data.

   :homepage: http://biophylo.blogspot.com/
   :license: perl_5
   :recipe: /`perl-bio-phylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo/meta.yaml>`_

   


.. conda:package:: perl-bio-phylo

   |downloads_perl-bio-phylo| |docker_perl-bio-phylo|

   :versions:
      
      

      ``0.58-4``,  ``0.58-3``,  ``0.58-2``,  ``0.58-1``,  ``0.58-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gd: 
   :depends perl-html-treebuilder-xpath: 
   :depends perl-json: 
   :depends perl-lwp-simple: 
   :depends perl-math-cdf: 
   :depends perl-math-random: 
   :depends perl-pdf-api2: 
   :depends perl-svg: 
   :depends perl-template-toolkit: 
   :depends perl-uri: 
   :depends perl-xml-libxml: 
   :depends perl-xml-twig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-phylo

   and update with::

      conda update perl-bio-phylo

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-phylo:<tag>

   (see `perl-bio-phylo/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-phylo| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-phylo.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-phylo
   :alt:   (downloads)
.. |docker_perl-bio-phylo| image:: https://quay.io/repository/biocontainers/perl-bio-phylo/status
   :target: https://quay.io/repository/biocontainers/perl-bio-phylo
.. _`perl-bio-phylo/tags`: https://quay.io/repository/biocontainers/perl-bio-phylo?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-phylo";
        var versions = ["0.58","0.58","0.58","0.58","0.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-phylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-phylo/README.html