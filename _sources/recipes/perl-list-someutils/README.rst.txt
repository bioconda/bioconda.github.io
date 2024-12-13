:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-someutils'
.. highlight: bash

perl-list-someutils
===================

.. conda:recipe:: perl-list-someutils
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util

   :homepage: http://metacpan.org/release/List-SomeUtils
   :license: perl_5
   :recipe: /`perl-list-someutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils/meta.yaml>`_

   


.. conda:package:: perl-list-someutils

   |downloads_perl-list-someutils| |docker_perl-list-someutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.59-3</code>,  <code>0.59-2</code>,  <code>0.59-1</code>,  <code>0.59-0</code>,  <code>0.58-1</code>,  <code>0.58-0</code>,  <code>0.56-2</code>,  <code>0.56-1</code>,  <code>0.56-0</code>,  </span></summary>
      

      ``0.59-3``,  ``0.59-2``,  ``0.59-1``,  ``0.59-0``,  ``0.58-1``,  ``0.58-0``,  ``0.56-2``,  ``0.56-1``,  ``0.56-0``,  ``0.53-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-module-implementation: ``0.09.*``
   :depends perl-test-leaktrace: ``0.17.*``
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

      mamba install perl-list-someutils

   and update with::

      mamba update perl-list-someutils

  To create a new environment, run::

      mamba create --name myenvname perl-list-someutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-list-someutils:<tag>

   (see `perl-list-someutils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-someutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-someutils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-someutils
   :alt:   (downloads)
.. |docker_perl-list-someutils| image:: https://quay.io/repository/biocontainers/perl-list-someutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-someutils
.. _`perl-list-someutils/tags`: https://quay.io/repository/biocontainers/perl-list-someutils?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-someutils";
        var versions = ["0.59","0.59","0.59","0.59","0.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-someutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-someutils/README.html