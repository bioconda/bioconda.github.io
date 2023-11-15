:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-metabolomics-fragment-annotation'
.. highlight: bash

perl-metabolomics-fragment-annotation
=====================================

.. conda:recipe:: perl-metabolomics-fragment-annotation
   :replaces_section_title:
   :noindex:

   Perl extension for fragment annotation in metabolomics

   :homepage: https://metacpan.org/pod/Metabolomics::Fragment::Annotation
   :license: perl_5
   :recipe: /`perl-metabolomics-fragment-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation/meta.yaml>`_

   


.. conda:package:: perl-metabolomics-fragment-annotation

   |downloads_perl-metabolomics-fragment-annotation| |docker_perl-metabolomics-fragment-annotation|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.3-2``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.2-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-accessor: 
   :depends perl-datetime: 
   :depends perl-file-share: 
   :depends perl-file-sharedir-install: 
   :depends perl-html-template: 
   :depends perl-json: 
   :depends perl-log-any: 
   :depends perl-lwp-protocol-https: 
   :depends perl-text-csv: 
   :depends perl-text-csv_xs: 
   :depends perl-uri: 
   :depends perl-uri-query: 
   :depends perl-xml-twig: 
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

      mamba install perl-metabolomics-fragment-annotation

   and update with::

      mamba update perl-metabolomics-fragment-annotation

  To create a new environment, run::

      mamba create --name myenvname perl-metabolomics-fragment-annotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-metabolomics-fragment-annotation:<tag>

   (see `perl-metabolomics-fragment-annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-metabolomics-fragment-annotation| image:: https://img.shields.io/conda/dn/bioconda/perl-metabolomics-fragment-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-metabolomics-fragment-annotation
   :alt:   (downloads)
.. |docker_perl-metabolomics-fragment-annotation| image:: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation/status
   :target: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation
.. _`perl-metabolomics-fragment-annotation/tags`: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation?tab=tags


.. raw:: html

    <script>
        var package = "perl-metabolomics-fragment-annotation";
        var versions = ["0.6.9","0.6.3","0.6.3","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html