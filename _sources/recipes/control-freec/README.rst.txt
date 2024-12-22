:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'control-freec'
.. highlight: bash

control-freec
=============

.. conda:recipe:: control-freec
   :replaces_section_title:
   :noindex:

   Copy number and genotype annotation from whole genome and whole exome
   sequencing data.


   :homepage: https://github.com/BoevaLab/FREEC
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`control-freec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec/meta.yaml>`_
   :links: biotools: :biotools:`freec`

   


.. conda:package:: control-freec

   |downloads_control-freec| |docker_control-freec|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>11.6-3</code>,  <code>11.6-2</code>,  <code>11.6-1</code>,  <code>11.6-0</code>,  <code>11.6b-2</code>,  <code>11.6b-1</code>,  <code>11.6b-0</code>,  <code>11.5-1</code>,  <code>11.5-0</code>,  </span></summary>
      

      ``11.6-3``,  ``11.6-2``,  ``11.6-1``,  ``11.6-0``,  ``11.6b-2``,  ``11.6b-1``,  ``11.6b-0``,  ``11.5-1``,  ``11.5-0``,  ``11.4-0``,  ``10.6-0``,  ``10.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rtracklayer: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
   :depends samtools: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install control-freec

   and update with::

      mamba update control-freec

  To create a new environment, run::

      mamba create --name myenvname control-freec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/control-freec:<tag>

   (see `control-freec/tags`_ for valid values for ``<tag>``)


.. |downloads_control-freec| image:: https://img.shields.io/conda/dn/bioconda/control-freec.svg?style=flat
   :target: https://anaconda.org/bioconda/control-freec
   :alt:   (downloads)
.. |docker_control-freec| image:: https://quay.io/repository/biocontainers/control-freec/status
   :target: https://quay.io/repository/biocontainers/control-freec
.. _`control-freec/tags`: https://quay.io/repository/biocontainers/control-freec?tab=tags


.. raw:: html

    <script>
        var package = "control-freec";
        var versions = ["11.6","11.6","11.6","11.6","11.6b"];
    </script>





Notes
-----
The tool will be available as \`freec\` in the command line.
See the homepage for example config files. Auxiliary scripts
like e.g. freec2bed.pl and freec2circos.pl \(see homepage\) are available in the
command line as well.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/control-freec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/control-freec/README.html