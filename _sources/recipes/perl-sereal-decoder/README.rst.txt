:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal-decoder'
.. highlight: bash

perl-sereal-decoder
===================

.. conda:recipe:: perl-sereal-decoder
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary deserialization

   :homepage: http://metacpan.org/pod/Sereal::Decoder
   :license: perl_5
   :recipe: /`perl-sereal-decoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-decoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-decoder/meta.yaml>`_

   


.. conda:package:: perl-sereal-decoder

   |downloads_perl-sereal-decoder| |docker_perl-sereal-decoder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.025-2</code>,  <code>4.025-1</code>,  <code>4.025-0</code>,  <code>4.023-1</code>,  <code>4.023-0</code>,  <code>4.020-0</code>,  <code>4.019-0</code>,  <code>4.007-1</code>,  <code>4.007-0</code>,  </span></summary>
      

      ``4.025-2``,  ``4.025-1``,  ``4.025-0``,  ``4.023-1``,  ``4.023-0``,  ``4.020-0``,  ``4.019-0``,  ``4.007-1``,  ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-sereal-decoder

   and update with::

      mamba update perl-sereal-decoder

  To create a new environment, run::

      mamba create --name myenvname perl-sereal-decoder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sereal-decoder:<tag>

   (see `perl-sereal-decoder/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sereal-decoder| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal-decoder.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal-decoder
   :alt:   (downloads)
.. |docker_perl-sereal-decoder| image:: https://quay.io/repository/biocontainers/perl-sereal-decoder/status
   :target: https://quay.io/repository/biocontainers/perl-sereal-decoder
.. _`perl-sereal-decoder/tags`: https://quay.io/repository/biocontainers/perl-sereal-decoder?tab=tags


.. raw:: html

    <script>
        var package = "perl-sereal-decoder";
        var versions = ["4.025","4.025","4.025","4.023","4.023"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal-decoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal-decoder/README.html