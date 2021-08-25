:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plant_tribes_kaks_analysis'
.. highlight: bash

plant_tribes_kaks_analysis
==========================

.. conda:recipe:: plant_tribes_kaks_analysis
   :replaces_section_title:
   :noindex:

   KaKs Analysis pipeline

   :homepage: https://github.com/dePamphilis/PlantTribes
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plant_tribes_kaks_analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_kaks_analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_kaks_analysis/meta.yaml>`_

   


.. conda:package:: plant_tribes_kaks_analysis

   |downloads_plant_tribes_kaks_analysis| |docker_plant_tribes_kaks_analysis|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast: ``>=2.2.29``
   :depends crb-blast: 
   :depends emmix: 
   :depends mafft: ``>=7,<8``
   :depends paml: 
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plant_tribes_kaks_analysis

   and update with::

      conda update plant_tribes_kaks_analysis

   or use the docker container::

      docker pull quay.io/biocontainers/plant_tribes_kaks_analysis:<tag>

   (see `plant_tribes_kaks_analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_plant_tribes_kaks_analysis| image:: https://img.shields.io/conda/dn/bioconda/plant_tribes_kaks_analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/plant_tribes_kaks_analysis
   :alt:   (downloads)
.. |docker_plant_tribes_kaks_analysis| image:: https://quay.io/repository/biocontainers/plant_tribes_kaks_analysis/status
   :target: https://quay.io/repository/biocontainers/plant_tribes_kaks_analysis
.. _`plant_tribes_kaks_analysis/tags`: https://quay.io/repository/biocontainers/plant_tribes_kaks_analysis?tab=tags


.. raw:: html

    <script>
        var package = "plant_tribes_kaks_analysis";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plant_tribes_kaks_analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plant_tribes_kaks_analysis/README.html