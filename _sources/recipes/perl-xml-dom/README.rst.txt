:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-dom'
.. highlight: bash

perl-xml-dom
============

.. conda:recipe:: perl-xml-dom
   :replaces_section_title:
   :noindex:

   A perl module for building DOM Level 1 compliant document structures

   :homepage: http://metacpan.org/pod/XML-DOM
   :license: unknown
   :recipe: /`perl-xml-dom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom/meta.yaml>`_

   


.. conda:package:: perl-xml-dom

   |downloads_perl-xml-dom| |docker_perl-xml-dom|

   :versions:
      
      

      ``1.46-1``,  ``1.46-0``,  ``1.45-1``,  ``1.45-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-http-message: ``>=6.18``
   :depends perl-libwww-perl: 
   :depends perl-libxml-perl: 
   :depends perl-xml-parser: 
   :depends perl-xml-regexp: 
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

      mamba install perl-xml-dom

   and update with::

      mamba update perl-xml-dom

  To create a new environment, run::

      mamba create --name myenvname perl-xml-dom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-dom:<tag>

   (see `perl-xml-dom/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-dom| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-dom.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-dom
   :alt:   (downloads)
.. |docker_perl-xml-dom| image:: https://quay.io/repository/biocontainers/perl-xml-dom/status
   :target: https://quay.io/repository/biocontainers/perl-xml-dom
.. _`perl-xml-dom/tags`: https://quay.io/repository/biocontainers/perl-xml-dom?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-dom";
        var versions = ["1.46","1.46","1.45","1.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-dom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-dom/README.html