:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abyss'
.. highlight: bash

abyss
=====

.. conda:recipe:: abyss
   :replaces_section_title:
   :noindex:

   Assembly By Short Sequences \- a de novo\, parallel\, paired\-end short read sequence assembler

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/abyss
   :documentation: https://github.com/bcgsc/abyss#readme
   
   :developer docs: https://github.com/bcgsc/abyss
   :license: GPL-3.0-only
   :recipe: /`abyss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abyss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abyss/meta.yaml>`_
   :links: biotools: :biotools:`abyss`, doi: :doi:`10.1101/gr.214346.116`, doi: :doi:`10.1101/gr.089532.108`

   


.. conda:package:: abyss

   |downloads_abyss| |docker_abyss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.7-3</code>,  <code>2.3.7-2</code>,  <code>2.3.7-1</code>,  <code>2.3.7-0</code>,  <code>2.3.6-1</code>,  <code>2.3.6-0</code>,  <code>2.3.5-1</code>,  <code>2.3.5-0</code>,  <code>2.3.4-1</code>,  </span></summary>
      

      ``2.3.7-3``,  ``2.3.7-2``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.9.0-7``,  ``1.9.0-6``,  ``1.9.0-5``,  ``1.9.0-4``,  ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.5.2-5``,  ``1.5.2-4``,  ``1.5.2-3``,  ``1.5.2-2``,  ``1.5.2-1``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends btllib: ``>=1.7.2,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends perl: 
   :depends util-linux: 
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

      mamba install abyss

   and update with::

      mamba update abyss

  To create a new environment, run::

      mamba create --name myenvname abyss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abyss:<tag>

   (see `abyss/tags`_ for valid values for ``<tag>``)


.. |downloads_abyss| image:: https://img.shields.io/conda/dn/bioconda/abyss.svg?style=flat
   :target: https://anaconda.org/bioconda/abyss
   :alt:   (downloads)
.. |docker_abyss| image:: https://quay.io/repository/biocontainers/abyss/status
   :target: https://quay.io/repository/biocontainers/abyss
.. _`abyss/tags`: https://quay.io/repository/biocontainers/abyss?tab=tags


.. raw:: html

    <script>
        var package = "abyss";
        var versions = ["2.3.7","2.3.7","2.3.7","2.3.7","2.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abyss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abyss/README.html