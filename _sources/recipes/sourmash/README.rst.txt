:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourmash'
.. highlight: bash

sourmash
========

.. conda:recipe:: sourmash
   :replaces_section_title:
   :noindex:

   Quickly search\, compare\, and analyze genomic and metagenomic data sets.

   :homepage: https://github.com/sourmash-bio/sourmash
   :documentation: https://sourmash.readthedocs.io/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sourmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash/meta.yaml>`_
   :links: biotools: :biotools:`sourmash`, doi: :doi:`10.21105/joss.00027`, doi: :doi:`10.12688/f1000research.19675.1`, doi: :doi:`10.5281/zenodo.11557883`

   


.. conda:package:: sourmash

   |downloads_sourmash| |docker_sourmash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.9.2-1</code>,  <code>4.9.2-0</code>,  <code>4.9.0-0</code>,  <code>4.8.14-0</code>,  <code>4.8.12-0</code>,  <code>4.8.11-0</code>,  <code>4.8.10-0</code>,  <code>4.8.9-0</code>,  <code>4.8.8-0</code>,  </span></summary>
      

      ``4.9.2-1``,  ``4.9.2-0``,  ``4.9.0-0``,  ``4.8.14-0``,  ``4.8.12-0``,  ``4.8.11-0``,  ``4.8.10-0``,  ``4.8.9-0``,  ``4.8.8-0``,  ``4.8.7-0``,  ``4.8.6-0``,  ``4.8.5-0``,  ``4.8.4-0``,  ``4.8.3-0``,  ``4.8.2-0``,  ``4.8.1-0``,  ``4.8.0-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.0-0``,  ``4.4.3-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.3-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``2.0.0a11-0``,  ``2.0.0a10-0``,  ``2.0.0a9-0``,  ``2.0.0a8-2``,  ``2.0.0a8-1``,  ``2.0.0a8-0``,  ``2.0.0a7-0``,  ``2.0.0a6-0``,  ``2.0.0a5-0``,  ``2.0.0a4-0``,  ``2.0.0a3-0``,  ``2.0.0a2-0``,  ``2.0.0a1-3``,  ``2.0.0a1-2``,  ``2.0.0a1-1``,  ``2.0.0a1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends sourmash-minimal: ``4.9.2.*``
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

      mamba install sourmash

   and update with::

      mamba update sourmash

  To create a new environment, run::

      mamba create --name myenvname sourmash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sourmash:<tag>

   (see `sourmash/tags`_ for valid values for ``<tag>``)


.. |downloads_sourmash| image:: https://img.shields.io/conda/dn/bioconda/sourmash.svg?style=flat
   :target: https://anaconda.org/bioconda/sourmash
   :alt:   (downloads)
.. |docker_sourmash| image:: https://quay.io/repository/biocontainers/sourmash/status
   :target: https://quay.io/repository/biocontainers/sourmash
.. _`sourmash/tags`: https://quay.io/repository/biocontainers/sourmash?tab=tags


.. raw:: html

    <script>
        var package = "sourmash";
        var versions = ["4.9.2","4.9.2","4.9.0","4.8.14","4.8.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourmash/README.html