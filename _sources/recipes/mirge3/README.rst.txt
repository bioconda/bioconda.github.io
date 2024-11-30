:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge3'
.. highlight: bash

mirge3
======

.. conda:recipe:: mirge3
   :replaces_section_title:
   :noindex:

   Comprehensive analysis of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3.0/
   :documentation: https://mirge3.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`mirge3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3/meta.yaml>`_

   Comprehensive analysis of small RNA sequencing data


.. conda:package:: mirge3

   |downloads_mirge3| |docker_mirge3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: 
   :depends biopython: 
   :depends bowtie: 
   :depends cutadapt: 
   :depends future: ``>=0.18.2``
   :depends joblib: ``>=0.15.1``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: 
   :depends r-ggplot2: 
   :depends reportlab: ``>=3.5.42``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: ``>=1.4.1``
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

      mamba install mirge3

   and update with::

      mamba update mirge3

  To create a new environment, run::

      mamba create --name myenvname mirge3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirge3:<tag>

   (see `mirge3/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge3| image:: https://img.shields.io/conda/dn/bioconda/mirge3.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge3
   :alt:   (downloads)
.. |docker_mirge3| image:: https://quay.io/repository/biocontainers/mirge3/status
   :target: https://quay.io/repository/biocontainers/mirge3
.. _`mirge3/tags`: https://quay.io/repository/biocontainers/mirge3?tab=tags


.. raw:: html

    <script>
        var package = "mirge3";
        var versions = ["0.1.4","0.1.4","0.1.2","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge3/README.html