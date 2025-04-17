:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-validate'
.. highlight: bash

perl-params-validate
====================

.. conda:recipe:: perl-params-validate
   :replaces_section_title:
   :noindex:

   Validate method\/function parameters

   :homepage: http://metacpan.org/pod/Params-Validate
   :license: artistic_2
   :recipe: /`perl-params-validate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate/meta.yaml>`_

   


.. conda:package:: perl-params-validate

   |downloads_perl-params-validate| |docker_perl-params-validate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.31-4</code>,  <code>1.31-3</code>,  <code>1.31-2</code>,  <code>1.31-1</code>,  <code>1.31-0</code>,  <code>1.30-1</code>,  <code>1.30-0</code>,  <code>1.29-3</code>,  <code>1.29-1</code>,  </span></summary>
      

      ``1.31-4``,  ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``,  ``1.30-1``,  ``1.30-0``,  ``1.29-3``,  ``1.29-1``,  ``1.29-0``,  ``1.26-1``,  ``1.26-0``,  ``1.08-2``,  ``1.08-1``,  ``1.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-module-implementation: 
   :depends perl-test-fatal: ``0.016.*``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-params-validate

   and update with::

      mamba update perl-params-validate

  To create a new environment, run::

      mamba create --name myenvname perl-params-validate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-params-validate:<tag>

   (see `perl-params-validate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-validate| image:: https://img.shields.io/conda/dn/bioconda/perl-params-validate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-params-validate
   :alt:   (downloads)
.. |docker_perl-params-validate| image:: https://quay.io/repository/biocontainers/perl-params-validate/status
   :target: https://quay.io/repository/biocontainers/perl-params-validate
.. _`perl-params-validate/tags`: https://quay.io/repository/biocontainers/perl-params-validate?tab=tags


.. raw:: html

    <script>
        var package = "perl-params-validate";
        var versions = ["1.31","1.31","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-validate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-validate/README.html