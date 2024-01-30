:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wiggletools'
.. highlight: bash

wiggletools
===========

.. conda:recipe:: wiggletools
   :replaces_section_title:
   :noindex:

   The WiggleTools package allows genomewide data files to be manipulated as numerical functions\, equipped with all the standard functional analysis operators \(sum\, product\, product by a scalar\, comparators\)\, and derived statistics \(mean\, median\, variance\, stddev\, t\-test\, Wilcoxon\'s rank sum test\, etc\).

   :homepage: https://github.com/Ensembl/WiggleTools
   :license: Apache / Apache
   :recipe: /`wiggletools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools/meta.yaml>`_

   


.. conda:package:: wiggletools

   |downloads_wiggletools| |docker_wiggletools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.11-6</code>,  <code>1.2.11-5</code>,  <code>1.2.11-4</code>,  <code>1.2.11-3</code>,  <code>1.2.11-2</code>,  <code>1.2.11-1</code>,  <code>1.2.11-0</code>,  <code>1.2.10-1</code>,  <code>1.2.10-0</code>,  </span></summary>
      

      ``1.2.11-6``,  ``1.2.11-5``,  ``1.2.11-4``,  ``1.2.11-3``,  ``1.2.11-2``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.8-2``,  ``1.2.8-1``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
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

      mamba install wiggletools

   and update with::

      mamba update wiggletools

  To create a new environment, run::

      mamba create --name myenvname wiggletools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wiggletools:<tag>

   (see `wiggletools/tags`_ for valid values for ``<tag>``)


.. |downloads_wiggletools| image:: https://img.shields.io/conda/dn/bioconda/wiggletools.svg?style=flat
   :target: https://anaconda.org/bioconda/wiggletools
   :alt:   (downloads)
.. |docker_wiggletools| image:: https://quay.io/repository/biocontainers/wiggletools/status
   :target: https://quay.io/repository/biocontainers/wiggletools
.. _`wiggletools/tags`: https://quay.io/repository/biocontainers/wiggletools?tab=tags


.. raw:: html

    <script>
        var package = "wiggletools";
        var versions = ["1.2.11","1.2.11","1.2.11","1.2.11","1.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wiggletools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wiggletools/README.html