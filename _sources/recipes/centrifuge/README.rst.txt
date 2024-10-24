:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrifuge'
.. highlight: bash

centrifuge
==========

.. conda:recipe:: centrifuge
   :replaces_section_title:
   :noindex:

   Classifier for metagenomic sequences. Supports classifier scripts

   :homepage: https://github.com/DaehwanKimLab/centrifuge
   :license: GPL3 / GPL-3.0-only
   :recipe: /`centrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge/meta.yaml>`_
   :links: biotools: :biotools:`Centrifuge`, doi: :doi:`10.1101/gr.210641.116`

   


.. conda:package:: centrifuge

   |downloads_centrifuge| |docker_centrifuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4.2-0</code>,  <code>1.0.4.1-2</code>,  <code>1.0.4.1-1</code>,  <code>1.0.4.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.4_beta-6</code>,  <code>1.0.4_beta-5</code>,  <code>1.0.4_beta-4</code>,  <code>1.0.4_beta-3</code>,  </span></summary>
      

      ``1.0.4.2-0``,  ``1.0.4.1-2``,  ``1.0.4.1-1``,  ``1.0.4.1-0``,  ``1.0.4-0``,  ``1.0.4_beta-6``,  ``1.0.4_beta-5``,  ``1.0.4_beta-4``,  ``1.0.4_beta-3``,  ``1.0.4_beta-2``,  ``1.0.4_beta-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: 
   :depends python: 
   :depends tar: 
   :depends wget: 
   :depends zlib: 
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

      mamba install centrifuge

   and update with::

      mamba update centrifuge

  To create a new environment, run::

      mamba create --name myenvname centrifuge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/centrifuge:<tag>

   (see `centrifuge/tags`_ for valid values for ``<tag>``)


.. |downloads_centrifuge| image:: https://img.shields.io/conda/dn/bioconda/centrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/centrifuge
   :alt:   (downloads)
.. |docker_centrifuge| image:: https://quay.io/repository/biocontainers/centrifuge/status
   :target: https://quay.io/repository/biocontainers/centrifuge
.. _`centrifuge/tags`: https://quay.io/repository/biocontainers/centrifuge?tab=tags


.. raw:: html

    <script>
        var package = "centrifuge";
        var versions = ["1.0.4.2","1.0.4.1","1.0.4.1","1.0.4.1","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuge/README.html