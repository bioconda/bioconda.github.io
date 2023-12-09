:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bigint'
.. highlight: bash

perl-math-bigint
================

.. conda:recipe:: perl-math-bigint
   :replaces_section_title:
   :noindex:

   Arbitrary size floating point math package

   :homepage: http://metacpan.org/pod/Math::BigInt
   :license: perl_5
   :recipe: /`perl-math-bigint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint/meta.yaml>`_

   


.. conda:package:: perl-math-bigint

   |downloads_perl-math-bigint| |docker_perl-math-bigint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.002001-0</code>,  <code>2.002000-0</code>,  <code>2.001001-0</code>,  <code>2.001000-0</code>,  <code>2.000000-0</code>,  <code>1.999842-0</code>,  <code>1.999841-0</code>,  <code>1.999839-0</code>,  <code>1.999838-0</code>,  </span></summary>
      

      ``2.002001-0``,  ``2.002000-0``,  ``2.001001-0``,  ``2.001000-0``,  ``2.000000-0``,  ``1.999842-0``,  ``1.999841-0``,  ``1.999839-0``,  ``1.999838-0``,  ``1.999837-0``,  ``1.999836-0``,  ``1.999835-0``,  ``1.999833-0``,  ``1.999832-0``,  ``1.999831-0``,  ``1.999830-0``,  ``1.999829-0``,  ``1.999816-1``,  ``1.999816-0``,  ``1.999813-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: ``>=1.22``
   :depends perl-math-complex: ``>=1.36``
   :depends perl-scalar-list-utils: 
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

      mamba install perl-math-bigint

   and update with::

      mamba update perl-math-bigint

  To create a new environment, run::

      mamba create --name myenvname perl-math-bigint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-bigint:<tag>

   (see `perl-math-bigint/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-bigint| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigint.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bigint
   :alt:   (downloads)
.. |docker_perl-math-bigint| image:: https://quay.io/repository/biocontainers/perl-math-bigint/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigint
.. _`perl-math-bigint/tags`: https://quay.io/repository/biocontainers/perl-math-bigint?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-bigint";
        var versions = ["2.002001","2.002000","2.001001","2.001000","2.000000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigint/README.html