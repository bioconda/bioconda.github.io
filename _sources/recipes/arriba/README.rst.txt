:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arriba'
.. highlight: bash

arriba
======

.. conda:recipe:: arriba
   :replaces_section_title:
   :noindex:

   Fast and accurate gene fusion detection from RNA\-Seq data

   :homepage: https://github.com/suhrig/arriba
   :license: MIT
   :recipe: /`arriba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba/meta.yaml>`_

   


.. conda:package:: arriba

   |downloads_arriba| |docker_arriba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-4</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  </span></summary>
      

      ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends htslib: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=3.3.0``
   :depends r-circlize: 
   :depends samtools: ``>=1.9``
   :depends star: ``>=2.7.11b``
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

      mamba install arriba

   and update with::

      mamba update arriba

  To create a new environment, run::

      mamba create --name myenvname arriba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arriba:<tag>

   (see `arriba/tags`_ for valid values for ``<tag>``)


.. |downloads_arriba| image:: https://img.shields.io/conda/dn/bioconda/arriba.svg?style=flat
   :target: https://anaconda.org/bioconda/arriba
   :alt:   (downloads)
.. |docker_arriba| image:: https://quay.io/repository/biocontainers/arriba/status
   :target: https://quay.io/repository/biocontainers/arriba
.. _`arriba/tags`: https://quay.io/repository/biocontainers/arriba?tab=tags


.. raw:: html

    <script>
        var package = "arriba";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arriba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arriba/README.html