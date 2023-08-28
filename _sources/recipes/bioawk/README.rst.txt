:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioawk'
.. highlight: bash

bioawk
======

.. conda:recipe:: bioawk
   :replaces_section_title:
   :noindex:

   BWK awk modified for biological data

   :homepage: https://github.com/lh3/bioawk
   :license: Free software license (https://github.com/lh3/bioawk/blob/master/README.awk#L1)
   :recipe: /`bioawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioawk/meta.yaml>`_

   


.. conda:package:: bioawk

   |downloads_bioawk| |docker_bioawk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install bioawk

   and update with::

      mamba update bioawk

  To create a new environment, run::

      mamba create --name myenvname bioawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioawk:<tag>

   (see `bioawk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioawk| image:: https://img.shields.io/conda/dn/bioconda/bioawk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioawk
   :alt:   (downloads)
.. |docker_bioawk| image:: https://quay.io/repository/biocontainers/bioawk/status
   :target: https://quay.io/repository/biocontainers/bioawk
.. _`bioawk/tags`: https://quay.io/repository/biocontainers/bioawk?tab=tags


.. raw:: html

    <script>
        var package = "bioawk";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioawk/README.html