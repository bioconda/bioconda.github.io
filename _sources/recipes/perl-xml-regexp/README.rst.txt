:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-regexp'
.. highlight: bash

perl-xml-regexp
===============

.. conda:recipe:: perl-xml-regexp
   :replaces_section_title:
   :noindex:

   Regular expressions for XML tokens

   :homepage: http://metacpan.org/pod/XML-RegExp
   :license: unknown
   :recipe: /`perl-xml-regexp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-regexp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-regexp/meta.yaml>`_

   


.. conda:package:: perl-xml-regexp

   |downloads_perl-xml-regexp| |docker_perl-xml-regexp|

   :versions:
      
      

      ``0.04-3``,  ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
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

      mamba install perl-xml-regexp

   and update with::

      mamba update perl-xml-regexp

  To create a new environment, run::

      mamba create --name myenvname perl-xml-regexp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-regexp:<tag>

   (see `perl-xml-regexp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-regexp| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-regexp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-regexp
   :alt:   (downloads)
.. |docker_perl-xml-regexp| image:: https://quay.io/repository/biocontainers/perl-xml-regexp/status
   :target: https://quay.io/repository/biocontainers/perl-xml-regexp
.. _`perl-xml-regexp/tags`: https://quay.io/repository/biocontainers/perl-xml-regexp?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-regexp";
        var versions = ["0.04","0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-regexp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-regexp/README.html