:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-tools'
.. highlight: bash

perl-mime-tools
===============

.. conda:recipe:: perl-mime-tools
   :replaces_section_title:
   :noindex:

   Tools to manipulate MIME messages

   :homepage: http://metacpan.org/pod/MIME-tools
   :license: perl_5
   :recipe: /`perl-mime-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools/meta.yaml>`_

   


.. conda:package:: perl-mime-tools

   |downloads_perl-mime-tools| |docker_perl-mime-tools|

   :versions:
      
      

      ``5.508-2``,  ``5.508-1``,  ``5.508-0``,  ``5.507-1``,  ``5.507-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-convert-binhex: 
   :depends perl-mailtools: 
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

      mamba install perl-mime-tools

   and update with::

      mamba update perl-mime-tools

  To create a new environment, run::

      mamba create --name myenvname perl-mime-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mime-tools:<tag>

   (see `perl-mime-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-tools| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-tools
   :alt:   (downloads)
.. |docker_perl-mime-tools| image:: https://quay.io/repository/biocontainers/perl-mime-tools/status
   :target: https://quay.io/repository/biocontainers/perl-mime-tools
.. _`perl-mime-tools/tags`: https://quay.io/repository/biocontainers/perl-mime-tools?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-tools";
        var versions = ["5.508","5.508","5.508","5.507","5.507"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-tools/README.html