:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfanno'
.. highlight: bash

vcfanno
=======

.. conda:recipe:: vcfanno
   :replaces_section_title:
   :noindex:

   Annotate a VCF with other VCFs\/BEDs\/tabixed files.

   :homepage: https://github.com/brentp/vcfanno
   :documentation: https://github.com/brentp/vcfanno/blob/v0.3.6/README.md
   
   :license: MIT / MIT
   :recipe: /`vcfanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfanno/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-016-0973-5`, biotools: :biotools:`vcfanno`, usegalaxy-eu: :usegalaxy-eu:`vcfanno`

   


.. conda:package:: vcfanno

   |downloads_vcfanno| |docker_vcfanno|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-1</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.4-0``,  ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.0-1``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.11-0``,  ``0.0.10-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install vcfanno

   and update with::

      mamba update vcfanno

  To create a new environment, run::

      mamba create --name myenvname vcfanno

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfanno:<tag>

   (see `vcfanno/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfanno| image:: https://img.shields.io/conda/dn/bioconda/vcfanno.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfanno
   :alt:   (downloads)
.. |docker_vcfanno| image:: https://quay.io/repository/biocontainers/vcfanno/status
   :target: https://quay.io/repository/biocontainers/vcfanno
.. _`vcfanno/tags`: https://quay.io/repository/biocontainers/vcfanno?tab=tags


.. raw:: html

    <script>
        var package = "vcfanno";
        var versions = ["0.3.6","0.3.5","0.3.5","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfanno/README.html