.. title:: Package Recipe 'nudup'
.. highlight: bash


nudup
=====

.. conda:recipe:: nudup
   :replaces_section_title:

   Marks\/removes duplicate molecules based on the molecular tagging technology used in NuGEN products.

   :homepage: http://nugentechnologies.github.io/nudup/
   :license: GNU Lesser General Public License 3.0
   :recipe: /`nudup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup/meta.yaml>`_

   


.. conda:package:: nudup

   |downloads_nudup| |docker_nudup|

   :versions: 2.3.3, 2.3.2, 2.3.1, 2.2_post2016104

   :depends: :conda:package:`coreutils`  :conda:package:`grep`  :conda:package:`python` 2.7* :conda:package:`samtools` >=1.2 :conda:package:`sed`  

   :required~by: |required_by_nudup|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nudup

   and update with::

      conda update nudup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nudup


.. |required_by_nudup| conda:required_by:: nudup
.. |downloads_nudup| image:: https://img.shields.io/conda/dn/bioconda/nudup.svg?style=flat
   :alt:   (downloads)
.. |docker_nudup| image:: https://quay.io/repository/biocontainers/nudup/status
   :target: https://quay.io/repository/biocontainers/nudup







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nudup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nudup/README.html

