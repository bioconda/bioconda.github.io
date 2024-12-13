:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zagros'
.. highlight: bash

zagros
======

.. conda:recipe:: zagros
   :replaces_section_title:
   :noindex:

   zagros is a motif\-discovery tool for CLIP\-Seq data.

   :homepage: http://smithlabresearch.org/software/zagros/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`zagros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zagros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zagros/meta.yaml>`_

   


.. conda:package:: zagros

   |downloads_zagros| |docker_zagros|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openblas: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install zagros

   and update with::

      mamba update zagros

  To create a new environment, run::

      mamba create --name myenvname zagros

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zagros:<tag>

   (see `zagros/tags`_ for valid values for ``<tag>``)


.. |downloads_zagros| image:: https://img.shields.io/conda/dn/bioconda/zagros.svg?style=flat
   :target: https://anaconda.org/bioconda/zagros
   :alt:   (downloads)
.. |docker_zagros| image:: https://quay.io/repository/biocontainers/zagros/status
   :target: https://quay.io/repository/biocontainers/zagros
.. _`zagros/tags`: https://quay.io/repository/biocontainers/zagros?tab=tags


.. raw:: html

    <script>
        var package = "zagros";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zagros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zagros/README.html