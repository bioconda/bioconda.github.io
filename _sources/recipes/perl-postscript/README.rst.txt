:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-postscript'
.. highlight: bash

perl-postscript
===============

.. conda:recipe:: perl-postscript
   :replaces_section_title:
   :noindex:

   helper module for PostScript\:\:TextBlock

   :homepage: http://metacpan.org/pod/PostScript
   :license: unknown
   :recipe: /`perl-postscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript/meta.yaml>`_

   


.. conda:package:: perl-postscript

   |downloads_perl-postscript| |docker_perl-postscript|

   :versions:
      
      

      ``0.06-3``,  ``0.06-2``,  ``0.06-1``,  ``0.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-postscript

   and update with::

      mamba update perl-postscript

  To create a new environment, run::

      mamba create --name myenvname perl-postscript

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-postscript:<tag>

   (see `perl-postscript/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-postscript| image:: https://img.shields.io/conda/dn/bioconda/perl-postscript.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-postscript
   :alt:   (downloads)
.. |docker_perl-postscript| image:: https://quay.io/repository/biocontainers/perl-postscript/status
   :target: https://quay.io/repository/biocontainers/perl-postscript
.. _`perl-postscript/tags`: https://quay.io/repository/biocontainers/perl-postscript?tab=tags


.. raw:: html

    <script>
        var package = "perl-postscript";
        var versions = ["0.06","0.06","0.06","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-postscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-postscript/README.html