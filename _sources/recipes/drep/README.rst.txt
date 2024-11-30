:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drep'
.. highlight: bash

drep
====

.. conda:recipe:: drep
   :replaces_section_title:
   :noindex:

   De\-replication of microbial genomes assembled from multiple samples

   :homepage: https://github.com/MrOlm/drep
   :documentation: https://drep.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`drep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep/meta.yaml>`_

   


.. conda:package:: drep

   |downloads_drep| |docker_drep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.5-0</code>,  <code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.5-0``,  ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.0.5-2``,  ``2.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends checkm-genome: 
   :depends fastani: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends mummer4: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>3``
   :depends scikit-learn: 
   :depends seaborn: 
   :depends skani: 
   :depends tqdm: 
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

      mamba install drep

   and update with::

      mamba update drep

  To create a new environment, run::

      mamba create --name myenvname drep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drep:<tag>

   (see `drep/tags`_ for valid values for ``<tag>``)


.. |downloads_drep| image:: https://img.shields.io/conda/dn/bioconda/drep.svg?style=flat
   :target: https://anaconda.org/bioconda/drep
   :alt:   (downloads)
.. |docker_drep| image:: https://quay.io/repository/biocontainers/drep/status
   :target: https://quay.io/repository/biocontainers/drep
.. _`drep/tags`: https://quay.io/repository/biocontainers/drep?tab=tags


.. raw:: html

    <script>
        var package = "drep";
        var versions = ["3.5.0","3.4.5","3.4.4","3.4.3","3.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drep/README.html