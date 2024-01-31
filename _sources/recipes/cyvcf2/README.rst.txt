:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyvcf2'
.. highlight: bash

cyvcf2
======

.. conda:recipe:: cyvcf2
   :replaces_section_title:
   :noindex:

   A cython wrapper around htslib built for fast parsing of Variant Call Format \(VCF\) files

   :homepage: https://github.com/brentp/cyvcf2/
   :documentation: https://brentp.github.io/cyvcf2/
   
   :license: MIT / MIT
   :recipe: /`cyvcf2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx057`, biotools: :biotools:`cyvcf2`

   


.. conda:package:: cyvcf2

   |downloads_cyvcf2| |docker_cyvcf2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.28-0</code>,  <code>0.30.27-0</code>,  <code>0.30.26-0</code>,  <code>0.30.25-0</code>,  <code>0.30.22-0</code>,  <code>0.30.16-2</code>,  <code>0.30.16-1</code>,  <code>0.30.16-0</code>,  <code>0.30.15-1</code>,  </span></summary>
      

      ``0.30.28-0``,  ``0.30.27-0``,  ``0.30.26-0``,  ``0.30.25-0``,  ``0.30.22-0``,  ``0.30.16-2``,  ``0.30.16-1``,  ``0.30.16-0``,  ``0.30.15-1``,  ``0.30.15-0``,  ``0.30.14-1``,  ``0.30.14-0``,  ``0.30.13-0``,  ``0.30.12-0``,  ``0.30.11-2``,  ``0.30.11-1``,  ``0.30.11-0``,  ``0.30.9-0``,  ``0.30.8-0``,  ``0.30.6-1``,  ``0.30.6-0``,  ``0.30.4-0``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.20.9-0``,  ``0.20.8-0``,  ``0.20.7-0``,  ``0.20.6-0``,  ``0.20.5-0``,  ``0.20.4-1``,  ``0.20.4-0``,  ``0.20.3-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.2-0``,  ``0.10.10-0``,  ``0.10.8-2``,  ``0.10.8-1``,  ``0.10.8-0``,  ``0.10.0-0``,  ``0.8.4-4``,  ``0.8.4-3``,  ``0.8.4-2``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.6.6a-0``,  ``0.6.5-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends coloredlogs: 
   :depends htslib: ``>=1.19.1,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends openssl: ``>=3.2.1,<4.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cyvcf2

   and update with::

      mamba update cyvcf2

  To create a new environment, run::

      mamba create --name myenvname cyvcf2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cyvcf2:<tag>

   (see `cyvcf2/tags`_ for valid values for ``<tag>``)


.. |downloads_cyvcf2| image:: https://img.shields.io/conda/dn/bioconda/cyvcf2.svg?style=flat
   :target: https://anaconda.org/bioconda/cyvcf2
   :alt:   (downloads)
.. |docker_cyvcf2| image:: https://quay.io/repository/biocontainers/cyvcf2/status
   :target: https://quay.io/repository/biocontainers/cyvcf2
.. _`cyvcf2/tags`: https://quay.io/repository/biocontainers/cyvcf2?tab=tags


.. raw:: html

    <script>
        var package = "cyvcf2";
        var versions = ["0.30.28","0.30.27","0.30.26","0.30.25","0.30.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyvcf2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyvcf2/README.html