:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-treebuilder-xpath'
.. highlight: bash

perl-html-treebuilder-xpath
===========================

.. conda:recipe:: perl-html-treebuilder-xpath
   :replaces_section_title:
   :noindex:

   add XPath support to HTML\:\:TreeBuilder

   :homepage: http://metacpan.org/pod/HTML-TreeBuilder-XPath
   :license: perl_5
   :recipe: /`perl-html-treebuilder-xpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-treebuilder-xpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-treebuilder-xpath/meta.yaml>`_

   


.. conda:package:: perl-html-treebuilder-xpath

   |downloads_perl-html-treebuilder-xpath| |docker_perl-html-treebuilder-xpath|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-html-tree: 
   :depends perl-xml-xpathengine: 
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

      mamba install perl-html-treebuilder-xpath

   and update with::

      mamba update perl-html-treebuilder-xpath

  To create a new environment, run::

      mamba create --name myenvname perl-html-treebuilder-xpath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-treebuilder-xpath:<tag>

   (see `perl-html-treebuilder-xpath/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-treebuilder-xpath| image:: https://img.shields.io/conda/dn/bioconda/perl-html-treebuilder-xpath.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-treebuilder-xpath
   :alt:   (downloads)
.. |docker_perl-html-treebuilder-xpath| image:: https://quay.io/repository/biocontainers/perl-html-treebuilder-xpath/status
   :target: https://quay.io/repository/biocontainers/perl-html-treebuilder-xpath
.. _`perl-html-treebuilder-xpath/tags`: https://quay.io/repository/biocontainers/perl-html-treebuilder-xpath?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-treebuilder-xpath";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-treebuilder-xpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-treebuilder-xpath/README.html