:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-socket'
.. highlight: bash

perl-socket
===========

.. conda:recipe:: perl-socket/2.027
   :replaces_section_title:
   :noindex:

   networking constants and support functions

   :homepage: http://metacpan.org/pod/Socket
   :license: perl_5
   :recipe: /`perl-socket <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket>`_/`2.027 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027/meta.yaml>`_

   


.. conda:package:: perl-socket

   |downloads_perl-socket| |docker_perl-socket|

   :versions:
      
      

      ``2.027-4``,  ``2.027-3``,  ``2.027-2``,  ``2.027-1``,  ``2.027-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-socket

   and update with::

      mamba update perl-socket

  To create a new environment, run::

      mamba create --name myenvname perl-socket

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-socket:<tag>

   (see `perl-socket/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-socket| image:: https://img.shields.io/conda/dn/bioconda/perl-socket.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-socket
   :alt:   (downloads)
.. |docker_perl-socket| image:: https://quay.io/repository/biocontainers/perl-socket/status
   :target: https://quay.io/repository/biocontainers/perl-socket
.. _`perl-socket/tags`: https://quay.io/repository/biocontainers/perl-socket?tab=tags


.. raw:: html

    <script>
        var package = "perl-socket";
        var versions = ["2.027","2.027","2.027","2.027","2.027"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-socket/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-socket/README.html