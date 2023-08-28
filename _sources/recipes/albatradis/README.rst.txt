:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'albatradis'
.. highlight: bash

albatradis
==========

.. conda:recipe:: albatradis
   :replaces_section_title:
   :noindex:

   Comparative TraDIS analysis

   :homepage: https://github.com/quadram-institute-bioscience/albatradis
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`albatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis/meta.yaml>`_

   


.. conda:package:: albatradis

   |downloads_albatradis| |docker_albatradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-4</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-3</code>,  </span></summary>
      

      ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.0.5-4``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.68``
   :depends biotradis: ``>=1.4.5``
   :depends cython: 
   :depends dendropy: 
   :depends graphviz: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends pyfastaq: ``>=3.12.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-graphviz: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install albatradis

   and update with::

      mamba update albatradis

  To create a new environment, run::

      mamba create --name myenvname albatradis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/albatradis:<tag>

   (see `albatradis/tags`_ for valid values for ``<tag>``)


.. |downloads_albatradis| image:: https://img.shields.io/conda/dn/bioconda/albatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/albatradis
   :alt:   (downloads)
.. |docker_albatradis| image:: https://quay.io/repository/biocontainers/albatradis/status
   :target: https://quay.io/repository/biocontainers/albatradis
.. _`albatradis/tags`: https://quay.io/repository/biocontainers/albatradis?tab=tags


.. raw:: html

    <script>
        var package = "albatradis";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/albatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/albatradis/README.html