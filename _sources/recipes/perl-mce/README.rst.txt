:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce'
.. highlight: bash

perl-mce
========

.. conda:recipe:: perl-mce
   :replaces_section_title:
   :noindex:

   Many\-Core Engine for Perl providing parallel processing capabilities

   :homepage: https://github.com/marioroy/mce-perl
   :license: perl_5
   :recipe: /`perl-mce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce/meta.yaml>`_

   


.. conda:package:: perl-mce

   |downloads_perl-mce| |docker_perl-mce|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.902-0</code>,  <code>1.901-0</code>,  <code>1.900-0</code>,  <code>1.899-0</code>,  <code>1.898-0</code>,  <code>1.897-0</code>,  <code>1.896-0</code>,  <code>1.895-0</code>,  <code>1.894-0</code>,  </span></summary>
      

      ``1.902-0``,  ``1.901-0``,  ``1.900-0``,  ``1.899-0``,  ``1.898-0``,  ``1.897-0``,  ``1.896-0``,  ``1.895-0``,  ``1.894-0``,  ``1.893-0``,  ``1.891-0``,  ``1.888-0``,  ``1.884-0``,  ``1.881-0``,  ``1.879-0``,  ``1.878-0``,  ``1.876-0``,  ``1.837-1``,  ``1.837-0``,  ``1.836-0``,  ``1.835-1``,  ``1.835-0``,  ``1.814-1``,  ``1.814-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-socket: 
   :depends perl-storable: 
   :depends perl-time-hires: 
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

      mamba install perl-mce

   and update with::

      mamba update perl-mce

  To create a new environment, run::

      mamba create --name myenvname perl-mce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mce:<tag>

   (see `perl-mce/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mce| image:: https://img.shields.io/conda/dn/bioconda/perl-mce.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce
   :alt:   (downloads)
.. |docker_perl-mce| image:: https://quay.io/repository/biocontainers/perl-mce/status
   :target: https://quay.io/repository/biocontainers/perl-mce
.. _`perl-mce/tags`: https://quay.io/repository/biocontainers/perl-mce?tab=tags


.. raw:: html

    <script>
        var package = "perl-mce";
        var versions = ["1.902","1.901","1.900","1.899","1.898"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce/README.html