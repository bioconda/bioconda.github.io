:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgbio'
.. highlight: bash

fgbio
=====

.. conda:recipe:: fgbio
   :replaces_section_title:
   :noindex:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT / MIT
   :recipe: /`fgbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio/meta.yaml>`_

   


.. conda:package:: fgbio

   |downloads_fgbio| |docker_fgbio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.0a-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.2.1b-0``,  ``0.2.1a-0``,  ``0.2.0-0``,  ``0.1.5a-0``,  ``0.1.3a-0``,  ``0.1.2a-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-scales: 
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

      mamba install fgbio

   and update with::

      mamba update fgbio

  To create a new environment, run::

      mamba create --name myenvname fgbio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgbio:<tag>

   (see `fgbio/tags`_ for valid values for ``<tag>``)


.. |downloads_fgbio| image:: https://img.shields.io/conda/dn/bioconda/fgbio.svg?style=flat
   :target: https://anaconda.org/bioconda/fgbio
   :alt:   (downloads)
.. |docker_fgbio| image:: https://quay.io/repository/biocontainers/fgbio/status
   :target: https://quay.io/repository/biocontainers/fgbio
.. _`fgbio/tags`: https://quay.io/repository/biocontainers/fgbio?tab=tags


.. raw:: html

    <script>
        var package = "fgbio";
        var versions = ["2.4.0","2.3.0","2.2.1","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio/README.html