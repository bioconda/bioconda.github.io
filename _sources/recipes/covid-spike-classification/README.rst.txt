:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covid-spike-classification'
.. highlight: bash

covid-spike-classification
==========================

.. conda:recipe:: covid-spike-classification
   :replaces_section_title:
   :noindex:

   Detect interesting SARS\-CoV\-2 spike protein variants from Sanger sequencing data.

   :homepage: https://github.com/kblin/covid-spike-classification/
   :license: APACHE / Apache Software
   :recipe: /`covid-spike-classification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification/meta.yaml>`_

   


.. conda:package:: covid-spike-classification

   |downloads_covid-spike-classification| |docker_covid-spike-classification|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends bowtie2: ``>=2.4.2``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.10``
   :depends tracy: ``>=0.5.3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install covid-spike-classification

   and update with::

      mamba update covid-spike-classification

  To create a new environment, run::

      mamba create --name myenvname covid-spike-classification

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/covid-spike-classification:<tag>

   (see `covid-spike-classification/tags`_ for valid values for ``<tag>``)


.. |downloads_covid-spike-classification| image:: https://img.shields.io/conda/dn/bioconda/covid-spike-classification.svg?style=flat
   :target: https://anaconda.org/bioconda/covid-spike-classification
   :alt:   (downloads)
.. |docker_covid-spike-classification| image:: https://quay.io/repository/biocontainers/covid-spike-classification/status
   :target: https://quay.io/repository/biocontainers/covid-spike-classification
.. _`covid-spike-classification/tags`: https://quay.io/repository/biocontainers/covid-spike-classification?tab=tags


.. raw:: html

    <script>
        var package = "covid-spike-classification";
        var versions = ["0.6.4","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covid-spike-classification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covid-spike-classification/README.html