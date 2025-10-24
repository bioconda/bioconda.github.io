:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sniffles'
.. highlight: bash

sniffles
========

.. conda:recipe:: sniffles
   :replaces_section_title:
   :noindex:

   Sniffles is a structural variation caller using third generation sequencing \(PacBio or Oxford Nanopore\).

   :homepage: https://github.com/fritzsedlazeck/Sniffles
   :documentation: https://github.com/fritzsedlazeck/Sniffles/wiki
   
   :license: MIT / MIT
   :recipe: /`sniffles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-02024-y`, doi: :doi:`10.1038/s41592-018-0001-7`, biotools: :biotools:`sniffles`, usegalaxy-eu: :usegalaxy-eu:`sniffles`

   


.. conda:package:: sniffles

   |downloads_sniffles| |docker_sniffles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-0</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  <code>2.4-0</code>,  <code>2.3.3-0</code>,  </span></summary>
      

      ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.4-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``>=2.2.0``
   :depends psutil: ``>=5.9.4``
   :depends pysam: ``>=0.21.0``
   :depends python: ``>=3.10``
   :depends python-edlib: ``>=1.3.9``
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

      mamba install sniffles

   and update with::

      mamba update sniffles

  To create a new environment, run::

      mamba create --name myenvname sniffles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sniffles:<tag>

   (see `sniffles/tags`_ for valid values for ``<tag>``)


.. |downloads_sniffles| image:: https://img.shields.io/conda/dn/bioconda/sniffles.svg?style=flat
   :target: https://anaconda.org/bioconda/sniffles
   :alt:   (downloads)
.. |docker_sniffles| image:: https://quay.io/repository/biocontainers/sniffles/status
   :target: https://quay.io/repository/biocontainers/sniffles
.. _`sniffles/tags`: https://quay.io/repository/biocontainers/sniffles?tab=tags


.. raw:: html

    <script>
        var package = "sniffles";
        var versions = ["2.7.0","2.6.3","2.6.2","2.6.1","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sniffles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sniffles/README.html