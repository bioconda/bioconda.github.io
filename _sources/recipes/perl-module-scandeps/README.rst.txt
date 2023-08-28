:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-scandeps'
.. highlight: bash

perl-module-scandeps
====================

.. conda:recipe:: perl-module-scandeps
   :replaces_section_title:
   :noindex:

   Recursively scan Perl code for dependencies

   :homepage: http://metacpan.org/pod/Module::ScanDeps
   :license: perl_5
   :recipe: /`perl-module-scandeps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps/meta.yaml>`_

   


.. conda:package:: perl-module-scandeps

   |downloads_perl-module-scandeps| |docker_perl-module-scandeps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.27-1</code>,  <code>1.27-0</code>,  <code>1.26-1</code>,  <code>1.26-0</code>,  <code>1.25-0</code>,  <code>1.23-1</code>,  </span></summary>
      

      ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.27-1``,  ``1.27-0``,  ``1.26-1``,  ``1.26-0``,  ``1.25-0``,  ``1.23-1``,  ``1.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-temp: 
   :depends perl-getopt-long: 
   :depends perl-module-metadata: 
   :depends perl-text-parsewords: 
   :depends perl-version: 
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

      mamba install perl-module-scandeps

   and update with::

      mamba update perl-module-scandeps

  To create a new environment, run::

      mamba create --name myenvname perl-module-scandeps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-scandeps:<tag>

   (see `perl-module-scandeps/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-scandeps| image:: https://img.shields.io/conda/dn/bioconda/perl-module-scandeps.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-scandeps
   :alt:   (downloads)
.. |docker_perl-module-scandeps| image:: https://quay.io/repository/biocontainers/perl-module-scandeps/status
   :target: https://quay.io/repository/biocontainers/perl-module-scandeps
.. _`perl-module-scandeps/tags`: https://quay.io/repository/biocontainers/perl-module-scandeps?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-scandeps";
        var versions = ["1.33","1.32","1.31","1.27","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-scandeps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-scandeps/README.html