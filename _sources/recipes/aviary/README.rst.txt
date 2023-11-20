:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aviary'
.. highlight: bash

aviary
======

.. conda:recipe:: aviary
   :replaces_section_title:
   :noindex:

   End\-to\-end metagenomics hybrid assembly and binning pipeline.

   :homepage: https://github.com/rhysnewell/aviary/
   :documentation: https://rhysnewell.github.io/aviary/
   
   :license: GPL3
   :recipe: /`aviary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary/meta.yaml>`_

   Aviary is an easy to use hybrid assembler and metagenomic pipeline

   For more details see documentation\: https\:\/\/rhysnewell.github.io\/aviary\/.


.. conda:package:: aviary

   |downloads_aviary| |docker_aviary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.2-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.7-0</code>,  <code>0.5.4-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.5.4-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends biopython: 
   :depends extern: 
   :depends mamba: ``>=0.8.2``
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends pigz: ``2.6.*``
   :depends python: ``>=3.8,<=3.11``
   :depends ruamel.yaml: ``>=0.15.99``
   :depends snakemake: ``>=7.0.0,<=7.32.3``
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

      mamba install aviary

   and update with::

      mamba update aviary

  To create a new environment, run::

      mamba create --name myenvname aviary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aviary:<tag>

   (see `aviary/tags`_ for valid values for ``<tag>``)


.. |downloads_aviary| image:: https://img.shields.io/conda/dn/bioconda/aviary.svg?style=flat
   :target: https://anaconda.org/bioconda/aviary
   :alt:   (downloads)
.. |docker_aviary| image:: https://quay.io/repository/biocontainers/aviary/status
   :target: https://quay.io/repository/biocontainers/aviary
.. _`aviary/tags`: https://quay.io/repository/biocontainers/aviary?tab=tags


.. raw:: html

    <script>
        var package = "aviary";
        var versions = ["0.8.3","0.8.2","0.8.1","0.7.2","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aviary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aviary/README.html