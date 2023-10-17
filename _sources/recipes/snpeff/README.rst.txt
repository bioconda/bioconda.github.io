:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpeff'
.. highlight: bash

snpeff
======

.. conda:recipe:: snpeff
   :replaces_section_title:
   :noindex:

   Genetic variant annotation and effect prediction toolbox

   :homepage: http://snpeff.sourceforge.net/
   :license: LGPLv3
   :recipe: /`snpeff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff/meta.yaml>`_
   :links: biotools: :biotools:`snpeff`

   


.. conda:package:: snpeff

   |downloads_snpeff| |docker_snpeff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2-0</code>,  <code>5.1-2</code>,  <code>5.1-1</code>,  <code>5.1-0</code>,  <code>5.1d-0</code>,  <code>5.0-1</code>,  <code>5.0-0</code>,  <code>4.5covid19-2</code>,  <code>4.5covid19-1</code>,  </span></summary>
      

      ``5.2-0``,  ``5.1-2``,  ``5.1-1``,  ``5.1-0``,  ``5.1d-0``,  ``5.0-1``,  ``5.0-0``,  ``4.5covid19-2``,  ``4.5covid19-1``,  ``4.5covid19-0``,  ``4.3.1t-5``,  ``4.3.1t-4``,  ``4.3.1t-3``,  ``4.3.1t-2``,  ``4.3.1t-1``,  ``4.3.1t-0``,  ``4.3.1r-0``,  ``4.3.1q-0``,  ``4.3.1p-1``,  ``4.3.1p-0``,  ``4.3.1o-0``,  ``4.3.1m-0``,  ``4.3.1k-0``,  ``4.3-3``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``,  ``4.3k-0``,  ``4.3i-0``,  ``4.3g-0``,  ``4.3b-0``,  ``4.2-0``,  ``4.1l-8``,  ``4.1l-7``,  ``4.1l-6``,  ``4.1l-5``,  ``4.1l-4``,  ``4.1l-3``,  ``4.1l-2``,  ``4.1l-1``,  ``4.1l-0``,  ``3_6-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=11``
   :depends python: 
   :depends zlib: 
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

      mamba install snpeff

   and update with::

      mamba update snpeff

  To create a new environment, run::

      mamba create --name myenvname snpeff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpeff:<tag>

   (see `snpeff/tags`_ for valid values for ``<tag>``)


.. |downloads_snpeff| image:: https://img.shields.io/conda/dn/bioconda/snpeff.svg?style=flat
   :target: https://anaconda.org/bioconda/snpeff
   :alt:   (downloads)
.. |docker_snpeff| image:: https://quay.io/repository/biocontainers/snpeff/status
   :target: https://quay.io/repository/biocontainers/snpeff
.. _`snpeff/tags`: https://quay.io/repository/biocontainers/snpeff?tab=tags


.. raw:: html

    <script>
        var package = "snpeff";
        var versions = ["5.2","5.1","5.1","5.1","5.1d"];
    </script>





Notes
-----
The tool is available as command \`snpEff\`. Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpeff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpeff/README.html