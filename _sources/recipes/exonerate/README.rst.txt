:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exonerate'
.. highlight: bash

exonerate
=========

.. conda:recipe:: exonerate
   :replaces_section_title:
   :noindex:

   Exonerate \- A generic tool for pairwise sequence comparison \/ alignment

   :homepage: https://www.ebi.ac.uk/about/vertebrate-genomics/software/exonerate
   :license: GPL-3.0
   :recipe: /`exonerate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exonerate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exonerate/meta.yaml>`_
   :links: biotools: :biotools:`exonerate`

   


.. conda:package:: exonerate

   |downloads_exonerate| |docker_exonerate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-7</code>,  <code>2.4.0-6</code>,  <code>2.4.0-5</code>,  <code>2.4.0-4</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  </span></summary>
      

      ``2.4.0-7``,  ``2.4.0-6``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends glib: 
   :depends libgcc-ng: ``>=12``
   :depends libglib: ``>=2.76.2,<3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
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

      mamba install exonerate

   and update with::

      mamba update exonerate

  To create a new environment, run::

      mamba create --name myenvname exonerate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/exonerate:<tag>

   (see `exonerate/tags`_ for valid values for ``<tag>``)


.. |downloads_exonerate| image:: https://img.shields.io/conda/dn/bioconda/exonerate.svg?style=flat
   :target: https://anaconda.org/bioconda/exonerate
   :alt:   (downloads)
.. |docker_exonerate| image:: https://quay.io/repository/biocontainers/exonerate/status
   :target: https://quay.io/repository/biocontainers/exonerate
.. _`exonerate/tags`: https://quay.io/repository/biocontainers/exonerate?tab=tags


.. raw:: html

    <script>
        var package = "exonerate";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exonerate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exonerate/README.html