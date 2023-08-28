:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ntlm'
.. highlight: bash

perl-ntlm
=========

.. conda:recipe:: perl-ntlm
   :replaces_section_title:
   :noindex:

   An NTLM authentication module

   :homepage: http://metacpan.org/pod/NTLM
   :license: perl_5
   :recipe: /`perl-ntlm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ntlm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ntlm/meta.yaml>`_

   


.. conda:package:: perl-ntlm

   |downloads_perl-ntlm| |docker_perl-ntlm|

   :versions:
      
      

      ``1.09-5``,  ``1.09-4``,  ``1.09-3``,  ``1.09-2``,  ``1.09-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-hmac: 
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

      mamba install perl-ntlm

   and update with::

      mamba update perl-ntlm

  To create a new environment, run::

      mamba create --name myenvname perl-ntlm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ntlm:<tag>

   (see `perl-ntlm/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ntlm| image:: https://img.shields.io/conda/dn/bioconda/perl-ntlm.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ntlm
   :alt:   (downloads)
.. |docker_perl-ntlm| image:: https://quay.io/repository/biocontainers/perl-ntlm/status
   :target: https://quay.io/repository/biocontainers/perl-ntlm
.. _`perl-ntlm/tags`: https://quay.io/repository/biocontainers/perl-ntlm?tab=tags


.. raw:: html

    <script>
        var package = "perl-ntlm";
        var versions = ["1.09","1.09","1.09","1.09","1.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ntlm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ntlm/README.html