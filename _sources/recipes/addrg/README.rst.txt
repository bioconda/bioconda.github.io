:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'addrg'
.. highlight: bash

addrg
=====

.. conda:recipe:: addrg
   :replaces_section_title:
   :noindex:

   Add read group to BAM files

   :homepage: https://github.com/holtgrewe/addrg
   :license: MIT
   :recipe: /`addrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addrg/meta.yaml>`_

   


.. conda:package:: addrg

   |downloads_addrg| |docker_addrg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-12</code>,  <code>0.2.1-11</code>,  <code>0.2.1-10</code>,  <code>0.2.1-9</code>,  <code>0.2.1-8</code>,  <code>0.2.1-7</code>,  <code>0.2.1-6</code>,  <code>0.2.1-5</code>,  <code>0.2.1-4</code>,  </span></summary>
      

      ``0.2.1-12``,  ``0.2.1-11``,  ``0.2.1-10``,  ``0.2.1-9``,  ``0.2.1-8``,  ``0.2.1-7``,  ``0.2.1-6``,  ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.19.1,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install addrg

   and update with::

      mamba update addrg

  To create a new environment, run::

      mamba create --name myenvname addrg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/addrg:<tag>

   (see `addrg/tags`_ for valid values for ``<tag>``)


.. |downloads_addrg| image:: https://img.shields.io/conda/dn/bioconda/addrg.svg?style=flat
   :target: https://anaconda.org/bioconda/addrg
   :alt:   (downloads)
.. |docker_addrg| image:: https://quay.io/repository/biocontainers/addrg/status
   :target: https://quay.io/repository/biocontainers/addrg
.. _`addrg/tags`: https://quay.io/repository/biocontainers/addrg?tab=tags


.. raw:: html

    <script>
        var package = "addrg";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/addrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/addrg/README.html