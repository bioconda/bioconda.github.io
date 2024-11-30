:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-most'
.. highlight: bash

perl-test-most
==============

.. conda:recipe:: perl-test-most
   :replaces_section_title:
   :noindex:

   Most commonly needed test functions and features

   :homepage: http://metacpan.org/pod/Test-Most
   :license: unknown
   :recipe: /`perl-test-most <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most/meta.yaml>`_

   


.. conda:package:: perl-test-most

   |downloads_perl-test-most| |docker_perl-test-most|

   :versions:
      
      

      ``0.38-0``,  ``0.37-0``,  ``0.35-1``,  ``0.35-0``,  ``0.34-2``,  ``0.34-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exception-class: 
   :depends perl-test-deep: 
   :depends perl-test-differences: 
   :depends perl-test-exception: 
   :depends perl-test-warn: 
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

      mamba install perl-test-most

   and update with::

      mamba update perl-test-most

  To create a new environment, run::

      mamba create --name myenvname perl-test-most

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-most:<tag>

   (see `perl-test-most/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-most| image:: https://img.shields.io/conda/dn/bioconda/perl-test-most.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-most
   :alt:   (downloads)
.. |docker_perl-test-most| image:: https://quay.io/repository/biocontainers/perl-test-most/status
   :target: https://quay.io/repository/biocontainers/perl-test-most
.. _`perl-test-most/tags`: https://quay.io/repository/biocontainers/perl-test-most?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-most";
        var versions = ["0.38","0.37","0.35","0.35","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-most/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-most/README.html