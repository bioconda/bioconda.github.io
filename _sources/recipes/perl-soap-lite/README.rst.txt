:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-soap-lite'
.. highlight: bash

perl-soap-lite
==============

.. conda:recipe:: perl-soap-lite
   :replaces_section_title:
   :noindex:

   Perl\'s Web Services Toolkit

   :homepage: http://metacpan.org/pod/SOAP-Lite
   :license: perl_5
   :recipe: /`perl-soap-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-soap-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-soap-lite/meta.yaml>`_

   


.. conda:package:: perl-soap-lite

   |downloads_perl-soap-lite| |docker_perl-soap-lite|

   :versions:
      
      

      ``1.27-0``,  ``1.19-2``,  ``1.19-1``,  ``1.19-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-inspector: 
   :depends perl-io-sessiondata: 
   :depends perl-io-socket-ssl: 
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends perl-mime-lite: 
   :depends perl-mime-tools: 
   :depends perl-task-weaken: 
   :depends perl-uri: 
   :depends perl-xml-parser: 
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

      mamba install perl-soap-lite

   and update with::

      mamba update perl-soap-lite

  To create a new environment, run::

      mamba create --name myenvname perl-soap-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-soap-lite:<tag>

   (see `perl-soap-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-soap-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-soap-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-soap-lite
   :alt:   (downloads)
.. |docker_perl-soap-lite| image:: https://quay.io/repository/biocontainers/perl-soap-lite/status
   :target: https://quay.io/repository/biocontainers/perl-soap-lite
.. _`perl-soap-lite/tags`: https://quay.io/repository/biocontainers/perl-soap-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-soap-lite";
        var versions = ["1.27","1.19","1.19","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-soap-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-soap-lite/README.html