:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-super'
.. highlight: bash

perl-super
==========

.. conda:recipe:: perl-super
   :replaces_section_title:
   :noindex:

   control superclass method dispatch

   :homepage: http://metacpan.org/pod/SUPER
   :license: perl_5
   :recipe: /`perl-super <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super/meta.yaml>`_

   


.. conda:package:: perl-super

   |downloads_perl-super| |docker_perl-super|

   :versions:
      
      

      ``1.20190531-1``,  ``1.20190531-0``,  ``1.20141117-1``,  ``1.20141117-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-sub-identify: 
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

      mamba install perl-super

   and update with::

      mamba update perl-super

  To create a new environment, run::

      mamba create --name myenvname perl-super

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-super:<tag>

   (see `perl-super/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-super| image:: https://img.shields.io/conda/dn/bioconda/perl-super.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-super
   :alt:   (downloads)
.. |docker_perl-super| image:: https://quay.io/repository/biocontainers/perl-super/status
   :target: https://quay.io/repository/biocontainers/perl-super
.. _`perl-super/tags`: https://quay.io/repository/biocontainers/perl-super?tab=tags


.. raw:: html

    <script>
        var package = "perl-super";
        var versions = ["1.20190531","1.20190531","1.20141117","1.20141117"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-super/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-super/README.html