:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-authen-sasl-saslprep'
.. highlight: bash

perl-authen-sasl-saslprep
=========================

.. conda:recipe:: perl-authen-sasl-saslprep
   :replaces_section_title:
   :noindex:

   A Stringprep Profile for User Names and Passwords \(RFC 4013\)

   :homepage: http://metacpan.org/pod/Authen-SASL-SASLprep
   :license: perl_5
   :recipe: /`perl-authen-sasl-saslprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-authen-sasl-saslprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-authen-sasl-saslprep/meta.yaml>`_

   


.. conda:package:: perl-authen-sasl-saslprep

   |downloads_perl-authen-sasl-saslprep| |docker_perl-authen-sasl-saslprep|

   :versions:
      
      

      ``1.100-1``,  ``1.100-0``,  ``1.011-2``,  ``1.011-1``,  ``1.011-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-unicode-stringprep: 
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

      mamba install perl-authen-sasl-saslprep

   and update with::

      mamba update perl-authen-sasl-saslprep

  To create a new environment, run::

      mamba create --name myenvname perl-authen-sasl-saslprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-authen-sasl-saslprep:<tag>

   (see `perl-authen-sasl-saslprep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-authen-sasl-saslprep| image:: https://img.shields.io/conda/dn/bioconda/perl-authen-sasl-saslprep.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-authen-sasl-saslprep
   :alt:   (downloads)
.. |docker_perl-authen-sasl-saslprep| image:: https://quay.io/repository/biocontainers/perl-authen-sasl-saslprep/status
   :target: https://quay.io/repository/biocontainers/perl-authen-sasl-saslprep
.. _`perl-authen-sasl-saslprep/tags`: https://quay.io/repository/biocontainers/perl-authen-sasl-saslprep?tab=tags


.. raw:: html

    <script>
        var package = "perl-authen-sasl-saslprep";
        var versions = ["1.100","1.100","1.011","1.011","1.011"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-authen-sasl-saslprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-authen-sasl-saslprep/README.html