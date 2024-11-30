:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoseq3'
.. highlight: bash

isoseq3
=======

.. conda:recipe:: isoseq3
   :replaces_section_title:
   :noindex:

   Iso\-Seq \- Scalable De Novo Isoform Discovery

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`isoseq3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoseq3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoseq3/meta.yaml>`_

   


.. conda:package:: isoseq3

   |downloads_isoseq3| |docker_isoseq3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>3.8.2-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.2-0</code>,  <code>3.2.1-3</code>,  </span></summary>
      

      ``4.0.0-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.0-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends isoseq: 
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

      mamba install isoseq3

   and update with::

      mamba update isoseq3

  To create a new environment, run::

      mamba create --name myenvname isoseq3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isoseq3:<tag>

   (see `isoseq3/tags`_ for valid values for ``<tag>``)


.. |downloads_isoseq3| image:: https://img.shields.io/conda/dn/bioconda/isoseq3.svg?style=flat
   :target: https://anaconda.org/bioconda/isoseq3
   :alt:   (downloads)
.. |docker_isoseq3| image:: https://quay.io/repository/biocontainers/isoseq3/status
   :target: https://quay.io/repository/biocontainers/isoseq3
.. _`isoseq3/tags`: https://quay.io/repository/biocontainers/isoseq3?tab=tags


.. raw:: html

    <script>
        var package = "isoseq3";
        var versions = ["4.0.0","3.8.2","3.8.1","3.8.0","3.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoseq3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoseq3/README.html