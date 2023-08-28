:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pdf-api2'
.. highlight: bash

perl-pdf-api2
=============

.. conda:recipe:: perl-pdf-api2
   :replaces_section_title:
   :noindex:

   Facilitates the creation and modification of PDF files

   :homepage: http://metacpan.org/pod/PDF::API2
   :license: lgpl_2_1
   :recipe: /`perl-pdf-api2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-api2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-api2/meta.yaml>`_

   


.. conda:package:: perl-pdf-api2

   |downloads_perl-pdf-api2| |docker_perl-pdf-api2|

   :versions:
      
      

      ``2.043-0``,  ``2.035-1``,  ``2.035-0``,  ``2.034-0``,  ``2.033-0``,  ``2.025-3``,  ``2.025-2``,  ``2.025-1``,  ``2.025-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-font-ttf: 
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

      mamba install perl-pdf-api2

   and update with::

      mamba update perl-pdf-api2

  To create a new environment, run::

      mamba create --name myenvname perl-pdf-api2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pdf-api2:<tag>

   (see `perl-pdf-api2/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pdf-api2| image:: https://img.shields.io/conda/dn/bioconda/perl-pdf-api2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pdf-api2
   :alt:   (downloads)
.. |docker_perl-pdf-api2| image:: https://quay.io/repository/biocontainers/perl-pdf-api2/status
   :target: https://quay.io/repository/biocontainers/perl-pdf-api2
.. _`perl-pdf-api2/tags`: https://quay.io/repository/biocontainers/perl-pdf-api2?tab=tags


.. raw:: html

    <script>
        var package = "perl-pdf-api2";
        var versions = ["2.043","2.035","2.035","2.034","2.033"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pdf-api2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pdf-api2/README.html