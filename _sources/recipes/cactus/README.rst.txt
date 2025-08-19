:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cactus'
.. highlight: bash

cactus
======

.. conda:recipe:: cactus
   :replaces_section_title:
   :noindex:

   Cactus is a reference\-free whole\-genome multiple alignment program based upon notion of Cactus graphs.

   :homepage: https://github.com/ComparativeGenomicsToolkit/cactus
   :documentation: https://github.com/ComparativeGenomicsToolkit/cactus/blob/v2.9.9/README.md
   
   :license: MIT / MIT
   :recipe: /`cactus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus/meta.yaml>`_
   :links: biotools: :biotools:`cactus`, usegalaxy-eu: :usegalaxy-eu:`cactus_cactus`, usegalaxy-eu: :usegalaxy-eu:`cactus_export`, doi: :doi:`10.1038/s41586-020-2871-y`, doi: :doi:`10.1101/gr.123356.111`, doi: :doi:`10.1089/cmb.2010.0252`

   


.. conda:package:: cactus

   |downloads_cactus| |docker_cactus|

   :versions:
      
      

      ``2019.03.01-1``,  ``2019.03.01-0``,  ``2.9.9-2``,  ``2.9.9-1``,  ``2.9.9-0``,  ``0.0.2019.03.01-5``,  ``0.0.2019.03.01-4``,  ``0.0.2019.03.01-3``,  ``0.0.2019.03.01-2``

      

   
   :depends biopython: 
   :depends cython: 
   :depends decorator: 
   :depends jobtree: 
   :depends kyototycoon: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends networkx: ``1.11.*``
   :depends openssl: ``1.0.2.*``
   :depends psutil: 
   :depends python: ``2.7.*``
   :depends sonlib: 
   :depends subprocess32: 
   :depends toil: ``3.14.0.*``
   :depends ucsc-bedsort: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-fatotwobit: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install cactus

   and update with::

      mamba update cactus

  To create a new environment, run::

      mamba create --name myenvname cactus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cactus:<tag>

   (see `cactus/tags`_ for valid values for ``<tag>``)


.. |downloads_cactus| image:: https://img.shields.io/conda/dn/bioconda/cactus.svg?style=flat
   :target: https://anaconda.org/bioconda/cactus
   :alt:   (downloads)
.. |docker_cactus| image:: https://quay.io/repository/biocontainers/cactus/status
   :target: https://quay.io/repository/biocontainers/cactus
.. _`cactus/tags`: https://quay.io/repository/biocontainers/cactus?tab=tags


.. raw:: html

    <script>
        var package = "cactus";
        var versions = ["2019.03.01","2019.03.01","2.9.9","2.9.9","2.9.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cactus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cactus/README.html