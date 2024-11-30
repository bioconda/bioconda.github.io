:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxquant'
.. highlight: bash

maxquant
========

.. conda:recipe:: maxquant
   :replaces_section_title:
   :noindex:

   MaxQuant is a quantitative proteomics software package designed for analyzing large mass\-spectrometric data sets. License restricted.

   :homepage: http://www.coxdocs.org/doku.php?id=maxquant:start
   :license: http://www.coxdocs.org/lib/exe/fetch.php?media=license_agreement.pdf
   :recipe: /`maxquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant/meta.yaml>`_
   :links: biotools: :biotools:`MaxQuant`, biotools: :biotools:`maxquant`, doi: :doi:`10.1038/s41592-018-0018-y`, usegalaxy-eu: :usegalaxy-eu:`maxquant`

   


.. conda:package:: maxquant

   |downloads_maxquant| |docker_maxquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3.0-1</code>,  <code>2.0.3.0-0</code>,  <code>2.0.1.0-2</code>,  <code>2.0.1.0-1</code>,  <code>2.0.1.0-0</code>,  <code>1.6.17.0-4</code>,  <code>1.6.17.0-3</code>,  <code>1.6.17.0-2</code>,  <code>1.6.17.0-1</code>,  </span></summary>
      

      ``2.0.3.0-1``,  ``2.0.3.0-0``,  ``2.0.1.0-2``,  ``2.0.1.0-1``,  ``2.0.1.0-0``,  ``1.6.17.0-4``,  ``1.6.17.0-3``,  ``1.6.17.0-2``,  ``1.6.17.0-1``,  ``1.6.17.0-0``,  ``1.6.10.43-1``,  ``1.6.10.43-0``,  ``1.6.3.4-1``,  ``1.6.3.4-0``,  ``1.6.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends mono: ``5.14.0.177.*``
   :depends python: 
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

      mamba install maxquant

   and update with::

      mamba update maxquant

  To create a new environment, run::

      mamba create --name myenvname maxquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxquant:<tag>

   (see `maxquant/tags`_ for valid values for ``<tag>``)


.. |downloads_maxquant| image:: https://img.shields.io/conda/dn/bioconda/maxquant.svg?style=flat
   :target: https://anaconda.org/bioconda/maxquant
   :alt:   (downloads)
.. |docker_maxquant| image:: https://quay.io/repository/biocontainers/maxquant/status
   :target: https://quay.io/repository/biocontainers/maxquant
.. _`maxquant/tags`: https://quay.io/repository/biocontainers/maxquant?tab=tags


.. raw:: html

    <script>
        var package = "maxquant";
        var versions = ["2.0.3.0","2.0.3.0","2.0.1.0","2.0.1.0","2.0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxquant/README.html