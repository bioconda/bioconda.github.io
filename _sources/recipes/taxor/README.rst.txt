:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxor'
.. highlight: bash

taxor
=====

.. conda:recipe:: taxor
   :replaces_section_title:
   :noindex:

   Fast and space\-efficient taxonomic classification of long reads.

   :homepage: https://github.com/JensUweUlrich/Taxor
   :documentation: https://github.com/JensUweUlrich/Taxor/blob/0.2.1/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`taxor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxor/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.278623.123`

   


.. conda:package:: taxor

   |downloads_taxor| |docker_taxor|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coreutils: 
   :depends curl: 
   :depends diffutils: 
   :depends grep: 
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install taxor

   and update with::

      mamba update taxor

  To create a new environment, run::

      mamba create --name myenvname taxor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxor:<tag>

   (see `taxor/tags`_ for valid values for ``<tag>``)


.. |downloads_taxor| image:: https://img.shields.io/conda/dn/bioconda/taxor.svg?style=flat
   :target: https://anaconda.org/bioconda/taxor
   :alt:   (downloads)
.. |docker_taxor| image:: https://quay.io/repository/biocontainers/taxor/status
   :target: https://quay.io/repository/biocontainers/taxor
.. _`taxor/tags`: https://quay.io/repository/biocontainers/taxor?tab=tags


.. raw:: html

    <script>
        var package = "taxor";
        var versions = ["0.2.1","0.2.0","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxor/README.html