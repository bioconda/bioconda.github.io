:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitos'
.. highlight: bash

mitos
=====

.. conda:recipe:: mitos
   :replaces_section_title:
   :noindex:

   MITOS is a tool for the annotation of metazoan mitochondrial genomes.

   :homepage: http://mitos.bioinf.uni-leipzig.de
   :developer docs: https://gitlab.com/Bernt/MITOS
   :license: MIT / MIT
   :recipe: /`mitos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos/meta.yaml>`_

   


.. conda:package:: mitos

   |downloads_mitos| |docker_mitos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.9-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-1</code>,  <code>2.1.7-0</code>,  <code>2.1.6-1</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  </span></summary>
      

      ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``<1.82``
   :depends blast: ``>=2.9``
   :depends hmmer: ``3.2.*``
   :depends infernal: ``>=1.1.5``
   :depends libtiff: 
   :depends openjdk: ``>8``
   :depends pillow: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends reportlab: 
   :depends viennarna: 
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

      mamba install mitos

   and update with::

      mamba update mitos

  To create a new environment, run::

      mamba create --name myenvname mitos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitos:<tag>

   (see `mitos/tags`_ for valid values for ``<tag>``)


.. |downloads_mitos| image:: https://img.shields.io/conda/dn/bioconda/mitos.svg?style=flat
   :target: https://anaconda.org/bioconda/mitos
   :alt:   (downloads)
.. |docker_mitos| image:: https://quay.io/repository/biocontainers/mitos/status
   :target: https://quay.io/repository/biocontainers/mitos
.. _`mitos/tags`: https://quay.io/repository/biocontainers/mitos?tab=tags


.. raw:: html

    <script>
        var package = "mitos";
        var versions = ["2.1.9","2.1.8","2.1.7","2.1.7","2.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitos/README.html