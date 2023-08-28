:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidid'
.. highlight: bash

plasmidid
=========

.. conda:recipe:: plasmidid
   :replaces_section_title:
   :noindex:

   Pipeline for plasmid identification and reconstruction

   :homepage: https://github.com/BU-ISCIII/plasmidID
   :license: GPLv3
   :recipe: /`plasmidid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidid/meta.yaml>`_

   PlasmidID is a mapping\-based\, assembly\-assisted plasmid identification tool that analyzes and gives graphic solution for plasmid identification.


.. conda:package:: plasmidid

   |downloads_plasmidid| |docker_plasmidid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.5-0</code>,  <code>1.6.4-3</code>,  <code>1.6.4-2</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.3-2</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  </span></summary>
      

      ``1.6.5-0``,  ``1.6.4-3``,  ``1.6.4-2``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends circos: 
   :depends gawk: 
   :depends mash: ``>=2``
   :depends numpy: 
   :depends pandas: 
   :depends perl-gd: ``>=2.71``
   :depends prokka: ``>=1.14``
   :depends python: ``>=3.6``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends spades: 
   :depends tabulate: 
   :depends tbb: ``2020.2``
   :depends trimmomatic: 
   :depends wget: 
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

      mamba install plasmidid

   and update with::

      mamba update plasmidid

  To create a new environment, run::

      mamba create --name myenvname plasmidid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasmidid:<tag>

   (see `plasmidid/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidid| image:: https://img.shields.io/conda/dn/bioconda/plasmidid.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidid
   :alt:   (downloads)
.. |docker_plasmidid| image:: https://quay.io/repository/biocontainers/plasmidid/status
   :target: https://quay.io/repository/biocontainers/plasmidid
.. _`plasmidid/tags`: https://quay.io/repository/biocontainers/plasmidid?tab=tags


.. raw:: html

    <script>
        var package = "plasmidid";
        var versions = ["1.6.5","1.6.4","1.6.4","1.6.4","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidid/README.html