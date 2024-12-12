:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trnascan-se'
.. highlight: bash

trnascan-se
===========

.. conda:recipe:: trnascan-se
   :replaces_section_title:
   :noindex:

   tRNA detection in large\-scale genomic sequences

   :homepage: https://lowelab.ucsc.edu/tRNAscan-SE/
   :documentation: https://lowelab.ucsc.edu/tRNAscan-SE/help.html
   
   :developer docs: https://github.com/UCSC-LoweLab/tRNAscan-SE
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`trnascan-se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se/meta.yaml>`_
   :links: biotools: :biotools:`trnascan-se`, doi: :doi:`10.1093/nar/gkab688`

   


.. conda:package:: trnascan-se

   |downloads_trnascan-se| |docker_trnascan-se|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.12-2</code>,  <code>2.0.12-1</code>,  <code>2.0.12-0</code>,  <code>2.0.11-1</code>,  <code>2.0.11-0</code>,  <code>2.0.9-3</code>,  <code>2.0.9-2</code>,  <code>2.0.9-1</code>,  <code>2.0.9-0</code>,  </span></summary>
      

      ``2.0.12-2``,  ``2.0.12-1``,  ``2.0.12-0``,  ``2.0.11-1``,  ``2.0.11-0``,  ``2.0.9-3``,  ``2.0.9-2``,  ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0-1``,  ``2.0-0``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends infernal: ``>=1.1.4``
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

      mamba install trnascan-se

   and update with::

      mamba update trnascan-se

  To create a new environment, run::

      mamba create --name myenvname trnascan-se

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trnascan-se:<tag>

   (see `trnascan-se/tags`_ for valid values for ``<tag>``)


.. |downloads_trnascan-se| image:: https://img.shields.io/conda/dn/bioconda/trnascan-se.svg?style=flat
   :target: https://anaconda.org/bioconda/trnascan-se
   :alt:   (downloads)
.. |docker_trnascan-se| image:: https://quay.io/repository/biocontainers/trnascan-se/status
   :target: https://quay.io/repository/biocontainers/trnascan-se
.. _`trnascan-se/tags`: https://quay.io/repository/biocontainers/trnascan-se?tab=tags


.. raw:: html

    <script>
        var package = "trnascan-se";
        var versions = ["2.0.12","2.0.12","2.0.12","2.0.11","2.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnascan-se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnascan-se/README.html