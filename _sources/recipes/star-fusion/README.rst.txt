:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'star-fusion'
.. highlight: bash

star-fusion
===========

.. conda:recipe:: star-fusion
   :replaces_section_title:
   :noindex:

   STAR\-Fusion fusion variant caller. All dependencies required to run FusionInspector and FusionAnnotator are included.

   :homepage: https://github.com/STAR-Fusion/STAR-Fusion
   :documentation: https://github.com/STAR-Fusion/STAR-Fusion/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`star-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1842-9`, biotools: :biotools:`star-fusion`, usegalaxy-eu: :usegalaxy-eu:`star_fusion`

   


.. conda:package:: star-fusion

   |downloads_star-fusion| |docker_star-fusion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.13.0-1</code>,  <code>1.13.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.11.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.1-1</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends blast: 
   :depends bzip2: 
   :depends gmap: 
   :depends htslib: 
   :depends igv-reports: 
   :depends openssl: 
   :depends perl: 
   :depends perl-carp: 
   :depends perl-carp-assert: 
   :depends perl-db-file: 
   :depends perl-io-gzip: 
   :depends perl-json-xs: 
   :depends perl-set-intervaltree: 
   :depends perl-uri: 
   :depends python: 
   :depends samtools: ``<1.10``
   :depends star: ``2.7.11a``
   :depends trinity: ``<2.9``
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

      mamba install star-fusion

   and update with::

      mamba update star-fusion

  To create a new environment, run::

      mamba create --name myenvname star-fusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/star-fusion:<tag>

   (see `star-fusion/tags`_ for valid values for ``<tag>``)


.. |downloads_star-fusion| image:: https://img.shields.io/conda/dn/bioconda/star-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/star-fusion
   :alt:   (downloads)
.. |docker_star-fusion| image:: https://quay.io/repository/biocontainers/star-fusion/status
   :target: https://quay.io/repository/biocontainers/star-fusion
.. _`star-fusion/tags`: https://quay.io/repository/biocontainers/star-fusion?tab=tags


.. raw:: html

    <script>
        var package = "star-fusion";
        var versions = ["1.14.0","1.13.0","1.13.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star-fusion/README.html