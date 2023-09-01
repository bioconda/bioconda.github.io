:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tree'
.. highlight: bash

perl-html-tree
==============

.. conda:recipe:: perl-html-tree
   :replaces_section_title:
   :noindex:

   Work with HTML in a DOM\-like tree structure

   :homepage: http://metacpan.org/pod/HTML::Tree
   :license: perl_5
   :recipe: /`perl-html-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree/meta.yaml>`_

   


.. conda:package:: perl-html-tree

   |downloads_perl-html-tree| |docker_perl-html-tree|

   :versions:
      
      

      ``5.07-2``,  ``5.07-1``,  ``5.07-0``,  ``5.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-html-parser: 
   :depends perl-html-tagset: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-html-tree

   and update with::

      mamba update perl-html-tree

  To create a new environment, run::

      mamba create --name myenvname perl-html-tree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-tree:<tag>

   (see `perl-html-tree/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tree| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tree
   :alt:   (downloads)
.. |docker_perl-html-tree| image:: https://quay.io/repository/biocontainers/perl-html-tree/status
   :target: https://quay.io/repository/biocontainers/perl-html-tree
.. _`perl-html-tree/tags`: https://quay.io/repository/biocontainers/perl-html-tree?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tree";
        var versions = ["5.07","5.07","5.07","5.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tree/README.html