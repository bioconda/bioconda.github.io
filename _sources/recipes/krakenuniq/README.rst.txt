:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakenuniq'
.. highlight: bash

krakenuniq
==========

.. conda:recipe:: krakenuniq
   :replaces_section_title:
   :noindex:

   Metagenomics classifier with unique k\-mer counting for more specific results

   :homepage: https://github.com/fbreitwieser/krakenuniq
   :license: GPLv3
   :recipe: /`krakenuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq/meta.yaml>`_
   :links: biotools: :biotools:`krakenhll`

   


.. conda:package:: krakenuniq

   |downloads_krakenuniq| |docker_krakenuniq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1a-1</code>,  <code>1.0.1a-0</code>,  </span></summary>
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1a-1``,  ``1.0.1a-0``,  ``1.0.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5.8-4``,  ``0.5.8-3``,  ``0.5.8-2``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bc: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends kmer-jellyfish: ``>=1,<2``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends rsync: 
   :depends tar: 
   :depends wget: 
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

      mamba install krakenuniq

   and update with::

      mamba update krakenuniq

  To create a new environment, run::

      mamba create --name myenvname krakenuniq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krakenuniq:<tag>

   (see `krakenuniq/tags`_ for valid values for ``<tag>``)


.. |downloads_krakenuniq| image:: https://img.shields.io/conda/dn/bioconda/krakenuniq.svg?style=flat
   :target: https://anaconda.org/bioconda/krakenuniq
   :alt:   (downloads)
.. |docker_krakenuniq| image:: https://quay.io/repository/biocontainers/krakenuniq/status
   :target: https://quay.io/repository/biocontainers/krakenuniq
.. _`krakenuniq/tags`: https://quay.io/repository/biocontainers/krakenuniq?tab=tags


.. raw:: html

    <script>
        var package = "krakenuniq";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakenuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakenuniq/README.html