:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plant_tribes_gene_family_classifier'
.. highlight: bash

plant_tribes_gene_family_classifier
===================================

.. conda:recipe:: plant_tribes_gene_family_classifier
   :replaces_section_title:
   :noindex:

   Gene family classifier pipeline

   :homepage: https://github.com/dePamphilis/PlantTribes
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plant_tribes_gene_family_classifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_classifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_classifier/meta.yaml>`_

   


.. conda:package:: plant_tribes_gene_family_classifier

   |downloads_plant_tribes_gene_family_classifier| |docker_plant_tribes_gene_family_classifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.5.0``
   :depends hmmer: ``>=3``
   :depends perl: 
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

      mamba install plant_tribes_gene_family_classifier

   and update with::

      mamba update plant_tribes_gene_family_classifier

  To create a new environment, run::

      mamba create --name myenvname plant_tribes_gene_family_classifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plant_tribes_gene_family_classifier:<tag>

   (see `plant_tribes_gene_family_classifier/tags`_ for valid values for ``<tag>``)


.. |downloads_plant_tribes_gene_family_classifier| image:: https://img.shields.io/conda/dn/bioconda/plant_tribes_gene_family_classifier.svg?style=flat
   :target: https://anaconda.org/bioconda/plant_tribes_gene_family_classifier
   :alt:   (downloads)
.. |docker_plant_tribes_gene_family_classifier| image:: https://quay.io/repository/biocontainers/plant_tribes_gene_family_classifier/status
   :target: https://quay.io/repository/biocontainers/plant_tribes_gene_family_classifier
.. _`plant_tribes_gene_family_classifier/tags`: https://quay.io/repository/biocontainers/plant_tribes_gene_family_classifier?tab=tags


.. raw:: html

    <script>
        var package = "plant_tribes_gene_family_classifier";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plant_tribes_gene_family_classifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plant_tribes_gene_family_classifier/README.html