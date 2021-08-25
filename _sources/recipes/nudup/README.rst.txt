:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nudup'
.. highlight: bash

nudup
=====

.. conda:recipe:: nudup
   :replaces_section_title:
   :noindex:

   Marks\/removes duplicate molecules based on the molecular tagging technology used in NuGEN products.

   :homepage: http://nugentechnologies.github.io/nudup/
   :license: GNU Lesser General Public License 3.0
   :recipe: /`nudup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup/meta.yaml>`_

   


.. conda:package:: nudup

   |downloads_nudup| |docker_nudup|

   :versions:
      
      

      ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2_post2016104-1``,  ``2.2_post2016104-0``

      

   
   :depends coreutils: 
   :depends grep: 
   :depends python: ``<3``
   :depends samtools: ``>=1.2``
   :depends sed: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nudup

   and update with::

      conda update nudup

   or use the docker container::

      docker pull quay.io/biocontainers/nudup:<tag>

   (see `nudup/tags`_ for valid values for ``<tag>``)


.. |downloads_nudup| image:: https://img.shields.io/conda/dn/bioconda/nudup.svg?style=flat
   :target: https://anaconda.org/bioconda/nudup
   :alt:   (downloads)
.. |docker_nudup| image:: https://quay.io/repository/biocontainers/nudup/status
   :target: https://quay.io/repository/biocontainers/nudup
.. _`nudup/tags`: https://quay.io/repository/biocontainers/nudup?tab=tags


.. raw:: html

    <script>
        var package = "nudup";
        var versions = ["2.3.3","2.3.3","2.3.3","2.3.2","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nudup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nudup/README.html