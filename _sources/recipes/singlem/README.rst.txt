:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlem'
.. highlight: bash

singlem
=======

.. conda:recipe:: singlem
   :replaces_section_title:
   :noindex:

   SingleM is a tool for profiling shotgun metagenomes. It has a particular strength in detecting microbial lineages which are not in reference databases. The method it uses also makes it suitable for some related tasks\, such as assessing eukaryotic contamination\, finding bias in genome recovery\, and lineage\-targeted MAG recovery.

   :homepage: https://github.com/wwood/singlem
   :documentation: https://wwood.github.io/singlem/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`singlem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem/meta.yaml>`_

   


.. conda:package:: singlem

   |downloads_singlem| |docker_singlem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.2-2</code>,  </span></summary>
      

      ``0.18.1-1``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.84.*``
   :depends bird_tool_utils_python: ``>=0.4.1,<0.5.0``
   :depends cd-hit: ``4.8.*``
   :depends diamond: ``>=2.1.7``
   :depends expressbetadiversity: ``1.0.*``
   :depends extern: ``0.4.*``
   :depends fastalite: ``0.4.*``
   :depends fasttree: ``2.1.*``
   :depends graftm: ``0.15.*``
   :depends hmmer: ``3.2.1.*``
   :depends jinja2: ``3.1.*``
   :depends krona: ``2.8.*``
   :depends mafft: 
   :depends mfqe: ``0.5.*``
   :depends ncbi-ngs-sdk: ``3.0.*``
   :depends orfm: ``1.3.*``
   :depends pandas: ``2.2.*``
   :depends polars: ``>=0.19.3``
   :depends pplacer: ``1.1.alpha19.*``
   :depends prodigal: ``2.6.*``
   :depends pyarrow: ``16.1.*``
   :depends pyranges: ``0.1.*``
   :depends python: ``>=3.7``
   :depends seqmagick: ``0.8.*``
   :depends smafa: ``0.8.*``
   :depends sqlalchemy: ``2.0.*``
   :depends sqlite: ``3.46.*``
   :depends squarify: ``0.4.*``
   :depends sra-tools: ``3.1.*``
   :depends tqdm: ``4.66.*``
   :depends zenodo_backpack: ``>=0.3.1,<0.4.0``
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

      mamba install singlem

   and update with::

      mamba update singlem

  To create a new environment, run::

      mamba create --name myenvname singlem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/singlem:<tag>

   (see `singlem/tags`_ for valid values for ``<tag>``)


.. |downloads_singlem| image:: https://img.shields.io/conda/dn/bioconda/singlem.svg?style=flat
   :target: https://anaconda.org/bioconda/singlem
   :alt:   (downloads)
.. |docker_singlem| image:: https://quay.io/repository/biocontainers/singlem/status
   :target: https://quay.io/repository/biocontainers/singlem
.. _`singlem/tags`: https://quay.io/repository/biocontainers/singlem?tab=tags


.. raw:: html

    <script>
        var package = "singlem";
        var versions = ["0.18.1","0.18.1","0.18.0","0.17.0","0.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlem/README.html