:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-eutilities'
.. highlight: bash

perl-bio-eutilities
===================

.. conda:recipe:: perl-bio-eutilities
   :replaces_section_title:
   :noindex:

   Webagent which interacts with and retrieves data from NCBI eUtils.

   :homepage: https://metacpan.org/release/Bio-EUtilities
   :license: perl_5
   :recipe: /`perl-bio-eutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities/meta.yaml>`_

   


.. conda:package:: perl-bio-eutilities

   |downloads_perl-bio-eutilities| |docker_perl-bio-eutilities|

   :versions:
      
      

      ``1.77-0``,  ``1.75-4``,  ``1.75-2``,  ``1.75-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-asn1-entrezgene: 
   :depends perl-bioperl: 
   :depends perl-capture-tiny: 
   :depends perl-class-data-inheritable: 
   :depends perl-data-stag: 
   :depends perl-devel-stacktrace: 
   :depends perl-exception-class: 
   :depends perl-sub-uplevel: 
   :depends perl-test-deep: 
   :depends perl-test-differences: 
   :depends perl-test-exception: 
   :depends perl-test-most: 
   :depends perl-test-simple: 
   :depends perl-test-warn: 
   :depends perl-text-csv: 
   :depends perl-text-diff: 
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-base: 
   :depends perl-xml-sax-expat: 
   :depends perl-xml-simple: 
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

      mamba install perl-bio-eutilities

   and update with::

      mamba update perl-bio-eutilities

  To create a new environment, run::

      mamba create --name myenvname perl-bio-eutilities

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-eutilities:<tag>

   (see `perl-bio-eutilities/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-eutilities| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-eutilities.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-eutilities
   :alt:   (downloads)
.. |docker_perl-bio-eutilities| image:: https://quay.io/repository/biocontainers/perl-bio-eutilities/status
   :target: https://quay.io/repository/biocontainers/perl-bio-eutilities
.. _`perl-bio-eutilities/tags`: https://quay.io/repository/biocontainers/perl-bio-eutilities?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-eutilities";
        var versions = ["1.77","1.75","1.75","1.75"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-eutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-eutilities/README.html