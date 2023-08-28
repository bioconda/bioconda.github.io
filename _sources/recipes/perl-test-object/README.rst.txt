:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-object'
.. highlight: bash

perl-test-object
================

.. conda:recipe:: perl-test-object/0.08
   :replaces_section_title:
   :noindex:

   Thoroughly testing objects via registered handlers

   :homepage: https://github.com/karenetheridge/Test-Object
   :license: perl_5
   :recipe: /`perl-test-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object>`_/`0.08 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08/meta.yaml>`_

   


.. conda:package:: perl-test-object

   |downloads_perl-test-object| |docker_perl-test-object|

   :versions:
      
      

      ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
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

      mamba install perl-test-object

   and update with::

      mamba update perl-test-object

  To create a new environment, run::

      mamba create --name myenvname perl-test-object

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-object:<tag>

   (see `perl-test-object/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-object| image:: https://img.shields.io/conda/dn/bioconda/perl-test-object.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-object
   :alt:   (downloads)
.. |docker_perl-test-object| image:: https://quay.io/repository/biocontainers/perl-test-object/status
   :target: https://quay.io/repository/biocontainers/perl-test-object
.. _`perl-test-object/tags`: https://quay.io/repository/biocontainers/perl-test-object?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-object";
        var versions = ["0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-object/README.html