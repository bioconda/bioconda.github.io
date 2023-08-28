:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-element-extended'
.. highlight: bash

perl-html-element-extended
==========================

.. conda:recipe:: perl-html-element-extended
   :replaces_section_title:
   :noindex:

   Perl extension for manipulating a table composed of HTML\:\:Element style components.

   :homepage: http://metacpan.org/pod/HTML-Element-Extended
   :license: unknown
   :recipe: /`perl-html-element-extended <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-element-extended>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-element-extended/meta.yaml>`_

   


.. conda:package:: perl-html-element-extended

   |downloads_perl-html-element-extended| |docker_perl-html-element-extended|

   :versions:
      
      

      ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-html-tree: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-html-element-extended

   and update with::

      mamba update perl-html-element-extended

  To create a new environment, run::

      mamba create --name myenvname perl-html-element-extended

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-element-extended:<tag>

   (see `perl-html-element-extended/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-element-extended| image:: https://img.shields.io/conda/dn/bioconda/perl-html-element-extended.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-element-extended
   :alt:   (downloads)
.. |docker_perl-html-element-extended| image:: https://quay.io/repository/biocontainers/perl-html-element-extended/status
   :target: https://quay.io/repository/biocontainers/perl-html-element-extended
.. _`perl-html-element-extended/tags`: https://quay.io/repository/biocontainers/perl-html-element-extended?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-element-extended";
        var versions = ["1.18","1.18","1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-element-extended/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-element-extended/README.html