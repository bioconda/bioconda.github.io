:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smudgeplot'
.. highlight: bash

smudgeplot
==========

.. conda:recipe:: smudgeplot
   :replaces_section_title:
   :noindex:

   Inference of ploidy and heterozygosity structure using whole genome sequencing data.

   :homepage: https://github.com/KamilSJaron/smudgeplot
   :license: APACHE / Apache-2.0
   :recipe: /`smudgeplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot/meta.yaml>`_

   


.. conda:package:: smudgeplot

   |downloads_smudgeplot| |docker_smudgeplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-0</code>,  <code>0.2.5-4</code>,  <code>0.2.5-3</code>,  <code>0.2.5-2</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  </span></summary>
      

      ``0.3.0-0``,  ``0.2.5-4``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-argparse: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-viridis: 
   :depends scipy: 
   :depends xorg-libxrender: ``>=0.9.11,<0.10.0a0``
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

      mamba install smudgeplot

   and update with::

      mamba update smudgeplot

  To create a new environment, run::

      mamba create --name myenvname smudgeplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smudgeplot:<tag>

   (see `smudgeplot/tags`_ for valid values for ``<tag>``)


.. |downloads_smudgeplot| image:: https://img.shields.io/conda/dn/bioconda/smudgeplot.svg?style=flat
   :target: https://anaconda.org/bioconda/smudgeplot
   :alt:   (downloads)
.. |docker_smudgeplot| image:: https://quay.io/repository/biocontainers/smudgeplot/status
   :target: https://quay.io/repository/biocontainers/smudgeplot
.. _`smudgeplot/tags`: https://quay.io/repository/biocontainers/smudgeplot?tab=tags


.. raw:: html

    <script>
        var package = "smudgeplot";
        var versions = ["0.3.0","0.2.5","0.2.5","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smudgeplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smudgeplot/README.html