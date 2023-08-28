:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal-encoder'
.. highlight: bash

perl-sereal-encoder
===================

.. conda:recipe:: perl-sereal-encoder
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary serialization

   :homepage: http://metacpan.org/pod/Sereal::Encoder
   :license: perl_5
   :recipe: /`perl-sereal-encoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-encoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-encoder/meta.yaml>`_

   


.. conda:package:: perl-sereal-encoder

   |downloads_perl-sereal-encoder| |docker_perl-sereal-encoder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.025-1</code>,  <code>4.025-0</code>,  <code>4.024-0</code>,  <code>4.023-0</code>,  <code>4.021-1</code>,  <code>4.021-0</code>,  <code>4.020-0</code>,  <code>4.019-0</code>,  <code>4.007-1</code>,  </span></summary>
      

      ``4.025-1``,  ``4.025-0``,  ``4.024-0``,  ``4.023-0``,  ``4.021-1``,  ``4.021-0``,  ``4.020-0``,  ``4.019-0``,  ``4.007-1``,  ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-sereal-encoder

   and update with::

      mamba update perl-sereal-encoder

  To create a new environment, run::

      mamba create --name myenvname perl-sereal-encoder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sereal-encoder:<tag>

   (see `perl-sereal-encoder/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sereal-encoder| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal-encoder.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal-encoder
   :alt:   (downloads)
.. |docker_perl-sereal-encoder| image:: https://quay.io/repository/biocontainers/perl-sereal-encoder/status
   :target: https://quay.io/repository/biocontainers/perl-sereal-encoder
.. _`perl-sereal-encoder/tags`: https://quay.io/repository/biocontainers/perl-sereal-encoder?tab=tags


.. raw:: html

    <script>
        var package = "perl-sereal-encoder";
        var versions = ["4.025","4.025","4.024","4.023","4.021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal-encoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal-encoder/README.html