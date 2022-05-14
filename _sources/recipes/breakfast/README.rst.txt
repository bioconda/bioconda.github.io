:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakfast'
.. highlight: bash

breakfast
=========

.. conda:recipe:: breakfast
   :replaces_section_title:
   :noindex:

   breakfast\: fast putative outbreak cluster and infection chain detection using SNPs

   :homepage: https://github.com/rki-mf1/breakfast
   :license: MIT
   :recipe: /`breakfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast/meta.yaml>`_

   


.. conda:package:: breakfast

   |downloads_breakfast| |docker_breakfast|

   :versions:
      
      

      ``0.3.2-0``

      

   
   :depends click: ``>=8.1.3,<9.0.0``
   :depends networkx: ``>=2.8,<3.0``
   :depends numpy: ``>=1.22.3,<2.0.0``
   :depends pandas: ``>=1.4.2,<2.0.0``
   :depends python: ``>=3.6,<3.11``
   :depends scikit-learn: ``>=1.0.2,<2.0.0``
   :depends scipy: ``>=1.8.0,<2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install breakfast

   and update with::

      conda update breakfast

   or use the docker container::

      docker pull quay.io/biocontainers/breakfast:<tag>

   (see `breakfast/tags`_ for valid values for ``<tag>``)


.. |downloads_breakfast| image:: https://img.shields.io/conda/dn/bioconda/breakfast.svg?style=flat
   :target: https://anaconda.org/bioconda/breakfast
   :alt:   (downloads)
.. |docker_breakfast| image:: https://quay.io/repository/biocontainers/breakfast/status
   :target: https://quay.io/repository/biocontainers/breakfast
.. _`breakfast/tags`: https://quay.io/repository/biocontainers/breakfast?tab=tags


.. raw:: html

    <script>
        var package = "breakfast";
        var versions = ["0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakfast/README.html