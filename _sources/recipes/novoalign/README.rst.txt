:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novoalign'
.. highlight: bash

novoalign
=========

.. conda:recipe:: novoalign
   :replaces_section_title:
   :noindex:

   Powerful tool designed for mapping of short reads onto a reference genome from Illumina\, Ion Torrent\, and 454 NGS platforms

   :homepage: http://www.novocraft.com/products/novoalign/
   :license: Commercial (requires license for use)
   :recipe: /`novoalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoalign/meta.yaml>`_
   :links: biotools: :biotools:`Novoalign`

   


.. conda:package:: novoalign

   |downloads_novoalign| |docker_novoalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.03.04-3</code>,  <code>4.03.04-2</code>,  <code>4.03.04-1</code>,  <code>4.03.04-0</code>,  <code>4.02.02-4</code>,  <code>4.02.02-2</code>,  <code>4.02.02-1</code>,  <code>4.02.02-0</code>,  <code>4.02.00-0</code>,  </span></summary>
      

      ``4.03.04-3``,  ``4.03.04-2``,  ``4.03.04-1``,  ``4.03.04-0``,  ``4.02.02-4``,  ``4.02.02-2``,  ``4.02.02-1``,  ``4.02.02-0``,  ``4.02.00-0``,  ``3.09.04-6``,  ``3.09.04-5``,  ``3.09.04-4``,  ``3.09.04-3``,  ``3.09.04-2``,  ``3.09.04-1``,  ``3.09.04-0``,  ``3.09.00-2``,  ``3.09.00-1``,  ``3.09.00-0``,  ``3.07.00-1``,  ``3.07.00-0``,  ``3.06.05-0``,  ``3.04.04-3``,  ``3.04.04-2``,  ``3.04.04-0``,  ``3.03.02-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install novoalign

   and update with::

      mamba update novoalign

  To create a new environment, run::

      mamba create --name myenvname novoalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novoalign:<tag>

   (see `novoalign/tags`_ for valid values for ``<tag>``)


.. |downloads_novoalign| image:: https://img.shields.io/conda/dn/bioconda/novoalign.svg?style=flat
   :target: https://anaconda.org/bioconda/novoalign
   :alt:   (downloads)
.. |docker_novoalign| image:: https://quay.io/repository/biocontainers/novoalign/status
   :target: https://quay.io/repository/biocontainers/novoalign
.. _`novoalign/tags`: https://quay.io/repository/biocontainers/novoalign?tab=tags


.. raw:: html

    <script>
        var package = "novoalign";
        var versions = ["4.03.04","4.03.04","4.03.04","4.03.04","4.02.02"];
    </script>





Notes
-----
Novoalign V4 will not run unless a \"novoalign.lic\" license file is provided in the same directory as its binaries. The license file can be copied in to the conda environment via the \"novoalign\-license\-register\" command.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoalign/README.html