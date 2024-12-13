:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-cdf'
.. highlight: bash

perl-math-cdf
=============

.. conda:recipe:: perl-math-cdf
   :replaces_section_title:
   :noindex:

   Generate probabilities and quantiles from several statistical probability functions

   :homepage: http://metacpan.org/pod/Math-CDF
   :license: Public Domain
   :recipe: /`perl-math-cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-cdf/meta.yaml>`_

   


.. conda:package:: perl-math-cdf

   |downloads_perl-math-cdf| |docker_perl-math-cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-11</code>,  <code>0.1-10</code>,  <code>0.1-9</code>,  <code>0.1-8</code>,  <code>0.1-7</code>,  <code>0.1-6</code>,  <code>0.1-5</code>,  <code>0.1-4</code>,  <code>0.1-3</code>,  </span></summary>
      

      ``0.1-11``,  ``0.1-10``,  ``0.1-9``,  ``0.1-8``,  ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-math-cdf

   and update with::

      mamba update perl-math-cdf

  To create a new environment, run::

      mamba create --name myenvname perl-math-cdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-cdf:<tag>

   (see `perl-math-cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-cdf| image:: https://img.shields.io/conda/dn/bioconda/perl-math-cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-cdf
   :alt:   (downloads)
.. |docker_perl-math-cdf| image:: https://quay.io/repository/biocontainers/perl-math-cdf/status
   :target: https://quay.io/repository/biocontainers/perl-math-cdf
.. _`perl-math-cdf/tags`: https://quay.io/repository/biocontainers/perl-math-cdf?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-cdf";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-cdf/README.html