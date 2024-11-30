:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-tiny'
.. highlight: bash

perl-http-tiny
==============

.. conda:recipe:: perl-http-tiny/0.076
   :replaces_section_title:
   :noindex:

   A small\, simple\, correct HTTP\/1.1 client

   :homepage: https://github.com/chansen/p5-http-tiny
   :license: perl_5
   :recipe: /`perl-http-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny>`_/`0.076 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny/0.076>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny/0.076/meta.yaml>`_

   


.. conda:package:: perl-http-tiny

   |downloads_perl-http-tiny| |docker_perl-http-tiny|

   :versions:
      
      

      ``0.076-1``,  ``0.076-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-mime-base64: 
   :depends perl-socket: 
   :depends perl-time-local: 
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

      mamba install perl-http-tiny

   and update with::

      mamba update perl-http-tiny

  To create a new environment, run::

      mamba create --name myenvname perl-http-tiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-tiny:<tag>

   (see `perl-http-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-http-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-tiny
   :alt:   (downloads)
.. |docker_perl-http-tiny| image:: https://quay.io/repository/biocontainers/perl-http-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-http-tiny
.. _`perl-http-tiny/tags`: https://quay.io/repository/biocontainers/perl-http-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-tiny";
        var versions = ["0.076","0.076"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-tiny/README.html