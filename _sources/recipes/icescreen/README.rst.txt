:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icescreen'
.. highlight: bash

icescreen
=========

.. conda:recipe:: icescreen
   :replaces_section_title:
   :noindex:

   ICEscreen detects and annotates ICEs \(Integrative and Conjugative Elements\) and IMEs \(Integrative and Mobilizable Elements\) in Firmicutes genomes.

   :homepage: https://forgemia.inra.fr/ices_imes_analysis/icescreen
   :documentation: icescreen.migale.inrae.fr
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`icescreen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icescreen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icescreen/meta.yaml>`_

   


.. conda:package:: icescreen

   |downloads_icescreen| |docker_icescreen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: ``>=0.7.0``
   :depends biopython: ``>=1.81``
   :depends blast: ``2.12.*``
   :depends hmmer: ``3.3.2.*``
   :depends pandas: ``>=2.0.0``
   :depends python: 
   :depends snakemake-minimal: ``>=7.25.0``
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

      mamba install icescreen

   and update with::

      mamba update icescreen

  To create a new environment, run::

      mamba create --name myenvname icescreen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/icescreen:<tag>

   (see `icescreen/tags`_ for valid values for ``<tag>``)


.. |downloads_icescreen| image:: https://img.shields.io/conda/dn/bioconda/icescreen.svg?style=flat
   :target: https://anaconda.org/bioconda/icescreen
   :alt:   (downloads)
.. |docker_icescreen| image:: https://quay.io/repository/biocontainers/icescreen/status
   :target: https://quay.io/repository/biocontainers/icescreen
.. _`icescreen/tags`: https://quay.io/repository/biocontainers/icescreen?tab=tags


.. raw:: html

    <script>
        var package = "icescreen";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icescreen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icescreen/README.html