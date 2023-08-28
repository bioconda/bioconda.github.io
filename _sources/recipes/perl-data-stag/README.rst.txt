:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-stag'
.. highlight: bash

perl-data-stag
==============

.. conda:recipe:: perl-data-stag
   :replaces_section_title:
   :noindex:

   Structured Tags

   :homepage: http://metacpan.org/pod/Data-Stag
   :license: unknown
   :recipe: /`perl-data-stag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag/meta.yaml>`_

   


.. conda:package:: perl-data-stag

   |downloads_perl-data-stag| |docker_perl-data-stag|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-graph: 
   :depends perl-io-string: 
   :depends perl-json: 
   :depends perl-libxml-perl: 
   :depends perl-mldbm: 
   :depends perl-xml-libxml: 
   :depends perl-xml-libxslt: 
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

      mamba install perl-data-stag

   and update with::

      mamba update perl-data-stag

  To create a new environment, run::

      mamba create --name myenvname perl-data-stag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-stag:<tag>

   (see `perl-data-stag/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-stag| image:: https://img.shields.io/conda/dn/bioconda/perl-data-stag.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-stag
   :alt:   (downloads)
.. |docker_perl-data-stag| image:: https://quay.io/repository/biocontainers/perl-data-stag/status
   :target: https://quay.io/repository/biocontainers/perl-data-stag
.. _`perl-data-stag/tags`: https://quay.io/repository/biocontainers/perl-data-stag?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-stag";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-stag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-stag/README.html