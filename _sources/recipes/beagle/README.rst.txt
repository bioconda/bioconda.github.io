:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beagle'
.. highlight: bash

beagle
======

.. conda:recipe:: beagle
   :replaces_section_title:
   :noindex:

   Beagle is a software package for phasing genotypes and for imputing ungenotyped markers.

   :homepage: http://faculty.washington.edu/browning/beagle/beagle.html
   :documentation: https://faculty.washington.edu/browning/beagle/beagle_5.4_18Mar22.pdf
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`beagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle/meta.yaml>`_
   :links: biotools: :biotools:`BEAGLE`, doi: :doi:`10.1086/521987`, doi: :doi:`10.1016/j.ajhg.2018.07.015`

   


.. conda:package:: beagle

   |downloads_beagle| |docker_beagle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4_29Oct24.c8e-0</code>,  <code>5.4_27May24.118-0</code>,  <code>5.4_22Jul22.46e-0</code>,  <code>5.2_21Apr21.304-0</code>,  <code>5.1_24Aug19.3e8-1</code>,  <code>5.1_24Aug19.3e8-0</code>,  <code>4.1_21Jan17.6cc.jar-1</code>,  <code>4.1_21Jan17.6cc.jar-0</code>,  <code>4.1_03May16.862.jar-0</code>,  </span></summary>
      

      ``5.4_29Oct24.c8e-0``,  ``5.4_27May24.118-0``,  ``5.4_22Jul22.46e-0``,  ``5.2_21Apr21.304-0``,  ``5.1_24Aug19.3e8-1``,  ``5.1_24Aug19.3e8-0``,  ``4.1_21Jan17.6cc.jar-1``,  ``4.1_21Jan17.6cc.jar-0``,  ``4.1_03May16.862.jar-0``,  ``4.0_06Jun17-3``,  ``4.0_06Jun17-2``,  ``4.0_06Jun17-1``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
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

      mamba install beagle

   and update with::

      mamba update beagle

  To create a new environment, run::

      mamba create --name myenvname beagle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beagle:<tag>

   (see `beagle/tags`_ for valid values for ``<tag>``)


.. |downloads_beagle| image:: https://img.shields.io/conda/dn/bioconda/beagle.svg?style=flat
   :target: https://anaconda.org/bioconda/beagle
   :alt:   (downloads)
.. |docker_beagle| image:: https://quay.io/repository/biocontainers/beagle/status
   :target: https://quay.io/repository/biocontainers/beagle
.. _`beagle/tags`: https://quay.io/repository/biocontainers/beagle?tab=tags


.. raw:: html

    <script>
        var package = "beagle";
        var versions = ["5.4_29Oct24.c8e","5.4_27May24.118","5.4_22Jul22.46e","5.2_21Apr21.304","5.1_24Aug19.3e8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle/README.html