:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amptk'
.. highlight: bash

amptk
=====

.. conda:recipe:: amptk
   :replaces_section_title:
   :noindex:

   AMPtk\: Amplicon tool kit for processing high throughput amplicon sequencing data.

   :homepage: https://github.com/nextgenusfs/amptk
   :documentation: http://amptk.readthedocs.io/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`amptk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.4925`

   


.. conda:package:: amptk

   |downloads_amptk| |docker_amptk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.2-1</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dada2: ``>=1.12.1``
   :depends bioconductor-phyloseq: 
   :depends biom-format: 
   :depends biopython: 
   :depends distro: 
   :depends fasttree: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pigz: 
   :depends psutil: 
   :depends pyfastx: ``>=0.8.0``
   :depends python: ``>=3``
   :depends python-edlib: ``>=1.2.1``
   :depends r-base: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-plotly: 
   :depends requests: 
   :depends seaborn: 
   :depends vsearch: ``>=2.15.0``
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

      mamba install amptk

   and update with::

      mamba update amptk

  To create a new environment, run::

      mamba create --name myenvname amptk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amptk:<tag>

   (see `amptk/tags`_ for valid values for ``<tag>``)


.. |downloads_amptk| image:: https://img.shields.io/conda/dn/bioconda/amptk.svg?style=flat
   :target: https://anaconda.org/bioconda/amptk
   :alt:   (downloads)
.. |docker_amptk| image:: https://quay.io/repository/biocontainers/amptk/status
   :target: https://quay.io/repository/biocontainers/amptk
.. _`amptk/tags`: https://quay.io/repository/biocontainers/amptk?tab=tags


.. raw:: html

    <script>
        var package = "amptk";
        var versions = ["1.6.0","1.5.5","1.5.4","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amptk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amptk/README.html