:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viroconstrictor'
.. highlight: bash

viroconstrictor
===============

.. conda:recipe:: viroconstrictor
   :replaces_section_title:
   :noindex:

   ViroConstrictor is a flexible pipeline for analysis of targeted viral sequencing data

   :homepage: https://rivm-bioinformatics.github.io/ViroConstrictor/
   :developer docs: https://github.com/RIVM-bioinformatics/ViroConstrictor
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`viroconstrictor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viroconstrictor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viroconstrictor/meta.yaml>`_

   


.. conda:package:: viroconstrictor

   |downloads_viroconstrictor| |docker_viroconstrictor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  </span></summary>
      

      ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends aminoextract: ``0.3.1``
   :depends biopython: ``>=1.79``
   :depends conda: 
   :depends drmaa: ``0.7.9``
   :depends fpdf2: 
   :depends mamba: 
   :depends openpyxl: 
   :depends pandas: ``>=1.5.1``
   :depends python: ``>=3.10``
   :depends pyyaml: ``6.0``
   :depends rich: ``13.*``
   :depends snakemake: ``>=7.15.2,<8``
   :depends urllib3: 
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

      mamba install viroconstrictor

   and update with::

      mamba update viroconstrictor

  To create a new environment, run::

      mamba create --name myenvname viroconstrictor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viroconstrictor:<tag>

   (see `viroconstrictor/tags`_ for valid values for ``<tag>``)


.. |downloads_viroconstrictor| image:: https://img.shields.io/conda/dn/bioconda/viroconstrictor.svg?style=flat
   :target: https://anaconda.org/bioconda/viroconstrictor
   :alt:   (downloads)
.. |docker_viroconstrictor| image:: https://quay.io/repository/biocontainers/viroconstrictor/status
   :target: https://quay.io/repository/biocontainers/viroconstrictor
.. _`viroconstrictor/tags`: https://quay.io/repository/biocontainers/viroconstrictor?tab=tags


.. raw:: html

    <script>
        var package = "viroconstrictor";
        var versions = ["1.4.3","1.4.2","1.4.1","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viroconstrictor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viroconstrictor/README.html