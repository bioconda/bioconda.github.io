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
      
      

      ``0.58-5``,  ``0.58-4``,  ``0.58-3``,  ``0.58-2``,  ``0.58-1``,  ``0.58-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gd: 
   :depends perl-html-treebuilder-xpath: 
   :depends perl-json: 
   :depends perl-libwww-perl: 
   :depends perl-math-cdf: 
   :depends perl-math-random: 
   :depends perl-pdf-api2: 
   :depends perl-svg: 
   :depends perl-template-toolkit: 
   :depends perl-uri: 
   :depends perl-xml-libxml: 
   :depends perl-xml-twig: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-phylo

   and update with::

      mamba update perl-bio-phylo

  To create a new environment, run::

      mamba create --name myenvname perl-bio-phylo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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