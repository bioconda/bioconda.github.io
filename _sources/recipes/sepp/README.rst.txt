:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp'
.. highlight: bash

sepp
====

.. conda:recipe:: sepp
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement

   :homepage: https://github.com/smirarab/sepp
   :license: GPL3 / GPLv3
   :recipe: /`sepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp/meta.yaml>`_
   :links: biotools: :biotools:`sepp`

   


.. conda:package:: sepp

   |downloads_sepp| |docker_sepp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.5-0</code>,  <code>4.5.4-1</code>,  <code>4.5.4-0</code>,  <code>4.5.1-4</code>,  <code>4.5.1-3</code>,  <code>4.5.1-2</code>,  <code>4.5.1-1</code>,  <code>4.5.1-0</code>,  <code>4.4.0-0</code>,  </span></summary>
      

      ``4.5.5-0``,  ``4.5.4-1``,  ``4.5.4-0``,  ``4.5.1-4``,  ``4.5.1-3``,  ``4.5.1-2``,  ``4.5.1-1``,  ``4.5.1-0``,  ``4.4.0-0``,  ``4.3.10-3``,  ``4.3.10-2``,  ``4.3.10-0``,  ``4.3.9-0``,  ``4.3.8-0``,  ``v4.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends dendropy: ``>=5.0.1,<6.0a0``
   :depends hmmer: ``>=3.4,<3.5.0a0``
   :depends openjdk: 
   :depends pasta: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install sepp

   and update with::

      mamba update sepp

  To create a new environment, run::

      mamba create --name myenvname sepp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sepp:<tag>

   (see `sepp/tags`_ for valid values for ``<tag>``)


.. |downloads_sepp| image:: https://img.shields.io/conda/dn/bioconda/sepp.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp
   :alt:   (downloads)
.. |docker_sepp| image:: https://quay.io/repository/biocontainers/sepp/status
   :target: https://quay.io/repository/biocontainers/sepp
.. _`sepp/tags`: https://quay.io/repository/biocontainers/sepp?tab=tags


.. raw:: html

    <script>
        var package = "sepp";
        var versions = ["4.5.5","4.5.4","4.5.4","4.5.1","4.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp/README.html