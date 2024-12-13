:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-ngs-sdk'
.. highlight: bash

ncbi-ngs-sdk
============

.. conda:recipe:: ncbi-ngs-sdk
   :replaces_section_title:
   :noindex:

   NGS is a new\, domain\-specific API for accessing reads\, alignments and pileups produced from Next Generation Sequencing.

   :homepage: https://github.com/ncbi/ngs
   :license: Public Domain
   :recipe: /`ncbi-ngs-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk/meta.yaml>`_

   


.. conda:package:: ncbi-ngs-sdk

   |downloads_ncbi-ngs-sdk| |docker_ncbi-ngs-sdk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-5</code>,  <code>3.0.1-4</code>,  <code>3.0.1-3</code>,  <code>3.0.1-2</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>2.11.2-1</code>,  <code>2.11.2-0</code>,  <code>2.11.1-0</code>,  </span></summary>
      

      ``3.0.1-5``,  ``3.0.1-4``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.11.2-1``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.9-1``,  ``2.10.9-0``,  ``2.10.4-1``,  ``2.10.4-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.3-0``,  ``2.9.1-0``,  ``2.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libiconv: ``>=1.17,<2.0a0``
   :depends libstdcxx: ``>=13``
   :depends libxml2: ``>=2.13.5,<3.0a0``
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

      mamba install ncbi-ngs-sdk

   and update with::

      mamba update ncbi-ngs-sdk

  To create a new environment, run::

      mamba create --name myenvname ncbi-ngs-sdk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-ngs-sdk:<tag>

   (see `ncbi-ngs-sdk/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-ngs-sdk| image:: https://img.shields.io/conda/dn/bioconda/ncbi-ngs-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-ngs-sdk
   :alt:   (downloads)
.. |docker_ncbi-ngs-sdk| image:: https://quay.io/repository/biocontainers/ncbi-ngs-sdk/status
   :target: https://quay.io/repository/biocontainers/ncbi-ngs-sdk
.. _`ncbi-ngs-sdk/tags`: https://quay.io/repository/biocontainers/ncbi-ngs-sdk?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-ngs-sdk";
        var versions = ["3.0.1","3.0.1","3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html