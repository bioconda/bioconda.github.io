:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-compress'
.. highlight: bash

perl-io-compress
================

.. conda:recipe:: perl-io-compress
   :replaces_section_title:
   :noindex:

   IO Interface to compressed data files\/buffers

   :homepage: http://metacpan.org/pod/IO-Compress
   :license: perl_5
   :recipe: /`perl-io-compress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress/meta.yaml>`_

   


.. conda:package:: perl-io-compress

   |downloads_perl-io-compress| |docker_perl-io-compress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.201-2</code>,  <code>2.201-1</code>,  <code>2.201-0</code>,  <code>2.106-1</code>,  <code>2.106-0</code>,  <code>2.102-1</code>,  <code>2.102-0</code>,  <code>2.087-1</code>,  <code>2.087-0</code>,  </span></summary>
      

      ``2.201-2``,  ``2.201-1``,  ``2.201-0``,  ``2.106-1``,  ``2.106-0``,  ``2.102-1``,  ``2.102-0``,  ``2.087-1``,  ``2.087-0``,  ``2.086-0``,  ``2.084-0``,  ``2.083-0``,  ``2.081-0``,  ``2.069-5``,  ``2.069-4``,  ``2.069-2``,  ``2.069-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-compress-raw-bzip2: ``>=2.103``
   :depends perl-compress-raw-zlib: ``>=2.103``
   :depends perl-encode: 
   :depends perl-scalar-list-utils: 
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

      mamba install perl-io-compress

   and update with::

      mamba update perl-io-compress

  To create a new environment, run::

      mamba create --name myenvname perl-io-compress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-compress:<tag>

   (see `perl-io-compress/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-compress| image:: https://img.shields.io/conda/dn/bioconda/perl-io-compress.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-compress
   :alt:   (downloads)
.. |docker_perl-io-compress| image:: https://quay.io/repository/biocontainers/perl-io-compress/status
   :target: https://quay.io/repository/biocontainers/perl-io-compress
.. _`perl-io-compress/tags`: https://quay.io/repository/biocontainers/perl-io-compress?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-compress";
        var versions = ["2.201","2.201","2.201","2.106","2.106"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-compress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-compress/README.html