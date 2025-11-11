:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'captus'
.. highlight: bash

captus
======

.. conda:recipe:: captus
   :replaces_section_title:
   :noindex:

   Captus\: Assembly of Phylogenomic Datasets from High\-Throughput Sequencing data.

   :homepage: https://github.com/edgardomortiz/Captus
   :documentation: https://edgardomortiz.github.io/captus.docs
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`captus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.10.27.564367`

   


.. conda:package:: captus

   |downloads_captus| |docker_captus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.9-0</code>,  <code>1.5.8-0</code>,  <code>1.5.7-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.99-0``,  ``0.9.98-0``,  ``0.9.97-0``,  ``0.9.96-0``,  ``0.9.95-2``,  ``0.9.95-1``,  ``0.9.95-0``,  ``0.9.93-0``,  ``0.9.92-0``,  ``0.9.91-2``,  ``0.9.91-0``,  ``0.9.90-0``,  ``0.9.89-0``,  ``0.9.88-1``,  ``0.9.88-0``,  ``0.9.86-0``,  ``0.9.85-0``,  ``0.9.84-1``,  ``0.9.84-0``,  ``0.9.83-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends clipkit: 
   :depends falco: 
   :depends fastqc: 
   :depends mafft: 
   :depends megahit: ``>=1.2.9``
   :depends mmseqs2: 
   :depends muscle: ``>=5``
   :depends pandas: ``>=2.1.0``
   :depends perl-bioperl-core: 
   :depends perl-yaml: 
   :depends pigz: 
   :depends plotly: 
   :depends python: ``>=3.6``
   :depends salmon: ``>=1.10.0``
   :depends tqdm: 
   :depends vsearch: 
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

      mamba install captus

   and update with::

      mamba update captus

  To create a new environment, run::

      mamba create --name myenvname captus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/captus:<tag>

   (see `captus/tags`_ for valid values for ``<tag>``)


.. |downloads_captus| image:: https://img.shields.io/conda/dn/bioconda/captus.svg?style=flat
   :target: https://anaconda.org/bioconda/captus
   :alt:   (downloads)
.. |docker_captus| image:: https://quay.io/repository/biocontainers/captus/status
   :target: https://quay.io/repository/biocontainers/captus
.. _`captus/tags`: https://quay.io/repository/biocontainers/captus?tab=tags


.. raw:: html

    <script>
        var package = "captus";
        var versions = ["1.6.1","1.6.0","1.5.9","1.5.8","1.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/captus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/captus/README.html